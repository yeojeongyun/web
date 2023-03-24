import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Myslide from "./Myslide";
import "./Style.css";

export default function Home() {
  const movePage = useNavigate();

  function goAbout() {
    movePage("/about");
  }

  return (
    <div>
      <Header />
      <Myslide></Myslide>
      <button className="button" onClick={goAbout}>
        todo
      </button>
      <Footer />
    </div>
  );
}
