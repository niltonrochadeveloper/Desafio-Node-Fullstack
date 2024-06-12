import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import type { RootState } from "@/lib/store";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
  prepareHeaders: (headers: Headers, { getState }) => {
    const { token } = (getState() as RootState).auth;

    headers.set("Content-type", "application/json");

    if (token != "") {
      headers.set("Authorization", token);
    }
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const response = await baseQuery(args, api, extraOptions);
  // const data = response.data as ApiResponse<any>;
  const error = response.error as FetchBaseQueryError;

  if (error && [500].includes(error.status as number)) {
    // console.log("error Service: ", error);
  }

  // if (error && [401, 403].includes(error.status as number)) {
  //     const { isSignedIn } = (api.getState() as RootState).auth;
  //     if (isSignedIn) {
  //         api.dispatch(setSignedOut());
  //     }
  // }
  // if (data && data.status == 302) {
  //     const { id: operacaoId, opcoes, key, cpf } = data.result;
  //     const { password } = (args as FetchArgs).body;
  //     api.dispatch(
  //         setTwoStep({
  //             operacaoId,
  //             opcoes,
  //             key
  //         })
  //     );
  // }
  return response;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
  refetchOnReconnect: true,
});
