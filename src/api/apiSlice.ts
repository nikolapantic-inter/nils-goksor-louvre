import { PhotoI } from "@/lib/types/photo.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://www.flickr.com/services/rest/";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}`,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints: (build) => ({
    getPhotos: build.query<{ photos: { photo: PhotoI[] } }, string>({
      query: (text: string) =>
        `?method=flickr.photos.search&api_key=${process.env.API_KEY}&text=${text}&format=json&nojsoncallback=1&per_page=20`,
    }),
  }),
});

export const { useGetPhotosQuery } = api;
