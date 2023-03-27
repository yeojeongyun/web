import "./Style.css";

export default function Header() {
  return (
    <div className="Header">
      <h1 style={{ fontSize: "40px" }}>
        <br />
        <center>자기소개</center> <br />
      </h1>
      <nav>
        <ul className="menu">
          <li>
            <a href="/web/Like">선호</a>
          </li>
          <li>
            <a href="/web/Dislike">비선호</a>
          </li>
          <li>
            <a href="/web/Hobby">취미</a>
            <ul className="submenu">
              <li>
                <a href="#">책</a>
              </li>
              <li>
                <a href="#">넷플릭스</a>
              </li>
              <li>
                <a href="#">기타</a>
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
