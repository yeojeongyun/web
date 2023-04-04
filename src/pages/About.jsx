import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";

export default function About() {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const elementStyle = {
    border: "solid",
    borderRadius: "10px",
    position: "relative",
    left: "25vh",
    height: "3vh",
    width: "20vh",
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const searchSpace = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData =
    data &&
    data.filter((todo) => {
      return todo.id.toString().indexOf(searchQuery) !== -1;
    });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>목록</h2>
      <input
        type="text"
        placeholder="Enter number to be searched"
        style={elementStyle}
        onChange={searchSpace}
      />
      <button type="button" onC />
      <table style={{ margin: "auto" }}>
        <thead>
          <tr className="tr">
            <th>no.</th>
            <th>할 일</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {filteredData &&
            filteredData.slice(0, 30).map((todo) => (
              <tr key={todo.id}>
                <td className="td">{todo.id}</td>
                <td className="td">{todo.title}</td>
                <td className="td">{todo.completed ? "O" : "X"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
