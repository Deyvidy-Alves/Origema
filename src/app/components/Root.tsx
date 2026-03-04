import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop /> {/* Garante que toda nova página carregue do topo */}
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
