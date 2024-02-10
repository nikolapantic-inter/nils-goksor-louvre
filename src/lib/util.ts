import { PhotoI } from "./types/photo.interface";

export const getPhotoUrl = ({
  photo,
  size,
}: {
  photo: PhotoI;
  size: string;
}) => {
  return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
};
