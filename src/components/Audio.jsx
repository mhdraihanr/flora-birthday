import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="src/assets/music.mp3"
        loop
        preload="none" // agar tidak auto download
      />
      <button
        onClick={toggleMusic}
        className="icon music-play-icon"
        aria-label={playing ? "Pause Music" : "Play Music"}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          marginRight: "18px",
          padding: 0,
          outline: "none",
        }}
      >
        {playing ? (
          // Pause icon
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="11" fill="#222" />
            <rect x="7" y="6" width="3" height="10" fill="#fff" />
            <rect x="12" y="6" width="3" height="10" fill="#fff" />
          </svg>
        ) : (
          // Play icon
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="11" fill="#222" />
            <polygon points="8,6 17,11 8,16" fill="#fff" />
          </svg>
        )}
      </button>
    </>
  );
}
