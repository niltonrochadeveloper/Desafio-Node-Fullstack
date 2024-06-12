import Link from "next/link";

const Header: React.FC<any> = ({ nome }) => {
  return (
    <div className="h-[10vh] px-32 flex items-center justify-between">
      <div className="flex gap-20">
        <div className="w-24 text-white">
          <span>Logo</span>
        </div>
        <nav>
          <ul className="flex gap-8 text-white">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/eventos">
              <li>Eventos</li>
            </Link>
            <Link href="/locais">
              <li>Locais</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-white rounded-full h-9 w-9" />
        <p>Olá, {nome ? nome : "nome"}</p>
      </div>
    </div>
  );
};

export default Header;
