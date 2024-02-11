import { PhotoI } from "./photo.interface";

export interface GalleryI {
  id: string;
  name: string;
  photos: PhotoI[];
}
