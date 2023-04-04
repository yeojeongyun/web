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
      <label className="input-file" for="input-file">
        업로드
      </label>
      <input type="file" id="input-file" style={{ display: "none" }} />
    </div>
  );
}
