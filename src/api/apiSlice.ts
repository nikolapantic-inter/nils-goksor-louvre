import { GalleryI } from "@/lib/types/gallery.interface";
import { PhotoI } from "@/lib/types/photo.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const FLICKR_URL = "https://www.flickr.com/services/rest";
const GALLERY_URL = "http://localhost:1337";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints: (build) => ({
    getPhotos: build.query<{ photos: { photo: PhotoI[] } }, string>({
      query: (text: string) =>
        `${FLICKR_URL}?method=flickr.photos.search&api_key=${process.env.API_KEY}&text=${text}&format=json&nojsoncallback=1&per_page=20`,
    }),
    getGalleries: build.query<GalleryI[], void>({
      query: () => `${GALLERY_URL}/gall2eries`,
    }),
    createGallery: build.mutation<string, { gallery: GalleryI }>({
      query: ({ gallery }: { gallery: GalleryI }) => ({
        url: `${GALLERY_URL}/galleries`,
        method: "POST",
        body: gallery,
      }),
    }),
  }),
});

export const {
  useGetPhotosQuery,
  useGetGalleriesQuery,
  useCreateGalleryMutation,
} = api;
