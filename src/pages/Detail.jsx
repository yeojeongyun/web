import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Style.css";

export default function Home() {
  const movePage = useNavigate();

  function goHome() {
    movePage("/");
  }
  return (
    <div>
      <Header />
      <div class="note1" onClick={goHome}></div>

      <Footer />
    </div>
  );
}
