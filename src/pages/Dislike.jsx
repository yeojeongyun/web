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

  return (
    <div style={{ textAlign: "center" }}>
      <h2>비선호</h2>

      <Slider {...settings}>
        <div>
          <img src="img/Dislike1.jpg" alt="가지" />
        </div>
        <div>
          <img src="img/Dislike2.jpg" alt="떡" />
        </div>
        <div>
          <img src="img/Dislike3.jpg" alt="조기" />
        </div>
        <div>
          <img src="img/Dislike4.jpg" alt="벌레" />
        </div>
      </Slider>
    </div>
  );
}
