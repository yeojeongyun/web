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
        공지사항
        <br />
        010-3952-1878
        <br />
        jyyeo@mobiliverse.com
        <br />
      </div>
    </footer>
  );
}
