"use client";

import { useEffect, useState } from "react";
import { UnSplashPhotoType } from "../photos/models";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { Heading, Image, Pane } from "evergreen-ui";

const PhotoList = ({
  getPhotos,
}: {
  getPhotos: () => Promise<UnSplashPhotoType>;
}) => {
  const [results, setResults] = useState<Basic[] | undefined>([]);
  useEffect(() => {
    getPhotos().then((res) => setResults(res?.results));
  }, [getPhotos]);

  return (
    <Pane>
      <Pane display="flex" margin={10} justifyContent="center">
        <Heading size={800}>Your backup photos</Heading>
      </Pane>
      <Pane
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
      >
        {results?.map((result: Basic) => {
          return (
            <Image
              height={300}
              width={200}
              key={result.id}
              src={result.urls.regular}
              alt={result.alt_description as string}
              marginBottom={10}
            ></Image>
          );
        })}
      </Pane>
    </Pane>
  );
};

export { PhotoList };
