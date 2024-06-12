// userReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: [];
  token: string;
}

const initialState: AuthState = {
  user: [],
  token: "",
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setToken: (state, action: PayloadAction<[]>) => {
      state.user = action.payload;
    },
    setSignOf: () => initialState,
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
