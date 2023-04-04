import "./Style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

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
  const StyledSlider = styled(Slider)`
    padding-bottom: 30px;

    .slick-dots {
      margin-top: 15px;
      margin-bottom: 25px;
    }
  `;
  const images = [
    {
      src: "img/like1.jpg",
      alt: "홈런볼",
      height: "180",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQruLj4KFfuBihtph0awZ-Avnj75SaX9Pl1Tw&usqp=CAU",
      alt: "붕어빵",
      height: "180",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aT93aik-UDsC4Sw_YQKNHcgjAykqFENuqA&usqp=CAU",
      alt: "폼폼푸린",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTLnh9kzOq6ZNUhF0Kuh4LKMojs5hgcuUeg&usqp=CAU",
      alt: "향",
      height: "230",
    },
    {
      src: "img/like2.jpg",
      alt: "집",
      height: "180",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>선호</h2>
      <StyledSlider {...settings} className="Slider">
        {images.map((image, index) => (
          <Slider key={index}>
            <img src={image.src} height={image.height} />
          </Slider>
        ))}
      </StyledSlider>
    </div>
  );
}
