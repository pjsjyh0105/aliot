"use client";
import React, { useEffect, useRef, useState } from "react";
import "../../../styles/water.css";

import Box from "@mui/material/Box";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF/2.0/"; // 필요한 glTF 로더를 가져옵니다.
import * as GUI from "@babylonjs/gui"; // AdvancedDynamicTexture 모듈을 가져옵니다.

import styles from "./Water.module.css";

const PrettoSlider = styled(Slider)({
  color: "#3988E529",
  height: "1.125rem",
  "& .MuiSlider-root": {
    margin: "0",
  },
  "& .MuiSlider-track": {
    border: "none",
    height: "6px",
    margin: "0 0.5rem",
    color: "#93C5FF",
  },
  "& .MuiSlider-thumb": {
    height: "2.5rem",
    width: "2.5rem",
    filter: "drop-shadow(0px 0px 7px #DCECFF)",
    backgroundImage: "url('/img/sliderHandle.png')",
    backgroundSize: "cover", // 배경 이미지가 엄지를 올바르게 덮도록합니다
    backgroundPosition: "center", // 배경 이미지를 가운데로 정렬합니다
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
});
function valuetext(value) {
  return `${value}`;
}

const tableScene = "water.glb"; //"test-only water.glb";

let scene: BABYLON.Scene;
let cam1: BABYLON.Camera;
let cam2: BABYLON.Camera;
let camorigin: BABYLON.Camera;
let allAnimationGroups: BABYLON.AnimationGroup;
let valueY: number = 10.25;
const MyBabylonwater: React.FC = () => {
  const engineRef = useRef<BABYLON.Engine | null>(null);
  const [sliderValue, setSliderValue] = useState(-10);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [previousValue, setPreviousValue] = useState(0); // 이전 값 상태

  const [isVisible, setIsVisible] = useState(false);
  const [isTimeLineVisible, setTimeLineIsVisible] = useState(true);

  const handleDivClick = () => {
    // isVisible 상태를 토글하여 div의 표시 여부를 변경합니다.
    setIsVisible(!isVisible);
  };

  const outWaterEvt = () => {
    scene.activeCameras = [];
    scene.activeCameras.push(camorigin);
    setTimeLineIsVisible(!isTimeLineVisible);
  };

  const clickedWaterEnt = () => {
    scene.activeCameras = [];
    scene.activeCameras.push(cam1);
    scene.activeCameras.push(cam2);
    handleDivClick();

    setTimeLineIsVisible(!isTimeLineVisible);
    allAnimationGroups[0].play();
  };

  let waterHeightPanel: BABYLON.Mesh;

  function updateClock() {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = currentTime.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
    let day = currentTime.getDate();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";

    // 12시간 형식으로 변환
    hours = hours % 12;
    hours = hours ? hours : 12; // 0시인 경우 12시로 표시

    // 한 자리 숫자일 경우 앞에 0을 추가
    // @ts-ignore
    month = (month < 10 ? "0" : "") + month;
    // @ts-ignore
    day = (day < 10 ? "0" : "") + day;
    // @ts-ignore
    hours = (hours < 10 ? "0" : "") + hours;
    // @ts-ignore
    minutes = (minutes < 10 ? "0" : "") + minutes;
    // HTML 요소에 현재 시간 업데이트

    setDate(`${year}. ${month}. ${day}`);
    setTime(`${hours}:${minutes} ${ampm}`);
  }
  useEffect(() => {
    // Babylon.js 시나리오를 작성하는 함수
    const createScene = () => {
      console.log(0);
      // Babylon.js 코드 작성
      const canvas = document.getElementById(
        "renderCanvas"
      ) as HTMLCanvasElement;
      const engine = new BABYLON.Engine(canvas, true);
      scene = new BABYLON.Scene(engine);

      var light = new BABYLON.DirectionalLight(
        "dir01",
        new BABYLON.Vector3(0.2, -1, 0),
        scene
      );
      light.position = new BABYLON.Vector3(0, 100, 0);
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
        new BABYLON.Vector3(0, 0, 0),
        scene
      );

      // 줌 레벨 제한
      camera.lowerRadiusLimit = 3; // 최소 줌 레벨
      camera.upperRadiusLimit = 300; // 최대 줌 레벨
      camera.wheelPrecision = 5; // 줌 인/아웃 속도
      camera.setPosition(new BABYLON.Vector3(-40, 20, -50));
      camera.setTarget(BABYLON.Vector3.Zero());
      camera.attachControl(canvas, true);
      camera.radius = 80;

      camorigin = camera;
      // 카메라 생성
      const camera1 = new BABYLON.FreeCamera(
        "camera1",
        new BABYLON.Vector3(0, 5, 10),
        scene
      );
      const camera2 = new BABYLON.ArcRotateCamera(
        "camera2",
        25,
        0,
        25,
        new BABYLON.Vector3(0, 0, 0),
        scene
      );
      cam1 = camera1;
      cam2 = camera2;
      camera2.position = new BABYLON.Vector3(0, 0, 200);
      camera2.setTarget(BABYLON.Vector3.Zero());

      camera2.viewport = new BABYLON.Viewport(0.5, 0, 0.5, 1.0);
      scene.activeCameras.push(camera);

      // camera1.attachControl(canvas, false);
      camera2.attachControl(canvas, false);

      let clipPlaneY,
        plane,
        stencilPlane,
        mesh,
        meshInsideMaterial,
        meshOutsideMaterial;
      meshOutsideMaterial = new BABYLON.StandardMaterial(
        "meshOutsideMaterial",
        scene
      );
      meshOutsideMaterial.diffuseColor = new BABYLON.Color3(1.0, 1.0, 0);
      meshOutsideMaterial.backFaceCulling = true;
      meshInsideMaterial = new BABYLON.StandardMaterial(
        "meshInsideMaterial",
        scene
      ); //변경 CustomMaterial에서
      meshInsideMaterial.diffuseColor = new BABYLON.Color3(1.0, 1.0, 0);
      meshInsideMaterial.backFaceCulling = false;
      //       meshInsideMaterial.Fragment_Before_FragColor(
      //         "\
      //   if(gl_FrontFacing) discard;\
      //     "
      //       );
      let stencilPlaneMaterial = new BABYLON.StandardMaterial(
        "stencilPlaneMaterial",
        scene
      );
      // stencilPlaneMaterial.diffuseColor = new BABYLON.Color3(1.0, 1.0, 0);
      stencilPlaneMaterial.diffuseColor = new BABYLON.Color3(0, 0.463, 0.8);
      stencilPlaneMaterial.alpha = 0.563;
      stencilPlaneMaterial.roughness = 0.5;
      stencilPlaneMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
      stencilPlaneMaterial.emissiveColor = new BABYLON.Color3(0, 0, 0);
      stencilPlaneMaterial.ambientColor = new BABYLON.Color3(0, 0, 0);

      BABYLON.SceneLoader.ImportMesh(
        "",
        "/water/modeling/",
        tableScene,
        scene,
        function (meshes) {
          engine.resize();

          scene.setRenderingAutoClearDepthStencil(0, false);
          scene.setRenderingAutoClearDepthStencil(1, false);
          scene.setRenderingAutoClearDepthStencil(2, false);
          mesh = meshes[1];
          // @ts-ignore
          let meshInside = meshes[1].clone();
          mesh.material = scene.getMaterialByName("water");
          meshInside.material = scene.getMaterialByName("water");
          let boundingBox = mesh.getBoundingInfo().boundingBox;
          let bboxSizeX = boundingBox.maximum.x - boundingBox.minimum.x;
          let bboxSizeY = boundingBox.maximum.y - boundingBox.minimum.y;
          let bboxSizeZ = boundingBox.maximum.z - boundingBox.minimum.z;
          let bboxMax = Math.max(
            boundingBox.maximum.x + 10,
            boundingBox.maximum.y,
            boundingBox.maximum.z
          );

          scene.onBeforeRenderObservable.add(() => {
            // clear depth
            engine.clear(undefined, false, true, false);
          });

          //   let planes = BABYLON.Mesh.CreatePlane(
          //     "planeY",
          //     2 * bboxMax,
          //     scene
          //   );

          //   planes.rotate(new BABYLON.Vector3(1, 0, 0), Math.PI / 2);
          //   planes.position.set(0, -10, 0);
          let plane = BABYLON.Mesh.CreatePlane("planeY", 2 * bboxMax, scene);
          plane.rotate(new BABYLON.Vector3(1, 0, 0), Math.PI / 2);
          plane.position.set(0, bboxSizeY, 0);
          plane.material = new BABYLON.StandardMaterial("planeMaterial", scene);
          // @ts-ignore
          plane.material.diffuseColor = new BABYLON.Color3(1.0, 1.0, 1.0);
          plane.material.wireframe = true;

          let stencilPlane = BABYLON.Mesh.CreatePlane(
            "planeStencil",
            2 * bboxMax,
            scene
          );
          stencilPlane.rotate(new BABYLON.Vector3(1, 0, 0), Math.PI / 2);
          stencilPlane.position.set(0, bboxSizeY, 0);
          stencilPlane.material = scene.getMaterialByName("water");
          // stencilPlane.visibility = 0;
          plane.visibility = 0;

          mesh.renderingGroupId = 0;
          meshInside.renderingGroupId = 3;
          stencilPlane.renderingGroupId = 2;

          // addObservers();
          mesh.onBeforeRenderObservable.add(function () {
            scene.clipPlane = new BABYLON.Plane(0, 1, 0, valueY);
            plane.position.set(0, -valueY, 0);
            // engine.setStencilBuffer(true);
          });

          mesh.onAfterRenderObservable.add(function () {
            scene.clipPlane = null;
            // engine.setStencilBuffer(false);
          });

          // @ts-ignore
          meshInside.onBeforeRenderObservable.add(function () {
            scene.clipPlane = new BABYLON.Plane(0, 1, 0, valueY);
            plane.position.set(0, -valueY, 0);
            stencilPlane.position.set(0, -valueY, 0);
            engine.setStencilBuffer(true);
          });

          // @ts-ignore
          meshInside.onAfterRenderObservable.add(function () {
            scene.clipPlane = null;
            engine.setStencilBuffer(false);
          });

          let previousStencilMask = engine.getStencilMask();
          let previousStencilFunction = engine.getStencilFunction();
          stencilPlane.onBeforeRenderObservable.add(function () {
            engine.setStencilBuffer(true);
            engine.setStencilMask(0x00);
            engine.setStencilFunction(BABYLON.Engine.EQUAL);
          });

          stencilPlane.onAfterRenderObservable.add(() => {
            engine.setStencilBuffer(false);
            engine.setStencilMask(previousStencilMask);
            engine.setStencilFunction(previousStencilFunction);
          });
        }
      );

      const testglb = () => {
        BABYLON.SceneLoader.ImportMesh(
          "",
          "/water/modeling/",
          "underpass.glb",
          scene,
          function (meshes) {
            meshes.forEach((obj) => {
              if (obj.name.includes("cam")) {
                if (obj.name.includes("1")) {
                  camera1.position = obj.position;
                  camera1.position.x = -obj.position.x;
                  camera1.rotation = obj.rotation;
                  camera1.viewport = new BABYLON.Viewport(0, 0, 0.5, 1.0);
                }
              }
              if (obj.name.includes("Arrow_LED_box.002")) {
                camera1.setTarget(obj.position);
              }
            });

            allAnimationGroups = scene.animationGroups;
            allAnimationGroups.forEach((animationGroup) => {
              animationGroup.stop();
            });
            allAnimationGroups[1].play();
          }
        );

        camera1.setEnabled(false);
        camera2.setEnabled(false);
      };

      testglb();

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
    return () => {
      // Babylon.js 리소스 해제
      // 예를 들어, engine.dispose() 등
    };
  }, []);

  // updateClock();
  useEffect(() => {
    // Update clock every second
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []);
  const handleWindowResize = () => {
    if (engineRef.current) {
      engineRef.current.resize();
    }
  };
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;
    setSliderValue(value);
    valueY = -value;
    if (scene) {
      scene.render();
    } else {
      console.error("Scene is not initialized");
    }
    // Update box height based on slider value
    // if (waterHeightPanel) {
    //   console.log("waterHeightPanel",waterHeightPanel)
    //   waterHeightPanel.position.y = value;
    // }

    const currentValue = valueY;

    if (valueY == 12) {
      if (currentValue > previousValue) {
      } else if (currentValue < previousValue) {
        setIsVisible(true);
      } else {
      }
    }

    // 이전 값 상태 업데이트
    setPreviousValue(currentValue);
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #1C2949 0%, #030620 100%, #030620 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "5rem",
          display: "flex",
          top: "0",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(25, 37, 69, 0.10)",
          backdropFilter: "blur(6px)",
          color: "#fff",
          fontSize: "1.3125rem",
        }}
      >
        지하차도 수위 모니터링
        <div className="modelinfo-view-title-right">
          <div className="modelinfo-view-title-right-topAlarm" id="topAlarmBn">
            <input type="checkbox" />
            <div className="top-line-modelinfo-view"></div>
            <div className="top-time-modelinfo-view">
              <label
                className="top-time-modelinfo-view-date"
                id="modelinfo-view-date"
              >
                {date}
              </label>
              <label
                className="top-time-modelinfo-view-time"
                id="modelinfo-view-time"
              >
                {time}
              </label>
            </div>
          </div>
        </div>
      </div>
      {isTimeLineVisible && (
        <Box
          sx={{
            width: "90%",
            position: "absolute",
            bottom: "5rem",
            height: "10.8125rem",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "linear-gradient(0deg, rgba(2, 3, 5, 0.24) 0%, rgba(0, 7, 27, 0.13) 93.95%)",
            backdropFilter: "blur(7.5px)",
            padding: "1.25rem",
          }}
        >
          <div style={{ color: "#fff", display: "flex" }}>
            <div
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                lineHeight: "140%",
                letterSpacing: "-0.03694rem",
                marginRight: "4.5rem",
              }}
            >
              ◉ &nbsp; 타임 라인
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "0.88rem",
                marginRight: "1.69rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <img
                  src="/img/calender.png"
                  style={{ width: "1.625rem", height: "1.625rem" }}
                ></img>
                2024. 08. 04
                <img
                  src="/img/click-arrow.png"
                  style={{ width: "1.625rem", height: "1.625rem" }}
                ></img>
              </div>
              <div
                style={{
                  width: "0.87375rem",
                  height: "1px",
                  borderRadius: "50%",
                  background: "#fff",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <img
                  src="/img/calender.png"
                  style={{ width: "1.625rem", height: "1.625rem" }}
                ></img>
                2024. 08. 06
                <img
                  src="/img/click-arrow.png"
                  style={{ width: "1.625rem", height: "1.625rem" }}
                ></img>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              <input
                type="radio"
                id="day"
                name="typeDate"
                style={{ display: "none" }}
                disabled
              ></input>
              <input
                type="radio"
                id="date"
                name="typeDate"
                style={{ display: "none" }}
              ></input>
              <label
                htmlFor="day"
                style={{
                  display: "flex",
                  width: "3.625rem",
                  height: "1.875rem",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "0.1875rem0 0 0.1875rem",
                  background: "#FFFFFF1A",
                }}
              >
                일
              </label>
              <label
                htmlFor="date"
                style={{
                  display: "flex",
                  width: "3.625rem",
                  height: "1.875rem",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "0 0.1875rem 0.1875rem 0",
                  background: "#FFFFFF4D",
                  cursor: "pointer",
                }}
              >
                시간
              </label>
            </div>
          </div>
          <div style={{ overflow: "auto" }}>
            <PrettoSlider
              aria-label="waterHeight"
              step={0.25}
              defaultValue={-10}
              onChange={handleSliderChange}
              getAriaValueText={valuetext}
              color="secondary"
              min={-20}
              max={2}
              sx={{ margin: "1.13rem 0 0 2.23rem", width: "96%" }}
            />
            <div
              style={{
                paddingLeft: "1.3rem",
                display: "flex",
                gap: "4rem",
                fontSize: "0.875rem",
                color: "#fff",
                fontWeight: "500",
                marginTop: "-0.3rem",
              }}
            >
              <label>00: 00</label>
              <label>02: 00</label>
              <label>04: 00</label>
              <label>06: 00</label>
              <label>08: 00</label>
              <label>10: 00</label>
              <label>12: 00</label>
              <label>14: 00</label>
              <label>16: 00</label>
              <label>18: 00</label>
              <label>20: 00</label>
              <label>22: 00</label>
              <label>24: 00</label>
              <label>00: 00</label>
              <label>02: 00</label>
              <label>04: 00</label>
            </div>
            <div
              style={{
                display: "flex",
                gap: "91.88",
                color: "#FFFFFFCC",
                fontSize: "0.75rem",
                fontWeight: "400",
                paddingLeft: "1.3rem",
                marginTop: "0.06rem",
              }}
            >
              <label style={{ marginRight: "82.2rem" }}>2024. 08. 04</label>
              <label>2024. 08. 05</label>
            </div>
          </div>
        </Box>
      )}
      {!isTimeLineVisible && (
        <div className={styles.notificationContainer} onClick={outWaterEvt}>
          알림 화면 벗어나기
        </div>
      )}

      <canvas
        id="renderCanvas"
        style={{ width: "100%", height: "100%" }}
        // onKeyDown={handleKeyDown2} // onKeyDown 이벤트 핸들러 추가
        //tabIndex={0} // 이벤트 핸들러가 동작하려면 tabIndex가 필요합니다.
      />
      {isVisible && (
        <div
          style={{
            display: "flex",
            width: "23.6875rem",
            height: "15.475rem",
            padding: "0.9375rem 0",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.625rem",
            borderRadius: "0.3757rem",
            border: "1px solid #FFF",
            background: "#770707BF",
            boxShadow: "0px 0px 50px 10px rgba(255, 0, 0, 0.30)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            color: "#FFF",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="36"
              viewBox="0 0 41 36"
              fill="none"
            >
              <path
                d="M22.1543 1.34591L40.3528 32.8675C40.5204 33.1579 40.6087 33.4873 40.6087 33.8227C40.6087 34.158 40.5205 34.4874 40.3528 34.7779C40.1851 35.0683 39.944 35.3094 39.6536 35.4771C39.3631 35.6448 39.0337 35.7331 38.6984 35.7331H2.30146C1.96612 35.7331 1.63669 35.6448 1.34628 35.4771C1.05587 35.3094 0.814713 35.0683 0.647046 34.7779C0.479379 34.4874 0.391111 34.158 0.391113 33.8227C0.391115 33.4873 0.479388 33.1579 0.647058 32.8675L18.8455 1.34591C19.0132 1.05551 19.2544 0.81437 19.5448 0.646713C19.8352 0.479056 20.1646 0.390793 20.4999 0.390793C20.8352 0.390793 21.1647 0.479056 21.4551 0.646713C21.7455 0.81437 21.9866 1.05551 22.1543 1.34591ZM18.5895 26.1811V30.0019H22.4103V26.1811H18.5895ZM18.5895 12.8083V22.3603H22.4103V12.8083H18.5895Z"
                fill="#FFD600"
                fill-opacity="0.9"
              />
            </svg>
            <div
              style={{
                marginTop: "0.9rem",
                fontSize: "1.375rem",
                fontWeight: "600",
                lineHeight: "180%",
              }}
            >
              위험 감지 알림
            </div>
          </div>
          <div
            style={{
              gap: "0.31rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                lineHeight: "180%",
              }}
            >
              많은 빗물로 차단기가 내려갑니다
            </div>
            <div
              style={{
                fontSize: "0.8125rem",
                fontWeight: "400",
                color: "#FFFFFFE5",
              }}
            >
              발생 시각 - <span>10:16:37</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                color: "#0b1221",
                margin: "0.94rem 0",
              }}
            >
              <div
                style={{
                  width: "8.75rem",
                  height: "1.9375rem",
                  background: "#FFFFFFE5",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "0.13rem",
                  borderRadius: "0.125rem",
                  opacity: "0.4",
                }}
                onClick={handleDivClick}
              >
                닫기
              </div>
              <div
                style={{
                  width: "8.75rem",
                  height: "1.9375rem",
                  background: "#FFFFFFE5",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "0.13rem",
                  borderRadius: "0.125rem",
                }}
                onClick={clickedWaterEnt}
              >
                바로 이동
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBabylonwater;
