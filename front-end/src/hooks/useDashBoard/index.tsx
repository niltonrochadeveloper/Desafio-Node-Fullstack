import { useSession } from "next-auth/react";
import { useState } from "react";

const UseDashboard = () => {
  const { data: session }: any = useSession();
  const [isOpenHeader, setIsOpenHeader] = useState<boolean>(false);

  return {
    session,
    isOpenHeader,
    setIsOpenHeader,
  };
};

export default UseDashboard;
