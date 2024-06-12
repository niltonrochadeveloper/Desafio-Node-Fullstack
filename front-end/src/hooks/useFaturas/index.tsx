import {
  useLazyClientesQuery,
  useLazyFaturasQuery,
  useLazyFoldersQuery,
} from "@/services/faturas";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const UseFaturas = () => {
  const { data: session }: any = useSession();
  const [isOpenHeader, setIsOpenHeader] = useState<boolean>(false);

  const [triggerClientes, {}] = useLazyClientesQuery();
  const [triggerFaturas, {}] = useLazyFaturasQuery();
  const [triggerFolders, {}] = useLazyFoldersQuery();

  const getClientes = async () => {
    const clientes = await triggerClientes()
      .unwrap()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log("error", error);
      });
    return clientes;
  };

  const getFaturas = async (instalation: string) => {
    const faturas = await triggerFaturas({ instalation })
      .unwrap()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log("error", error);
      });
    return faturas;
  };

  const getFolders = async () => {
    const folders = await triggerFolders()
      .unwrap()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log("error", error);
      });
    return folders;
  };

  return {
    session,
    getClientes,
    getFaturas,
    getFolders,
  };
};

export default UseFaturas;
