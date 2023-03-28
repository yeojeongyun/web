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
          <img
            src={
              "data:image/jpeg;base64,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"
            }
            alt="집"
          />
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
