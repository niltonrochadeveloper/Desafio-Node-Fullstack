import Link from "next/link";
import { CardEvents, CardLocals, Content, LastAdds } from "./styles";

const Backoffice: React.FC<any> = ({ nome }) => {
  return (
    <Content>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Olá, {nome ? nome : "Nome"}</h2>
        <small>Confira todos os sesu eventos e locais em um só lugar!</small>
      </div>
      <div className="flex justify-between gap-4">
        <CardLocals>
          <div>
            <h2>Locais</h2>
            <small>Confira todos os locais cadastrados!</small>
          </div>
          <button>Conferir locais</button>
        </CardLocals>
        <CardEvents>
          <div>
            <h2>Locais</h2>
            <small>Confira todos os eventos cadastrados!</small>
          </div>
          <button>Conferir eventos</button>
        </CardEvents>
      </div>
      <div className="flex justify-between gap-4">
        <LastAdds>
          <div className="flex justify-between items-center w-full">
            <h2>Últimos locais adicionados</h2>
            <Link href="/backoffice/eventos">
              <p>Ver todos</p>
            </Link>
          </div>
          <table className="w-full">
            <thead></thead>
            <tbody>
              <tr>
                <td>Morumbis</td>
                <td>Avenida Francisco Morato</td>
                <td>C, D, E, F, G, H, I, J, K</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Morumbis</td>
                <td>Avenida Francisco Morato</td>
                <td>C, D, E, F, G, H, I, J, K</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Morumbis</td>
                <td>Avenida Francisco Morato</td>
                <td>C, D, E, F, G, H, I, J, K</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Morumbis</td>
                <td>Avenida Francisco Morato</td>
                <td>C, D, E, F, G, H, I, J, K</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </LastAdds>
        <LastAdds>
          <div className="flex justify-between items-center w-full">
            <h2>Últimos Eventos adicionados</h2>
            <Link href="/backoffice/eventos">
              <p>Ver todos</p>
            </Link>
          </div>
          <table className="w-full">
            <thead></thead>
            <tbody>
              <tr>
                <td>Morumbis</td>
                <td>Avenida Francisco Morato</td>
                <td>C, D, E, F, G, H, I, J, K</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Morumbis</td>
                <td>Avenida Francisco Morato</td>
                <td>C, D, E, F, G, H, I, J, K</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Morumbis</td>
                <td>Avenida Francisco Morato</td>
                <td>C, D, E, F, G, H, I, J, K</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Morumbis</td>
                <td>Avenida Francisco Morato</td>
                <td>C, D, E, F, G, H, I, J, K</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </LastAdds>
      </div>
    </Content>
  );
};

export default Backoffice;
