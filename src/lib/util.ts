import { PhotoI } from "./types/photo.interface";

// all img sizers found here: https://www.flickr.com/services/api/misc.urls.html
export const getPhotoUrl = ({
  photo,
  size,
}: {
  photo: PhotoI;
  size: "q" | "b";
}) => {
  return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
};
