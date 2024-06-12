import { Header } from "@/components/shared";
import { Suspense } from "react";
import { Container } from "./styles";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Header />
      <div className="px-32 flex">
        <Suspense fallback={<p>carregando...</p>}>{children}</Suspense>
      </div>
    </Container>
  );
};

export default Layout;
