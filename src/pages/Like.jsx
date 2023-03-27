import "./Style.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Like() {
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <br />
      <br />
      <h2>선호</h2>
      <br />
      <div className="container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelC__lky1uozTw1l0F3urYFzM2qKCpHtJsQ&usqp=CAU"
          alt="홈런볼"
        />
      </div>
      <br />
      <div className="container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQruLj4KFfuBihtph0awZ-Avnj75SaX9Pl1Tw&usqp=CAU"
          alt="홈런볼"
        />
      </div>
      <br />
      <div className="container">
        <img
          src="https://i.pinimg.com/236x/64/06/82/64068274eaaad48907ff9e9deb70a809.jpg"
          alt="앙꼬"
        />
      </div>
      <br />
      <div className="container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTLnh9kzOq6ZNUhF0Kuh4LKMojs5hgcuUeg&usqp=CAU"
          alt="향"
        />
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
