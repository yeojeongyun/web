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

  return (
    <div style={{ textAlign: "center" }}>
      <h2>취미</h2>
      <Slider {...settings}>
        <div>
          <img src="img/book1.jpg" alt="불편한 편의점" />
          불편한 편의점: 김호연
        </div>
        <div>
          <img src="img/book2.jpg" alt="보라색 치마를 입은 여자" />
          보라색 치마를 입은 여자: 이마무라나쓰코
        </div>
        <div>
          <img src="img/book3.jpg" alt="파이 이야기" />
          파이 이야기: 얀 마텔
        </div>
        <div>
          <img src="img/book4.jpg" alt="역사의 쓸모" />
          역사의 쓸모: 최태성
        </div>
      </Slider>
      <h3>책</h3>
      <Slider {...settings}>
        <div id="section1">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgP-A8zY9i-wCEJCQpkb7Jrt9QlBk7zqG7aA&usqp=CAU"
            }
            alt="너의 모든 것"
          />
          너의 모든 것
        </div>
        <div>
          <img src="img/net1.jpg" alt="혐오스런 마츠코의 일생" />
          혐오스런 마츠코의 일생
        </div>
        <div>
          <img src="img/net2.jpg" alt="스터츠: 마음을 다스리는 마스터" />
          스터츠: 마음을 다스리는 마스터
        </div>
        <div>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQOoCUt7n-z0OO3HQNlXIAGz6NwBSSoY4UQ&usqp=CAU"
            }
            alt="지상 최악의 교도소를 가다"
          />
          지상 최악의 교도소를 가다
        </div>
      </Slider>
      <h3>넷플릭스</h3>
      <Slider {...settings}>
        <div id="section2">
          <img src="img/game1.jpg" alt="저스트댄스" />
          저스트 댄스
        </div>
        <div>
          <img src="img/game2.jpg" alt="동물의 숲" />
          동물의 숲
        </div>
      </Slider>
      <h3>기타</h3>
    </div>
  );
}
