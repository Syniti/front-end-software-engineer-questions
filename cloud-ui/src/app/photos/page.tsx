import { createApi } from "unsplash-js";
import { ApiResponse } from "unsplash-js/dist/helpers/response";;
import { UnSplashPhotoType } from "./models";
import { PhotoList } from "../components/PhotoList";

export default function Email() {
  async function getPhotos(): Promise<UnSplashPhotoType> {
    "use server";

    const unsplash = createApi({
      accessKey:
        "b01af8cbbf166d41632f33cd4a9c66f892afdf324f8fabb8cf4ec21d0164364b",
    });

    const response = await unsplash.photos.list({ page: 1 });

    return response.response;
  }
  return <PhotoList getPhotos={getPhotos} />;
}
