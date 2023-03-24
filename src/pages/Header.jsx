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
            <a href="#">MENU1</a>
            <ul className="submenu">
              <li>
                <a href="#">submenu01</a>
              </li>
              <li>
                <a href="#">submenu02</a>
              </li>
              <li>
                <a href="#">submenu03</a>
              </li>
              <li>
                <a href="#">submenu04</a>
              </li>
              <li>
                <a href="#">submenu05</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">MENU2</a>
            <ul className="submenu">
              <li>
                <a href="#">submenu01</a>
              </li>
              <li>
                <a href="#">submenu02</a>
              </li>
              <li>
                <a href="#">submenu03</a>
              </li>
              <li>
                <a href="#">submenu04</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">MENU3</a>
            <ul className="submenu">
              <li>
                <a href="#">submenu01</a>
              </li>
              <li>
                <a href="#">submenu02</a>
              </li>
              <li>
                <a href="#">submenu03</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">MENU4</a>
            <ul className="submenu">
              <li>
                <a href="#">submenu01</a>
              </li>
              <li>
                <a href="#">submenu02</a>
              </li>
              <li>
                <a href="#">submenu03</a>
              </li>
              <li>
                <a href="#">submenu04</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">MENU5</a>
            <ul className="submenu">
              <li>
                <a href="#">submenu01</a>
              </li>
              <li>
                <a href="#">submenu02</a>
              </li>
              <li>
                <a href="#">submenu03</a>
              </li>
              <li>
                <a href="#">submenu04</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

//참고:https://velog.io/@dpdnjs402/uq0d5qph
