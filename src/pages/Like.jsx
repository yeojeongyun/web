import "./Style.css";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Like() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 25,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <br />
      <br />
      <h2>선호</h2>
      <br />
      <br />
      <br />
      <Slider {...settings}>
        <div>
          <br />
          <br />
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelC__lky1uozTw1l0F3urYFzM2qKCpHtJsQ&usqp=CAU"
            }
            alt="홈런볼"
          />
        </div>
        <div>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQruLj4KFfuBihtph0awZ-Avnj75SaX9Pl1Tw&usqp=CAU"
            }
            alt="붕어빵"
          />
        </div>
        <div>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aT93aik-UDsC4Sw_YQKNHcgjAykqFENuqA&usqp=CAU"
            }
            alt="폼폼푸린"
          />
        </div>

        <div>
          <img src="img/like2.jpg" alt="집" />
        </div>
        <div>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTLnh9kzOq6ZNUhF0Kuh4LKMojs5hgcuUeg&usqp=CAU"
            }
            alt="향"
          />
          <br />
          <br />
          <br />
        </div>
      </Slider>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
