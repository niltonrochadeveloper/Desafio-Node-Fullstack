"use client";

import { useLazySignUpQuery, useLoginMutation } from "@/services/auth";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const UseAuth = () => {
  const dispatch = useDispatch();
  const { data: session }: any = useSession();
  const [triggerLogin, { isLoading, isSuccess, error, isError, data }] =
    useLoginMutation();
  const [triggerSignUp] = useLazySignUpQuery();

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return await signIn("credentials", {
      redirect: false, // Para evitar redirecionamento automático
      email,
      password,
    });
  };

  const handleSignUp = async ({
    email,
    password,
    alias,
    username,
  }: {
    email: string;
    password: string;
    alias: string;
    username: string;
  }) => {
    return await triggerSignUp({ email, password, alias, username });
  };

  return {
    handleLogin,
    handleSignUp,
    session,
    loginDataInfo: {
      isLoading,
      isSuccess,
      error,
      isError,
      data,
    },
  };
};

export default UseAuth;
