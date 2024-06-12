import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth/index";
import { Metadata } from "next";

export interface PrivateLayouProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "CMS - Project",
  description: "meu primeiro cms",
};

const PrivateLayout = async ({ children }: PrivateLayouProps) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    // redirect("/login");
  }
  return <>{children}</>;
};

export default PrivateLayout;
