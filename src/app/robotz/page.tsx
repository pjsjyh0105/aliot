"use client";
import React, { useEffect, useRef, useState } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";
import "@babylonjs/loaders/glTF";

/*
트래킹 필요한 정보
1. 가게되는 좌표
2. 현재 회전한 각도(어딜 바라보고있는지가 아니라, 현재로부터 몇도 회전했는지. 회전한번 할때마다 정보를 읽어와야하남..)
3. 기기 id값?
*/

const positions = [
  {
    position: new BABYLON.Vector3(0, 0.25, -5),
    rotation: new BABYLON.Vector3(0, 0, 0),
  },
  {
    position: new BABYLON.Vector3(10, 0.25, -5),
    rotation: new BABYLON.Vector3(0, Math.PI / 2, 0),
  },
  {
    position: new BABYLON.Vector3(10, 0.25, 10),
    rotation: new BABYLON.Vector3(0, -Math.PI / 2, 0),
  },
  {
    position: new BABYLON.Vector3(-10, 0.25, 10),
    rotation: new BABYLON.Vector3(0, -Math.PI / 2, 0),
  },
  {
    position: new BABYLON.Vector3(-10, 0.25, -5),
    rotation: new BABYLON.Vector3(0, -Math.PI / 2, 0),
  },
  {
    position: new BABYLON.Vector3(0, 0.25, -5),
    rotation: new BABYLON.Vector3(0, -Math.PI / 2, 0),
  },
  {
    position: new BABYLON.Vector3(0, 0.25, -5.5),
    rotation: new BABYLON.Vector3(0, -Math.PI / 2, 0),
  },
];

let robotAnimation: BABYLON.AnimationGroup | undefined;
let robotPanel: BABYLON.AbstractMesh | undefined;
let robotHousePanel: BABYLON.AbstractMesh | undefined;
let robot: BABYLON.AbstractMesh | undefined;
let scene: BABYLON.Scene;
let selectionLayer: BABYLON.HighlightLayer;

let line: BABYLON.Mesh | undefined = undefined;
let tube: BABYLON.Mesh | undefined = undefined;
let lineLayer: BABYLON.HighlightLayer;
let path = [positions]; // 시작 위치를 포함하는 경로 배열
let tubepath = []; // 시작 위치를 포함하는 경로 배열

let lineMaterial: any;

const MyBabylonComponent: React.FC = () => {
  const [startAnim, setStartAnim] = useState(false);
  const [spacebarState, setspacebar] = useState(false);
  const [originPanelSize, setPanelSize] = useState(
    new BABYLON.Vector3(1, 1, 1)
  );
  const [originhomePanelSize, sethomePanelSize] = useState(
    new BABYLON.Vector3(1, 1, 1)
  );

  //line 변수
  const [startMove, setStartMove] = useState(false);
  const [lineVisible, setLineVisible] = useState(true);

  const engineRef = useRef<BABYLON.Engine | null>(null);
  const robotRef = useRef<BABYLON.AbstractMesh>();
  const robotAnimationStart = useRef<BABYLON.AnimationGroup>();
  const previousRadiusRef = useRef<number>();
  let currentPositionIndex = 0;
  const robotAnimationend = useRef<BABYLON.AnimationGroup>();

  useEffect(() => {
    // Babylon.js 시나리오를 작성하는 함수
    const createScene = () => {
      // Babylon.js 코드 작성
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
      // @ts-ignore
      scene.environmentTexture.intensity = 1;
      const camera = new BABYLON.ArcRotateCamera(
        "camera",
        25,
        0,
        25,
        new BABYLON.Vector3(0, 3, 5),
        scene
      );

      // 줌 레벨 제한
      camera.lowerRadiusLimit = 3; // 최소 줌 레벨
      camera.upperRadiusLimit = 30; // 최대 줌 레벨
      camera.wheelPrecision = 5; // 줌 인/아웃 속도
      camera.setPosition(new BABYLON.Vector3(0, 3, 5));
      camera.setTarget(BABYLON.Vector3.Zero());
      camera.attachControl(canvas, true);
      camera.radius = 30;
      var light = new BABYLON.DirectionalLight(
        "dir01",
        new BABYLON.Vector3(0.2, -1, 0),
        scene
      );
      light.position = new BABYLON.Vector3(0, 100, 0);

      // light.position = new BABYLON.Vector3(6, 9, 3);
      // GLTF 로더 활성화
      // 그림자 활성화
      const shadowGenerator = new BABYLON.ShadowGenerator(512, light);
      shadowGenerator.useBlurExponentialShadowMap = true;
      shadowGenerator.blurKernel = 32;

      selectionLayer = new BABYLON.HighlightLayer("selectionLayer", scene);
      lineLayer = new BABYLON.HighlightLayer("lineLayer", scene);

      // groundMesh.receiveShadows = true; // 그림자를 받는 역할
      // 여기에 추가적인 Babylon.js 코드를 작성하세요
      // 예를 들어, 모델 로딩 등
      BABYLON.SceneLoader.Append(
        "https://dt.gractor.com/demoModeling/",
        "space3_1.glb",
        scene,
        function (meshes) {
          for (var i = 0; i < scene.meshes.length; i++) {
            shadowGenerator.addShadowCaster(scene.meshes[i]);
          }
        }
      );

      BABYLON.SceneLoader.ImportMeshAsync(
        //modeling_b
        "",
        "https://dt.gractor.com/demoModeling/",
        "vacuum-body-raw.glb",
        scene
      ).then((c) => {
        let gltfMesh = c.meshes[0];
        gltfMesh.rotation.y = 0;
        gltfMesh.rotation.z = 0;
        let boundingBox =
          BABYLON.BoundingBoxGizmo.MakeNotPickableAndWrapInBoundingBox(
      // @ts-ignore
            gltfMesh
          );
        gltfMesh.position.y = 0;
        gltfMesh.receiveShadows = true;
        shadowGenerator.addShadowCaster(gltfMesh);
        boundingBox.position.y += -0.05;
        boundingBox.position.z -= 6;

        c.meshes.forEach((m) => {
          // console.log(m);
          // c.meshes.forEach((child) => {
          //   if (child instanceof BABYLON.Mesh) {
          //     selectionLayer.addMesh(child, new BABYLON.Color3(0, 0.64, 1));
          //   } else {
          //     //console.warn("Child is not a Mesh:", child);
          //   }
          // });
          if (m.name.includes("light")) {
            var material = new BABYLON.StandardMaterial(
              "transparentMaterial",
              scene
            );
            material.emissiveColor = new BABYLON.Color3(1, 0, 0); //0.477, 1, 0.751
            material.alpha = 0; // 0부터 1까지의 값으로 설정됩니다. 0은 완전히 투명하고 1은 완전히 불투명합니다.

            robotHousePanel = m;
            sethomePanelSize(
              new BABYLON.Vector3(
                robotHousePanel.scaling.x,
                robotHousePanel.scaling.y,
                robotHousePanel.scaling.z
              )
            );
            if (robotHousePanel) {
              robotHousePanel.scaling.x =
                originhomePanelSize.x * (camera.radius / 10);
              robotHousePanel.scaling.y =
                originhomePanelSize.y * (camera.radius / 10);
              robotHousePanel.scaling.z =
                originhomePanelSize.z * (camera.radius / 10);
            }
            // 메쉬에 재질을 할당합니다.originhomePanelSize
            m.material = material;
            // m.visibility = 0;
            // selectionLayer.addMesh(robotHousePanel, new BABYLON.Color3(0.84, 0.84, 0.64))
            // console.log("dddddddddddddddddddddddddddddddddd", m);
          }
        });
        //light-charge
        // home = boundingBox;robotHousePanel
      });

      BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "https://dt.gractor.com/demoModeling/",
        "vacuum-raw.glb",
        scene
      ).then((c) => {
        let glowlayers = new BABYLON.GlowLayer("glow", scene);
        glowlayers.intensity = 0.5;
        // console.log(c);
        c.meshes.forEach((m) => {
          // console.log(m);
          // c.meshes.forEach((child) => {
          //   if (child instanceof BABYLON.Mesh) {
          //     selectionLayer.addMesh(child, new BABYLON.Color3(0, 0.64, 1));
          //   } else {
          //     //console.warn("Child is not a Mesh:", child);
          //   }
          // });
          if (m.name.includes("light")) {
            var material = new BABYLON.StandardMaterial(
              "transparentMaterial",
              scene
            );
            material.emissiveColor = new BABYLON.Color3(1, 0, 0); //0.477, 1, 0.751
            material.alpha = 0; // 0부터 1까지의 값으로 설정됩니다. 0은 완전히 투명하고 1은 완전히 불투명합니다.
            m.isVisible = false;
            robotPanel = m;
            setPanelSize(
              new BABYLON.Vector3(
                robotPanel.scaling.x,
                robotPanel.scaling.y,
                robotPanel.scaling.z
              )
            );
            // 메쉬에 재질을 할당합니다.
            m.material = material;
            // m.visibility = 0;

            // console.log("dddddddddddddddddddddddddddddddddd", m);
          }
        });
        let gltfMesh = c.meshes[0];
        gltfMesh.rotation.y = 0;
        gltfMesh.rotation.z = 0;
        let boundingBox =
          BABYLON.BoundingBoxGizmo.MakeNotPickableAndWrapInBoundingBox(
      // @ts-ignore
            gltfMesh
          );
        gltfMesh.position.y = 0;
        gltfMesh.receiveShadows = true;
        boundingBox.position.z -= 6;
        boundingBox.position.y = 0.25;
        // boundingBox.rotation.x = -0.1;
        robot = boundingBox;
        // console.log(gltfMesh);
        // console.log("cc", c);
      // @ts-ignore
        robotAnimation = c.animationGroups;
        robotAnimation[0].stop();

        robotAnimationStart.current = robotAnimation[1];
        if (robotAnimationStart.current)
          robotAnimationStart.current.onAnimationGroupEndObservable.add(() => {
            // 애니메이션이 끝났을 때(state === 0), 콘솔에 로그를 출력합니다.
            setStartAnim(true);
            animationPlayRobot();

            selectionLayer.removeAllMeshes();
            if (robotPanel) {
              selectionLayer.addMesh(
      // @ts-ignore
                robotPanel,
                new BABYLON.Color3(0.477, 1, 0.751)
              );

              if (selectionLayer.hasMesh(robotPanel)) {
                robotPanel.isVisible = true;
              } else {
                robotPanel.isVisible = false;
              }
              robotPanel.scaling._x = originPanelSize.x * (camera.radius / 10);
              robotPanel.scaling._y = originPanelSize.y * (camera.radius / 10);
              robotPanel.scaling._z = originPanelSize.z * (camera.radius / 10);
            }
          });
        robotAnimationend.current = robotAnimation[0];
        if (robotAnimationend.current) {
          robotAnimationend.current.onAnimationGroupEndObservable.add(() => {
            // 애니메이션이 끝났을 때(state === 0), 콘솔에 로그를 출력합니다.
            if (selectionLayer) {
              selectionLayer.removeAllMeshes();
              //     selectionLayer.addMesh(child, new BABYLON.Color3(0, 0.64, 1));
              //   }
              if (robotHousePanel != undefined)
                selectionLayer.addMesh(
      // @ts-ignore
                  robotHousePanel,
                  new BABYLON.Color3(1, 0.64, 0)
                );
            }
          });

          robotAnimationend.current.play();
        }

        selectionLayer.blurVerticalSize = 1.5;
        selectionLayer.blurHorizontalSize = 1.5;
        selectionLayer.innerGlow = true;
        lineLayer.innerGlow = true;
        robotRef.current = robot;


        shadowGenerator.addShadowCaster(gltfMesh);
      });


      // 카메라의 radius 변경을 감시하는 Observable 생성

      const handleColorChange = () => {
        if (!previousRadiusRef.current) {
          previousRadiusRef.current = camera.radius;
          return;
        }

        if (camera.radius !== previousRadiusRef.current) {
          if (robotPanel) {
            if (selectionLayer.hasMesh(robotPanel)) {
              robotPanel.isVisible = true;
            } else {
              robotPanel.isVisible = false;
            }
            // console.log(originPanelSize);
            robotPanel.scaling._x = originPanelSize.x * (camera.radius / 10);
            robotPanel.scaling._y = originPanelSize.y * (camera.radius / 10);
            robotPanel.scaling._z = originPanelSize.z * (camera.radius / 10);
          }
          if (robotHousePanel) {
            if (selectionLayer.hasMesh(robotHousePanel)) {
              robotHousePanel.isVisible = true;
            } else {
              robotHousePanel.isVisible = false;
            }
            robotHousePanel.scaling.x =
              originhomePanelSize.x * (camera.radius / 10);
            robotHousePanel.scaling.y =
              originhomePanelSize.y * (camera.radius / 10);
            robotHousePanel.scaling.z =
              originhomePanelSize.z * (camera.radius / 10);
          }

          // Update the previous radius
          previousRadiusRef.current = camera.radius;
        }
      };

      // Attach camera radius change handler
      scene.onBeforeRenderObservable.add(handleColorChange);
      // 창 크기 조절 시 리사이즈 이벤트 처리
      window.addEventListener("resize", handleWindowResize);

      engineRef.current = engine;
      engine.runRenderLoop(() => {
        scene.render();
      });
    };
    // 시나리오 생성 함수 호출
    createScene();
    // 컴포넌트 언마운트 시에는 Babylon.js 리소스를 해제해야 합니다.
      window.addEventListener("keydown", handleKeyDown);
    // 컴포넌트 언마운트 시에는 Babylon.js 리소스를 해제해야 합니다.
    return () => {
      // Babylon.js 리소스 해제
      // 예를 들어, engine.dispose() 등
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "q" || event.key === "Q") {
      setLineVisible((lineVisible) => !lineVisible);
    }
  }; 
  const updateLine = (newPosition: any) => {
    path.push(newPosition); // 새 위치를 경로에 추가
    //tubepath.push(newPosition);
    if (line) {
      // 이미 선이 존재하면 삭제
      line.dispose();
    }

    line = BABYLON.MeshBuilder.CreateLines(
      "pathLine",
      {
        points: path,
        updatable: true,
      },
      scene
    );

    //standard material
    //lineMaterial.emissiveColor = new BABYLON.Color4(0.2, 1, 0.2, 1);
    //lineMaterial.diffuseColor = new BABYLON.Color3(0, 255, 0);
    //lineMaterial.ambientColor = new BABYLON.Color3(0.2, 1, 0.2); // 주변 환경 광에 반응하는 색상
    //pbr material

    //lineMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

    //emissiveColor로 기본 하얀색 발광. COlor3조정시 가운데 색만바뀜. 이걸 해결하려면 line이 아닌 tube로 해야하는데 tube는 2차원 vector를 받음.
    // if (tubepath.length >= 2) {
    //   tube = BABYLON.MeshBuilder.CreateTube(
    //     "tube",
    //     {
    //       path: tubepath,
    //       radius: 0.05, // 여기서 라인의 두께(반지름)을 조절합니다.
    //       updatable: true,
    //     },
    //     scene
    //   );
    // }
  };
  useEffect(() => {
    // Babylon.js 시나리오와 관련된 코드...
    scene.registerBeforeRender(() => {
      if (startMove && robotRef.current != null) {
        updateLine(robotRef.current.position);
      }
      if (line != null) {
        lineMaterial = new BABYLON.PBRMaterial("lineMaterial", scene);
        lineMaterial.albedoColor = new BABYLON.Color4(0.2, 0.8, 0.2, 0.5);
        lineMaterial.alpha = lineVisible ? 1.0 : 0.0;
        line.material = lineMaterial;
        if (!lineVisible) {
          lineLayer.removeAllMeshes();
        } else {
          lineLayer.removeAllMeshes();
          lineLayer.addMesh(line, new BABYLON.Color3(0, 0.64, 1)); //원판 컬러 0, 0.64, 1
        }
      }
    });
    console.log(lineVisible);
  }, [lineVisible, startMove]);
  const handleWindowResize = () => {
    if (engineRef.current) {
      engineRef.current.resize();
    }
  };
  const animationPlayRobot = () => {
    // console.log("robotAnimation", robotAnimation);
    const { position, rotation } = positions[currentPositionIndex++]; //트래킹시 여기에 값추가하면 됨
    if (robotRef.current) {
      const rotateAnimation = BABYLON.Animation.CreateAndStartAnimation(
        "rotation",
        robotRef.current,
        "rotation",
        40,
        100,
        robotRef.current.rotation,
        robotRef.current.rotation.add(rotation),
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
        undefined,
        () => {
          if (robotRef.current) {
            setStartMove(true);
            const moveAnimation = BABYLON.Animation.CreateAndStartAnimation(
              "position",
              robotRef.current,
              "position",
              10,
              100,
              robotRef.current.position,
              position,
              BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
              undefined,
              () => {
                if (currentPositionIndex >= positions.length) {
                  if (robotAnimationend.current) {
                    setStartMove(false);
                    selectionLayer.removeAllMeshes();
                    selectionLayer.addMesh(
      // @ts-ignore
                      robotPanel,
                      new BABYLON.Color3(1, 0.477, 0.751)
                    );
                    currentPositionIndex = 0;

                    setspacebar(false);

                    robotAnimationend.current.play();
                  }
                  setStartAnim(false);
                  console.log("spacebarState", spacebarState);

                  return;
                }
                console.log(positions);
                // positions.push(positions[currentPositionIndex - 1]);  //트래킹 확인 테스트 완료
                return animationPlayRobot();
              }
            );
          }
        }
      );
    }
  };

  const moveRobot3 = () => {
    setspacebar(true);

    if (robotAnimationStart.current) {
      // console.log("start");
      if (!startAnim) {
        if (selectionLayer) selectionLayer.removeAllMeshes();

        robotAnimationStart.current.play();
      }
    }
    if (startAnim) {
      if (currentPositionIndex < positions.length) {
        //호출하면 넣은 값으로 이동및 넣은 값만큼 회전.
        animationPlayRobot();
      }
    }
  };

  const handleKeyDown2 = (event) => {
    if (event.keyCode === 32 || event.key === " ") {
      if (!spacebarState) {
        moveRobot3();
      }
    }
  };

  const clickeEvt = () => {
    if (!spacebarState) {
        moveRobot3();
      }
  }

  return (
    <div style={{background: "linear-gradient(180deg, #1C2949 0%, #030620 100%, #030620 100%)"}}>
      <div style={{position: "absolute", width: "100%", height: "5rem", display:"flex", top: "0", justifyContent: "center", alignItems: "center", background: "rgba(25, 37, 69, 0.10)", backdropFilter: "blur(6px)", color:"#fff", fontSize: "1.3125rem"}}>로봇청소기 애니메이션</div>
      <div style={{position: "absolute", bottom: "2.5rem", right: "5rem", width: "5rem", background:"#6A92FA", height: "2.5rem",display:"flex", justifyContent: "center", alignItems: "center", borderRadius: "1.3rem", color: "#fff", cursor: "pointer"}} onClick={clickeEvt}>시작 !</div>
    <canvas
      id="renderCanvas"
      style={{ width: "100%", height: "100%" }}
      // onKeyDown={handleKeyDown2} // onKeyDown 이벤트 핸들러 추가
      //tabIndex={0} // 이벤트 핸들러가 동작하려면 tabIndex가 필요합니다.
    />
    </div>
  );
};

export default MyBabylonComponent;
