import "../pages/Style.css";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <footer className="footer">
      <h2 className="title" style={{ textAlign: "center" }}>
        여정윤
      </h2>
      <div className="contents">
        <button className="Up" onClick={scrollToTop}>
          Up
        </button>
        <p className="p_size">공지사항</p>
        <p className="p_size">010-1111-1111</p>
        <p>jyyeo@mobiliverse.com</p>
      </div>
    </footer>
  );
}
