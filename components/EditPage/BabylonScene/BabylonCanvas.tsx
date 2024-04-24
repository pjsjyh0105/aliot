
"use client";
import React, { useEffect, useRef } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";
import "@babylonjs/loaders/glTF";

interface SceneProps {
    engine: BABYLON.Engine;
}
export let scene: BABYLON.Scene;

// engineRef를 전역 변수로 선언
export let engineRef: BABYLON.Engine | null = null;

const BabylonCanvas: React.FC = () => {
    
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
      scene.environmentTexture.intensity = 0.5;
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
      camera.upperRadiusLimit =100; // 최대 줌 레벨
      camera.wheelPrecision = 5; // 줌 인/아웃 속도
      camera.setPosition(new BABYLON.Vector3(0, 3, 5));
      camera.setTarget(BABYLON.Vector3.Zero());
      camera.attachControl(canvas, true);
      camera.radius = 30;
      
        // 조명 추가
        const light = new BABYLON.HemisphericLight(
            "light",
            new BABYLON.Vector3(1, 1, 0),
            scene
        );
        //const box = BABYLON.MeshBuilder.CreateBox("box1", { size: 5 }, scene);


      engineRef = engine; // engineRef에 할당
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

  return (
    <canvas
      id="renderCanvas"
      style={{ width: "100%", height: "100%", position: "absolute"}}
    />
  );
};

export default BabylonCanvas;
