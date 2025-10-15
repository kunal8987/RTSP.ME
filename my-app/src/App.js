import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [overlays, setOverlays] = useState([]);

  useEffect(() => {
    axios
      .get("/api/overlays/")
      .then((response) => setOverlays(response.data))
      .catch((error) => console.error("Error fetching overlays:", error));
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "32px 24px 40px 24px",
        background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
        borderRadius: "18px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
        fontFamily: "Segoe UI, Arial, sans-serif",
        color: "#222",
        minHeight: "600px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "28px",
          fontWeight: 700,
          fontSize: "2rem",
          letterSpacing: "1px",
          color: "#007bff",
        }}
      >
        Livestream with Overlays
      </h2>

      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          padding: "14px 32px",
          background: "linear-gradient(90deg, #007bff 60%, #0056b3 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "7px",
          cursor: "pointer",
          fontSize: "17px",
          marginBottom: "24px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) =>
          (e.target.style.background =
            "linear-gradient(90deg, #0056b3 60%, #007bff 100%)")
        }
        onMouseOut={(e) =>
          (e.target.style.background =
            "linear-gradient(90deg, #007bff 60%, #0056b3 100%)")
        }
      >
        {isVisible ? "Pause Livestream" : "Play Livestream"}
      </button>

      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
          background: "#000",
          marginBottom: "10px",
        }}
      >
        {isVisible && (
          <iframe
            title="Livestream"
            src="https://rtsp.me/embed/f6BdeBit/"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "12px",
              zIndex: 1,
              backgroundColor: "#000",
            }}
          ></iframe>
        )}

        {/* Overlays */}
        {overlays.map((overlay) => (
          <div
            key={overlay.id}
            style={{
              position: "absolute",
              top: overlay.positionY + "px",
              left: overlay.positionX + "px",
              width: overlay.sizeWidth + "px",
              height: overlay.sizeHeight + "px",
              background: "rgba(0, 123, 255, 0.55)",
              color: "#fff",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              padding: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.13)",
              zIndex: 2,
              overflow: "hidden",
              backdropFilter: "blur(2px)",
              opacity: 0.95,
              transition: "transform 0.2s, box-shadow 0.2s, opacity 0.5s",
              animation: "fadeIn 0.7s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 4px 16px rgba(0, 123, 255, 0.18)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.13)";
            }}
          >
            {overlay.content}
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          alert("Form to add overlay will open here!");
        }}
        style={{
          padding: "12px 28px",
          background: "linear-gradient(90deg, #28a745 60%, #218838 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "7px",
          cursor: "pointer",
          fontSize: "15px",
          marginTop: "18px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) =>
          (e.target.style.background =
            "linear-gradient(90deg, #218838 60%, #28a745 100%)")
        }
        onMouseOut={(e) =>
          (e.target.style.background =
            "linear-gradient(90deg, #28a745 60%, #218838 100%)")
        }
      >
        Add Overlay
      </button>

      {/* Fade-in animation for overlays */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95);}
            to { opacity: 1; transform: scale(1);}
          }
        `}
      </style>
    </div>
  );
};

export default App;
