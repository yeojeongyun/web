import "./Style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hobby() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 20,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    {
      src: "img/book1.jpg",
      alt: "불편한 편의점",
    },
    {
      src: "img/book2.jpg",
      alt: "보라색 치마를 입은 여자",
    },
    {
      src: "img/book3.jpg",
      alt: "파이 이야기",
    },
    {
      src: "img/book4.jpg",
      alt: "역사의 쓸모",
    },
  ];

  const images2 = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgP-A8zY9i-wCEJCQpkb7Jrt9QlBk7zqG7aA&usqp=CAU",
      alt: "너의 모든 것",
    },
    {
      src: "img/net1.jpg",
      alt: "혐오스런 마츠코의 일생",
    },
    {
      src: "img/net2.jpg",
      alt: "스터츠: 마음을 다스리는 마스터",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQOoCUt7n-z0OO3HQNlXIAGz6NwBSSoY4UQ&usqp=CAU",
      alt: "지상 최악의 교도소를 가다",
    },
  ];

  const images3 = [
    {
      src: "img/game1.jpg",
      alt: "저스트 댄스",
    },
    {
      src: "img/game2.jpg",
      alt: "동물의 숲",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h2>취미</h2>
      <Slider {...settings} className="Slider">
        {images.map((image, index) => (
          <Slider key={index}>
            <img src={image.src} width={image.width} height={image.height} />
          </Slider>
        ))}
      </Slider>
      <h3>책</h3>
      <div id="section1">
        <Slider {...settings} className="Slider">
          {images2.map((images2, index) => (
            <Slider key={index}>
              <img
                src={images2.src}
                width={images2.width}
                height={images2.height}
              />
            </Slider>
          ))}
        </Slider>
      </div>
      <h3>넷플릭스</h3>
      <div id="section2">
        <Slider {...settings} className="Slider">
          {images3.map((images3, index) => (
            <Slider key={index}>
              <img
                src={images3.src}
                width={images3.width}
                height={images3.height}
              />
            </Slider>
          ))}
        </Slider>
      </div>
      <h3>기타</h3>
    </div>
  );
}
