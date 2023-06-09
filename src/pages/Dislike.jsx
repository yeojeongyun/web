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
    padding-bottom: 50px;

    .slick-dots {
      margin-top: 25px;
      margin-bottom: 35px;
    }
  `;
  const images = [
    {
      src: "img/Dislike1.jpg ",

      height: "230",
    },
    {
      src: "img/Dislike2.jpg ",
      height: "230",
    },
    {
      src: " img/Dislike3.jpg",

      height: "230",
    },
    {
      src: "img/Dislike4.jpg ",

      height: "230",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h2>비선호</h2>
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
