import { PhotoI } from "@/lib/types/photo.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://www.flickr.com/services/rest/";
// const API_KEY = "662a28be30b48e335808f24961126dc6"; // TODO REMVOVE!!

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
        `?method=flickr.photos.search&api_key=${process.env.API_KEY}&text=${text}&format=json&nojsoncallback=1`,
    }),
  }),
});

export const { useGetPhotosQuery } = api;
