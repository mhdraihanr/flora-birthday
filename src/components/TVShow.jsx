import { useState } from "react";

export default function TVShow({ videoSrc }) {
  const [showModal, setShowModal] = useState(false);

  const isGoogleDrive = videoSrc.includes("drive.google.com");

  const handlePlayClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="button button--play" onClick={handlePlayClick}>
        <span>►</span> Play
      </button>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleCloseModal}
        >
          {isGoogleDrive ? (
            <iframe
              src={videoSrc}
              allow="autoplay"
              allowFullScreen
              style={{
                width: "80vw",
                height: "45vw",
                maxWidth: "900px",
                maxHeight: "506px",
                borderRadius: "12px",
                boxShadow: "0 8px 40px #000",
                background: "#000",
                border: "none",
              }}
              title="Google Drive Video"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={videoSrc}
              controls
              autoPlay
              allow="autoplay"
              style={{
                width: "80vw",
                maxWidth: "900px",
                borderRadius: "12px",
                boxShadow: "0 8px 40px #000",
                background: "#000",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <button
            onClick={handleCloseModal}
            style={{
              position: "absolute",
              top: 32,
              right: 48,
              fontSize: "2rem",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 10000,
            }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
