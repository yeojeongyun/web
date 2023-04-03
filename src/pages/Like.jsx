import "./Style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Like() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 25,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const [data, setData] = useState(null);
  const movePage = useNavigate();

  const images = [
    {
      src: "img/like1.jpg",
      alt: "홈런볼",
      width: "120",
      height: "180",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQruLj4KFfuBihtph0awZ-Avnj75SaX9Pl1Tw&usqp=CAU",
      alt: "붕어빵",
      width: "120",
      height: "180",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aT93aik-UDsC4Sw_YQKNHcgjAykqFENuqA&usqp=CAU",
      alt: "폼폼푸린",
      width: "120",
      height: "180",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTLnh9kzOq6ZNUhF0Kuh4LKMojs5hgcuUeg&usqp=CAU",
      alt: "향",
      width: "120",
      height: "180",
    },
    {
      src: "img/like2.jpg",
      alt: "집",
      width: "120",
      height: "180",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>선호</h2>

      <Slider {...settings} className="Slider">
        {images.map((image, index) => (
          <Slider key={index}>
            <img src={image.src} width={image.width} height={image.height} />
          </Slider>
        ))}
      </Slider>
    </div>
  );
}
