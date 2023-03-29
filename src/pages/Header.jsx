import "./Style.css";
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

  return (
    <div className="Header">
      <h1 style={{ fontSize: "40px" }}>
        <br />
        <center>자기소개</center> <br />
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
            <a href="/web">Main</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

//참고:https://velog.io/@dpdnjs402/uq0d5qph
