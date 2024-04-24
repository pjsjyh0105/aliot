import { atom } from 'recoil';
import { Scene } from '@babylonjs/core';

export const babylonSceneState = atom<Scene | null>({
  key: 'babylonSceneState', // 고유한 키
  default: null, // 초기값은 null 또는 씬 객체
});