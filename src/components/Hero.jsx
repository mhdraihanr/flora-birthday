import AudioPlayer from "./Audio";
import TVShow from "./TVShow";
import heroBg from "../assets/video1.mp4";
import netflixMiniLogo from "../assets/netflix-mini-logo.png";

export default function Hero() {
  return (
    <section className="hero-section netflix-hero">
      <AudioPlayer />
      <video
        className="hero-bg"
        src={heroBg}
        autoPlay
        loop
        muted
        playsInline
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          minHeight: "70vh",
          objectPosition: "60% 55%",
        }}
      />
      <div className="hero-overlay" />
      <div className="hero-content netflix-hero-content">
        <div className="netflix-series-label">
          <img src={netflixMiniLogo} alt="N" className="netflix-n-logo" />
          <span className="series-text">SERIES</span>
        </div>
        <h1 className="netflix-title">Happy Birthday, Love</h1>
        <div
          className="netflix-title-decor"
          style={{ fontSize: "1.7rem", marginBottom: "0.5rem" }}
        >
          ⋆｡°✩🧸🎂🥳💗 ⋆｡°✩
        </div>
        <p className="netflix-desc">
          On this special day, I celebrate the beautiful soul who brings light
          to my world, warmth to my heart, and endless joy to every moment we
          share together.
        </p>
        <div className="netflix-hero-buttons">
          <TVShow videoSrc="https://drive.google.com/file/d/10XRCOkoEaN23tA1ZsHqdMOt_v3MGbgcp/preview" />
          <button className="button button--list">+ My List</button>
        </div>
      </div>
    </section>
  );
}
