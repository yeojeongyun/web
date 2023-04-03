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
      src: "img/Dislike1.jpg ",
      width: "20%",
      height: "180",
    },
    {
      src: "img/Dislike2.jpg ",
      width: "20%",
      height: "180",
    },
    {
      src: " img/Dislike3.jpg",
      width: "10",
      height: "180",
    },
    {
      src: "img/Dislike4.jpg ",
      width: "10",
      height: "180",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h2>비선호</h2>

      <Slider {...settings} className="Slider">
        {images.map((image, index) => (
          <Slider key={index}>
            <img src={image.src} height={image.height} />
          </Slider>
        ))}
      </Slider>
    </div>
  );
}
