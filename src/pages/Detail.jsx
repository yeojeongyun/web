import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Style.css";

export default function Home() {
  const movePage = useNavigate();
  const [note, setNote] = useState(""); // note 상태값을 추가하고 초기값을 빈 문자열로 설정

  function goHome() {
    movePage("/");
  }

  function saveNote() {
    // note 값을 어딘가에 저장하거나 처리하는 코드를 작성
    console.log("Note saved:", note);
    goHome();
  }

  function handleNoteChange(event) {
    setNote(event.target.value);
  }

  return (
    <div>
      <Header />
      <h1 style={{ fontSize: "40px" }}>
        <br />
        <center>설명</center> <br />
      </h1>
      <div className="container">
        <div className="note1" onClick={goHome}></div>
        <textarea
          className="note2"
          value={note}
          onChange={handleNoteChange}
        ></textarea>
        <button className="Save" onClick={saveNote}>
          Save
        </button>
      </div>
      <Footer />
    </div>
  );
}
