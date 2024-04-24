import * as BABYLON from 'babylonjs';
import 'babylonjs-gui';
export const createGUI = (scene, camera, mesh) => {
  const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", undefined, scene);
  let button = new BABYLON.GUI.Image("target", cctvIcon);
  button.width = "150px";
  button.height = "40px";
  button.color = "white";
  button.background = "green";
  button.onPointerUpObservable.add(function() {
      alert("Button Clicked");
  });
  advancedTexture.addControl(button);

  // 다른 GUI 요소 생성 및 설정
  // 예: target.linkWithMesh(mesh);
};