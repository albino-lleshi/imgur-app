import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.imgur.com/3",
    prepareHeaders: (headers) => {
      headers.set("Authorization", "Client-ID 0722695c406fa7d");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchImages: builder.query({
      query: (params) =>
        `/gallery/${params.section}/${params.sort}/${params.window}/${params.page}?showViral=${params.showViral}&mature=false&album_previews=false`,
    }),
  }),
});

export const { useFetchImagesQuery } = apiSlice;
