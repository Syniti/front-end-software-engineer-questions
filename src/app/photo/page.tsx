"use client";
import React, { useMemo } from "react";
import { PhotoList } from "./component/PhotoList";
import { sampleImages } from "./data/mockData";
import { IPhoto } from "./data/model";

export default function Photo() {
    const images = useMemo<IPhoto[]>(() => sampleImages, []);
  return (
    <div className="bg-white">
      <span className="text-3xl text-bold">Photos ({images.length})</span>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image: IPhoto) => (
            <PhotoList key={image.id} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}
