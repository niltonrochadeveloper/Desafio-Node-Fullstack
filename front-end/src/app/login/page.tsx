"use client";

// import { Button, Input } from "@/components/core";
import UseAuth from "@/hooks/useAuth";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const router = useRouter();
  const { handleLogin } = UseAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const res: any = await handleLogin(data);

    if (res?.error) {
      console.error("Sign in error: ", res.error);
      setError("password", {
        message: "Email ou senha inválida!",
      });
    } else {
      router.replace("/login");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-50">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="flex flex-col">
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
              defaultValue="admin@admin.com"
            />
            {errors.email && (
              <small className="text-red-500 px-2">
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="flex flex-col">
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              defaultValue="1234@Qwe"
            />
            {errors.password && (
              <small className="text-red-500 px-2">
                {errors.password.message}
              </small>
            )}
          </div>
          <button type="submit">Acessar</button>
          <Link href="/signup" className="text-center">
            <small className="underline">Não tenho cadastro</small>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
