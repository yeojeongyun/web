import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";

export default function About() {
  const [data, setData] = useState(null);
  const movePage = useNavigate();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <br />
      <br />
      <h2>목록</h2>
      <br />
      <table style={{ margin: "auto" }}>
        <thead>
          <tr className="tr">
            <th>no.</th>
            <th>할 일</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <br />
          {data &&
            data.slice(0, 30).map((todo) => (
              <tr key={todo.id}>
                <td className="td">{todo.id}</td>
                <td className="td">{todo.title}</td>
                <td className="td">{todo.completed ? "완료" : "미완료"}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button className="Up" onClick={scrollToTop}>
        Up
      </button>
      <Footer />
    </div>
  );
}
