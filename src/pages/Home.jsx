import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Myslide from "./Myslide";
import "./Style.css";

export default function Home() {
  const movePage = useNavigate();

  return (
    <div>
      <Myslide />
    </div>
  );
}
