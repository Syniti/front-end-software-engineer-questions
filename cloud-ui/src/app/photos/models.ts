import { Basic } from "unsplash-js/dist/methods/photos/types";

export interface IUnSplashPhotos {
  results: Basic[];
  total: number;
}

export type UnSplashPhotoType = IUnSplashPhotos | undefined;
