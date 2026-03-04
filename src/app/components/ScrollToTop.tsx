import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Força a tela a rolar para o eixo X: 0, Y: 0 =
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; 
}