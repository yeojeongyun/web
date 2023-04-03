import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Style.css";

export default function Home() {
  const movePage = useNavigate();
  const [note, setNote] = useState(""); // note 상태값을 추가하고 초기값을 빈 문자열로 설정

  function goHome() {
    movePage("/");
  }

  useEffect(() => {
    const savedNote = localStorage.getItem("note");
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  function saveNote() {
    console.log("Note saved:", note);
    localStorage.setItem("note", note); // note 값을 LocalStorage에 저장
  }

  function handleNoteChange(event) {
    setNote(event.target.value);
  }

  return (
    <div>
      <h1 style={{ fontSize: "40px" }}>
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
    </div>
  );
}
