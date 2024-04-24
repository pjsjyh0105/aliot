"use client";
import React, { useEffect, useRef, useState } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";
import "@babylonjs/loaders/glTF";
import { Box, IconButton } from "@mui/material";
import CCTVmodal from "./CCTVmodal";
import { AdvancedDynamicTexture } from "babylonjs-gui";
import { svgUrl } from "./cctvIcon";
import { svgrectUrl } from "./cctvrect";
import { svgUrlY } from "./SVGFile/CCTVIconY";
import * as GUI from "babylonjs-gui";
import LeftCCTV from "./CCTV/LeftCCTV";
import RightCCTV from "./CCTV/RightCCTV";
import { poiClick, firstfloor, secondfloor } from "./CCTVclick";
import { useRecoilState } from "recoil";
import AllCCTV from "./CCTV/AllCCTV";
import { svgrectUrlY } from "./SVGFile/CCTVRectY";
import { Resetbtn } from "./SVGFile/Reset";
import { Playbtn } from "./SVGFile/Play";
import { Pausebtn } from "./SVGFile/Pause";
import { Gridbtn } from "./SVGFile/Grid";

const Geyeum: React.FC = ({ nowTab }: { nowTab: any }) => {
  const [getTab, setGetTab] = useState("");
  const [isCCTVon, setIsCCTVon] = useState(false);
  const [isLefton, setIsLefton] = useState(false);
  const [isRighton, setIsRighton] = useState(false);
  const [cctvInfo, setCctvInfo] = useState("");
  const [isSceneLoaded, setIsSceneLoaded] = useState(false);
  const [sendinfo, setSendinfo] = useState([]);
  const [thispoiClick, setThispoiClick] = useRecoilState(poiClick);
  const [allCCTVon, setAllCCTVon] = useState(false);
  const [cctvnum, setCCTVNum] = useState(0);
  const [cctvsecondnum, setCCTVsecondNum] = useState(0);
  const [getfirstfloor, setFirstfloor] = useRecoilState(firstfloor);
  const [getsecondfloor, setSecondfloor] = useRecoilState(secondfloor);
  const [isPlay, setIsPlay] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const ResetfillColor = isReset ? "#293174" : "#1C1F3C";
  const [isGrid, setIsGrid] = useState(false);
  const GridfillColor = isGrid ? "#4E4E9F" : "#323265";
  const [gridlineList, setGridlineList] = useState();
  //처음 loadmesh정리
  const [fullcamPos, setFullcamPos] = useState(new BABYLON.Vector3(0, 0, 0));
  const [secondCamPos, setSecondCamPos] = useState(
    new BABYLON.Vector3(0, 0, 0)
  );
  const [firstCCTV, setFirstCCTV] = useState([]);
  const [firstCCTVmesh, setFirstCCTVmesh] = useState([]);
  const [first2CCTV, setFirst2CCTV] = useState([]);
  const [secondCCTV, setSecondCCTV] = useState([]);
  const [second2CCTV, setSecond2CCTV] = useState([]);
  const [firstMeshes, setFirstMesh] = useState([]);
  const [secondMeshes, setSecondMeshes] = useState([]);
  const [thirdMeshes, setThirdMeshes] = useState([]);
  const [groundMeshes, setGroundMeshes] = useState([]);
  const [allCCTV, setAllCCTV] = useState([]);
  let getmodel;
  const animationGroupCam = useRef(null);
  const [camera, setCamera] = useState<BABYLON.ArcRotateCamera | null>(null);
  const [advancedTexturetest, setAdvancedTexturetest] =
    useState<GUI.AdvancedDynamicTexture | null>(null);
  const advancedTextureRef = useRef<GUI.AdvancedDynamicTexture | null>(null);
  const advancedTextureRef2 = useRef<GUI.AdvancedDynamicTexture | null>(null);
  let scene: BABYLON.Scene;
  let lookPosition = new BABYLON.Vector3(0, 9, 0);
  function createGridView(size, TargetScene) {
    let gridLines = [];
    let gridTemp = 5;
    for (let i = -size; i <= size; i++) {
      // X 축 방향의 라인
      let lineX = BABYLON.MeshBuilder.CreateLines(
        "linesX",
        {
          points: [
            new BABYLON.Vector3(i * gridTemp, 0.25, -size * gridTemp),
            new BABYLON.Vector3(i * gridTemp, 0.25, size * gridTemp),
          ],
          instance: null,
        },
        TargetScene
      );

      // Z 축 방향의 라인
      let lineZ = BABYLON.MeshBuilder.CreateLines(
        "linesZ",
        {
          points: [
            new BABYLON.Vector3(-size * gridTemp, 0.25, i * gridTemp),
            new BABYLON.Vector3(size * gridTemp, 0.25, i * gridTemp),
          ],
          instance: null,
        },
        TargetScene
      );

      // 클릭 방지
      lineX.isPickable = false;
      lineZ.isPickable = false;

      //안보이게 하기
      lineX.isVisible = false;
      lineZ.isVisible = false;

      lineX.color = new BABYLON.Color3(0.79, 0.79, 0.79); // 흰색
      lineX.alpha = 0.5;
      lineZ.color = new BABYLON.Color3(0.79, 0.79, 0.79); // 흰색
      lineZ.alpha = 0.5;
      // 생성된 라인을 배열에 추가
      gridLines.push(lineX, lineZ);
    }

    return gridLines;
  }
  function setGridVisibilitys(visible, gridlineList) {
    for (let i = 0; i < gridlineList.length; i++) {
      gridlineList[i].isVisible = visible;
    }
  }
  function createRotationAnimation(scene, mesh) {
    camera.target = lookPosition;
    if (!animationGroupCam.current) {
      animationGroupCam.current = new BABYLON.AnimationGroup(
        "animationGroup_cam"
      );
    }

    // Animation 생성
    let moveani = new BABYLON.Animation(
      "animationGroup_camRot",
      "alpha",
      15,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    let moveKeyFrames = [];
    moveKeyFrames.push({
      frame: 0,
      value: -1.5708,
    });
    moveKeyFrames.push({
      frame: 300,
      value: 2 * Math.PI,
    });

    moveani.setKeys(moveKeyFrames);
    camera.animations.push(moveani);
    animationGroupCam.current.addTargetedAnimation(moveani, camera);

    // animationGroupCam.onAnimationEndObservable.add(function () {
    //   //console.log("Animation ended");
    //   //animationRotateStart = false;
    // });

    animationGroupCam.current.play(true);
  }
  const stopAnimation = () => {
    // AnimationGroup이 있고 애니메이션 중이면 중지
    if (animationGroupCam.current) {
      animationGroupCam.current.stop();
    }
  };
  const firstClick = () => {
    camera.setPosition(
      new BABYLON.Vector3(
        -39.53868767826897,
        42.526883617990165,
        15.336713184510767
      )
    );
    camera.setTarget(firstMeshes[0]._absolutePosition);
    firstOnOff(true, true);
    secondOnOff(false, false);
    thirdOnOff(false);
    groundOnOff(false);
  };
  const SecondClick = () => {
    camera.setPosition(
      new BABYLON.Vector3(
        14.519154600810436,
        26.97448105858184,
        -24.500222581887265
      )
    );
    camera.setTarget(firstMeshes[0]._absolutePosition);
    firstOnOff(false, false);
    secondOnOff(true, true);
    thirdOnOff(false);
    groundOnOff(false);
  };
  const originPosClick = () => {
    if (camera != null) {
      camera.setTarget(lookPosition);
      const newpos = new BABYLON.Vector3(
        fullcamPos.x,
        fullcamPos.y - 5,
        fullcamPos.z
      );
      camera.setPosition(newpos);

      console.log(fullcamPos);
    }
    firstOnOff(true, false);
    secondOnOff(true, false);
    thirdOnOff(true);
    groundOnOff(true);
  };
  const groundOnOff = (state) => {
    if (state) {
      groundMeshes.forEach((mesh, index) => {
        mesh.visibility = 1;
      });
    } else {
      groundMeshes.forEach((mesh, index) => {
        mesh.visibility = 0;
      });
    }
  };
  const firstOnOff = (state, gui = true) => {
    if (advancedTextureRef) {
      let children = advancedTextureRef.current.rootContainer.children.slice();
      children.forEach((child) => {
        advancedTextureRef.current.rootContainer.isVisible = gui;
      });
    }
    if (state) {
      firstMeshes.forEach((mesh, index) => {
        mesh.isPickable = true;
        mesh.visibility = 1;
        console.log(mesh.name, mesh._absolutePosition);
      });
    } else {
      firstMeshes.forEach((mesh, index) => {
        mesh.isPickable = false;
        mesh.visibility = 0;
      });
    }
  };

  const secondOnOff = (state, gui = true) => {
    if (advancedTextureRef2) {
      let children = advancedTextureRef2.current.rootContainer.children.slice();
      children.forEach((child) => {
        advancedTextureRef2.current.rootContainer.isVisible = gui;
      });
    }
    if (state) {
      secondMeshes.forEach((mesh, index) => {
        mesh.isPickable = true;
        mesh.visibility = 1;
      });
    } else {
      secondMeshes.forEach((mesh, index) => {
        mesh.isPickable = false;
        mesh.visibility = 0;
      });
    }
  };
  const thirdOnOff = (state) => {
    if (state) {
      thirdMeshes.forEach((mesh, index) => {
        mesh.isPickable = true;
        mesh.visibility = 1;
      });
    } else {
      thirdMeshes.forEach((mesh, index) => {
        mesh.isPickable = false;
        mesh.visibility = 0;
      });
    }
  };
  const loadScene = async () => {
    return new Promise((resolve, reject) => {
      const canvas = document.getElementById(
        "renderCanvas"
      ) as HTMLCanvasElement;
      const engine = new BABYLON.Engine(canvas, true);
      scene = new BABYLON.Scene(engine);

      // 배경색 투명하게 설정
      scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
      // scene.createDefaultCameraOrLight(false, false, false);
      let hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData(
        "https://assets.babylonjs.com/environments/environmentSpecular.env",
        scene
      );

      hdrTexture.gammaSpace = false;
      scene.environmentTexture = hdrTexture;
      //  console.log((this.scene.activeCamera.maxZ - this.scene.activeCamera.minZ) / 2, 0.3)
      const newAdvancedTexture = AdvancedDynamicTexture.CreateFullscreenUI(
        "UI",
        true,
        scene
      );
      setAdvancedTexturetest(newAdvancedTexture); // 상태 업데이트
      advancedTextureRef.current =
        GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);
      advancedTextureRef2.current =
        GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);

      const initCamera = new BABYLON.ArcRotateCamera(
        "camera",
        25,
        0,
        25,
        new BABYLON.Vector3(0, 3, 5),
        scene
      );
      setCamera(initCamera);
      initCamera.setPosition(new BABYLON.Vector3(0, 3, 5));
      initCamera.setTarget(lookPosition);
      initCamera.attachControl(canvas, true);
      initCamera.lowerRadiusLimit = 25;
      initCamera.upperRadiusLimit = 140;
      initCamera.radius = 30;
      var light = new BABYLON.DirectionalLight(
        "dir01",
        new BABYLON.Vector3(0.2, -1, 0),
        scene
      );

      light.intensity = 3;
      light.position = new BABYLON.Vector3(0, 100, 0);

      var curve = new BABYLON.ColorCurves();
      curve.globalHue = 140;
      curve.globalDensity = 20;
      curve.globalSaturation = 180;

      curve.highlightsHue = 80;
      curve.highlightsDensity = 40;
      curve.highlightsSaturation = -80;

      // curve.shadowsHue = 2;
      // curve.shadowsDensity = -100;
      // curve.shadowsSaturation = -10;
      // scene.imageProcessingConfiguration.colorCurvesEnabled = true;
      //scene.imageProcessingConfiguration.colorCurves = curve;
      // GLTF 로더 활성화
      // 그림자 활성화
      const shadowGenerator = new BABYLON.ShadowGenerator(512, light);
      shadowGenerator.useBlurExponentialShadowMap = true;
      shadowGenerator.blurKernel = 32;

      // groundMesh.receiveShadows = true; // 그림자를 받는 역할
      // 여기에 추가적인 Babylon.js 코드를 작성하세요
      // 예를 들어, 모델 로딩 등

      getmodel = BABYLON.SceneLoader.LoadAssetContainerAsync(
        "/GEYEUM_1", // 파일이 위치한 경로
        ".glb", // 파일 이름
        scene // BABYLON.Scene 객체
      ).then((c) => {
        c.addAllToScene();
        let cctvcheck = 0;
        let cctvcheck2 = 0;
        let firstlist = [];
        let secondlist = [];
        c.meshes.forEach((m) => {
          if (
            m.name.includes("Plane") ||
            m.name.includes("Object") ||
            m.name.includes("ddang_curve_")
          ) {
            setGroundMeshes((prevMesh) => [...prevMesh, m]);
          }
          if (m.name.includes("1F")) {
            setFirstMesh((prevMesh) => [...prevMesh, m]);
          }
          if (m.name.includes("2F")) {
            setSecondMeshes((prevMesh) => [...prevMesh, m]);
          }
          if (m.name.includes("3F")) {
            setThirdMeshes((prevMesh) => [...prevMesh, m]);
          }
          if (m.name.includes("full")) {
            const newpos = new BABYLON.Vector3(
              m._absolutePosition.x,
              m._absolutePosition.y - 5,
              m._absolutePosition.z
            );
            setFullcamPos(newpos);
            initCamera.setPosition(newpos);
            console.log(m._position);
          } else {
            m._absolutePosition.y += 5;
            console.log(m.name, m._absolutePosition);
          }

          if (m.name.includes("2F-cctv")) {
            setSecondCamPos(m._position);
          }
          if (m.name.includes("cctv")) {
            m.isPickable = true;
            m.actionManager = new BABYLON.ActionManager(scene);
            m.actionManager.registerAction(
              new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPickTrigger,
                function () {
                  setCctvInfo(m.name.split("_")[0]);
                  setThispoiClick(m.name.split("_")[0]);
                }
              )
            );
            let target;
            if (m.name.includes("1F")) {
              target = new GUI.Image("target", svgUrl);
            } else if (m.name.includes("2F")) {
              target = new GUI.Image("target", svgUrlY);
            }
            target.width = "30px";
            target.height = "30px";
            target.id = m.name;

            let backgroundRect = new GUI.Rectangle("rect");
            backgroundRect.width = "100px";
            backgroundRect.height = "38px";
            backgroundRect.cornerRadius = 5;
            backgroundRect.color = "white";
            backgroundRect.thickness = 0;
            backgroundRect.background = "transparent";
            let backgroundImage;
            if (m.name.includes("1F")) {
              backgroundImage = new GUI.Image("backgroundImage", svgrectUrl);
            } else if (m.name.includes("2F")) {
              backgroundImage = new GUI.Image("backgroundImage", svgrectUrlY);
            }

            backgroundImage.width = "100%";
            backgroundImage.height = "100%";
            backgroundRect.addControl(backgroundImage);
            let panel = new GUI.StackPanel();
            panel.isVisible = true;
            panel.isVertical = false; // 수평 레이아웃으로 설정
            panel.width = "140px";
            panel.height = "44px";
            backgroundRect.addControl(panel); // Rectangle에 패널 추가
            let word = m.name.split("_")[0];
            let text1 = new GUI.TextBlock();
            text1.text = word;
            text1.color = "white";
            text1.top = "-2px";
            text1.fontSize = "16px";
            text1.textHorizontalAlignment =
              GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            panel.addControl(text1);
            let canvas = document.createElement("canvas");
            let context = canvas.getContext("2d");
            context.font = "1rem Noto Sans";
            let metrics = context.measureText(m.name.split("_")[0]);
            let textWidth = metrics.width;
            backgroundRect.width = textWidth * 2 + "px";

            if (
              advancedTextureRef &&
              m.name.includes("1F-cctv") &&
              m.name.includes("primitive0")
            ) {
              cctvcheck += 1;
              advancedTextureRef.current.addControl(target);
              advancedTextureRef.current.addControl(backgroundRect);
              firstlist.push(m.name.split("_")[0]);
            } else if (
              advancedTextureRef2 &&
              m.name.includes("2F-cctv") &&
              m.name.includes("primitive0")
            ) {
              cctvcheck2 += 1;
              advancedTextureRef2.current.addControl(target);
              advancedTextureRef2.current.addControl(backgroundRect);
              secondlist.push(m.name.split("_")[0]);
            }
            backgroundRect.isVisible = false;
            target.linkWithMesh(m);
            backgroundRect.linkWithMesh(m);
            backgroundRect.linkOffsetX = 0;
            backgroundRect.linkOffsetY = -40;
            backgroundRect.zIndex = 2;
            scene.onBeforeRenderObservable.add(() => {
              var cameraPosition = scene.activeCamera.position;
              var distance = BABYLON.Vector3.Distance(
                cameraPosition,
                m._absolutePosition
              );
              if (distance < 20) {
                target.isVisible = false;
                backgroundRect.isVisible = false;
              } else if (getTab != "all") {
                target.isVisible = true;
              } else {
                target.isVisible = false;
              }
            });
            target.onPointerClickObservable.add(function (
              eventData,
              eventState
            ) {
              setCctvInfo(target.id.split("_")[0]);
              setThispoiClick(m.name.split("_")[0]);
            });
            target.onPointerEnterObservable.add(() => {
              document.body.style.cursor = "pointer";
            });
            target.onPointerOutObservable.add(() => {
              document.body.style.cursor = "default";
            });
            target.onPointerEnterObservable.add(() => {
              backgroundRect.isVisible = true; // 마우스 오버 시 Rect 표시
            });
            target.onPointerOutObservable.add(() => {
              backgroundRect.isVisible = false; // 마우스 오버 시 Rect 표시
            });
          }
          if (m.name.includes("1F-cctv") && m.name.includes("primitive0")) {
            // cctvGui(m, "first")
            setFirstCCTVmesh((prevCCTV) => [...prevCCTV, m]);
            setAllCCTV((prevCCTV) => [...prevCCTV, m]);
            setFirstCCTV((prevCCTV) => [...prevCCTV, m._absolutePosition]);
          }

          if (m.name.includes("2F-cctv") && m.name.includes("primitive0")) {
            setAllCCTV((prevCCTV) => [...prevCCTV, m]);

            setSecondCCTV((prevCCTV) => [...prevCCTV, m._absolutePosition]);
          }

          if (m.name.includes("light")) {
            var material = new BABYLON.StandardMaterial(
              "transparentMaterial",
              scene
            );

            material.emissiveColor = new BABYLON.Color3(1, 0, 0); //0.477, 1, 0.751
            material.alpha = 0; // 0부터 1까지의 값으로 설정됩니다. 0은 완전히 투명하고 1은 완전히 불투명합니다.

            // 메쉬에 재질을 할당합니다.
            m.material = material;
            // m.visibility = 0;
          }
        });
        let gltfMesh = c.meshes[0];
        gltfMesh.rotation.y = 0;
        gltfMesh.rotation.z = 0;

        shadowGenerator.addShadowCaster(gltfMesh);
        setCCTVNum(cctvcheck);
        setCCTVsecondNum(cctvcheck2);
        setFirstfloor(firstlist);
        setSecondfloor(secondlist);
        let gridSize = 20;
        const newGridLines = createGridView(gridSize, scene);
        console.log(newGridLines);
        setGridlineList(newGridLines);

        console.log(getmodel);
        resolve();
      });
      engine.runRenderLoop(() => {
        scene.render();
      });
    });
  };
  const ResethandleMouseDown = () => {
    setIsReset(true); // 클릭 시작 시 활성화
  };

  const ResethandleMouseUp = () => {
    setIsReset(false); // 클릭 끝날 때 비활성화
  };

  useEffect(() => {
    // Babylon.js 시나리오를 작성하는 함수

    // Babylon.js 코드 작성

    // 시나리오 생성 함수 호출
    loadScene()
      .then(() => {
        setIsSceneLoaded(true); // 씬 로딩 완료 처리
      })
      .catch((error) => {
        console.error("Scene loading error:", error);
      });
    // 컴포넌트 언마운트 시에는 Babylon.js 리소스를 해제해야 합니다.
    return () => {
      // Babylon.js 리소스 해제
      // 예를 들어, engine.dispose() 등
    };
  }, []);
  useEffect(() => {
    if (isSceneLoaded) {
      firstOnOff(true, false);
      secondOnOff(true, false);
      setIsLefton(false);
      setSendinfo(allCCTV);
    }
  }, [isSceneLoaded]);
  useEffect(() => {
    if (nowTab == "all") {
      originPosClick();
      setGetTab("all");
      setAllCCTVon(false);
      setIsLefton(false);
    } else if (nowTab == "first") {
      firstClick();
      setGetTab("first");
      setAllCCTVon(false);
      setIsLefton(true);
    } else if (nowTab == "second") {
      SecondClick();
      setGetTab("second");
      setIsLefton(true);
      setAllCCTVon(false);
    } else {
      setGetTab("cctv");
      setIsLefton(true);
      setAllCCTVon(true);
    }
  }, [nowTab]);

  return (
    <Box
      sx={{
        overflowY: "hidden",
        justifyContent: "center",
        display: "flex",

        position: "absolute",
        zIndex: "0",
        width: "100%",
        height: "100%",
      }}
    >
      {isCCTVon && (
        <CCTVmodal cctvinfo={cctvInfo} setIsCCTVon={setIsCCTVon}></CCTVmodal>
      )}
      {isLefton && <LeftCCTV cctvinfo={sendinfo} setfloor={getTab}></LeftCCTV>}
      {isLefton && getTab != "cctv" && (
        <RightCCTV cctvinfo={sendinfo} setfloor={getTab}></RightCCTV>
      )}
      {allCCTVon && <AllCCTV num={cctvnum} secondnum={cctvsecondnum}></AllCCTV>}
      <canvas
        id="renderCanvas"
        touch-action="none"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflowY: "hidden",
          border: "none",
          outline: "none",
          display: getTab != "cctv" ? "block" : "none",
        }}
        tabIndex={0} // 이벤트 핸들러가 동작하려면 tabIndex가 필요합니다.
      />
      {!allCCTVon && (
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{ marginRight: "1.56rem" }}
            onMouseDown={() => {
              ResethandleMouseDown();
            }}
            onMouseUp={() => {
              ResethandleMouseUp();
            }}
            onMouseLeave={() => {
              ResethandleMouseUp();
            }}
            onClick={() => {
              camera.setPosition(fullcamPos);
              camera.setTarget(lookPosition);
            }}
          >
            {" "}
            <Resetbtn fillcolor={ResetfillColor}></Resetbtn>
          </IconButton>
          <IconButton
            sx={{ marginRight: "1.56rem" }}
            onClick={() => {
              setIsPlay(!isPlay);
              if (isPlay) {
                stopAnimation();
              } else {
                createRotationAnimation(scene, getmodel);
              }
            }}
          >
            {" "}
            {isPlay ? <Pausebtn></Pausebtn> : <Playbtn></Playbtn>}
          </IconButton>

          <IconButton
            onClick={() => {
              setGridVisibilitys(!isGrid, gridlineList);

              setIsGrid(!isGrid);
            }}
          >
            <Gridbtn fillcolor={GridfillColor}></Gridbtn>
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Geyeum;
