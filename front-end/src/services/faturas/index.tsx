import { api } from "../index";

export const faturasService = api.injectEndpoints({
  endpoints: (build) => ({
    clientes: build.query<any | unknown, void>({
      query: () => ({
        url: `/pdf/extract`,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data, meta } = await queryFulfilled;
        // console.log("data", data);
      },
    }),
    faturas: build.query<any | unknown, { instalation: string }>({
      query: ({ instalation }) => ({
        url: `/pdf/extract/${instalation}`,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data, meta } = await queryFulfilled;
        // console.log("data", data);
      },
    }),
    folders: build.query<any | unknown, void>({
      query: () => ({
        url: `/pdf/extract/folders`,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data, meta } = await queryFulfilled;
        // console.log("data", data);
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useLazyClientesQuery,
  useLazyFaturasQuery,
  useLazyFoldersQuery,
} = faturasService;
