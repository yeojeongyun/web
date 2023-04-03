import "../pages/Style.css";
import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const movePage = useNavigate();

  function goLike() {
    movePage("/Like");
  }
  function goDislike() {
    movePage("/Dislike");
  }
  function goHobby() {
    movePage("/Hobby");
  }
  function goAbout() {
    movePage("/about");
  }
  return (
    <div className="Header">
      <h1>
        <a href="/web" className="header_a">
          <center>자기소개</center>
        </a>
      </h1>
      <nav>
        <ul className="menu">
          <li>
            <a href="#" onClick={goLike}>
              선호
            </a>
          </li>
          <li>
            <a href="#" onClick={goDislike}>
              비선호
            </a>
          </li>
          <li>
            <a href="#" onClick={goHobby}>
              취미
            </a>
            <ul className="submenu">
              <li>
                <a href="#" onClick={goHobby}>
                  책
                </a>
              </li>
              <li>
                <Link
                  to="section1"
                  spy={true}
                  smooth={true}
                  duration={1200}
                  offset={-150}
                >
                  넷플릭스
                </Link>
              </li>
              <li>
                <Link
                  to="section2"
                  spy={true}
                  smooth={true}
                  duration={1200}
                  offset={-10}
                >
                  기타
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={goAbout}>
              todo
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

//참고:https://velog.io/@dpdnjs402/uq0d5qph
