import { api } from "../index";

export const authService = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any | unknown, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: `/auth/login`,
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data, meta } = await queryFulfilled;
        console.log("data", data);
      },
    }),
    signUp: build.query<
      any | unknown,
      { email: string; password: string; alias: string; username: string }
    >({
      query: (body) => ({
        url: `/auth/signup`,
        method: "POST",
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data, meta } = await queryFulfilled;
      },
    }),
    forgotPassword: build.query<any, { email: string }>({
      query: ({ email }) => ({
        method: "POST",
        url: `/users/forgot-password`,
        body: {
          email,
        },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data, meta } = await queryFulfilled;
        if (data && data.status == 200) {
          console.log("deu certo na api forgot password");
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useLazyForgotPasswordQuery,
  useLazySignUpQuery,
} = authService;
