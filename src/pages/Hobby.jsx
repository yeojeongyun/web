import "./Style.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Hobby() {
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <br />
      <br />
      <h2>취미</h2>
      <div style={{ textAlign: "left" }}>
        <h3>책</h3>
      </div>
      <br />
      <br />
      <div style={{ textAlign: "left" }}>
        <h3>넷플릭스</h3>
      </div>
      <br />
      <br />
      <div style={{ textAlign: "left" }}>
        <h3>이 외</h3>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
