import React, { useState } from "react";
import "./Home.css";

const tileData = [
  {
    title: "Sports",
    img: "https://images.unsplash.com/photo-1505843273-1000e2d6b6a0?auto=format&fit=crop&w=600&q=80",
    link: "/sports",
    preview: (
      <>
        <h3>Sports Stats</h3>
        <p>Explore trending matches, players, and live updates from a variety of sports!</p>
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=200&q=60"
          alt="Sports Preview"
          className="preview-img"
        />
      </>
    ),
  },
  {
    title: "F1",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
    link: "/f1stats",
    preview: (
      <>
        <h3>F1 Insights</h3>
        <p>See the latest driver stats, race results, and live telemetry from Formula 1.</p>
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=60"
          alt="F1 Preview"
          className="preview-img"
        />
      </>
    ),
  },
  {
    title: "Esports",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
    link: "/esports",
    preview: (
      <>
        <h3>Esports Arena</h3>
        <p>Catch the latest tournaments, team rankings, and top plays in esports.</p>
        <img
          src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=60"
          alt="Esports Preview"
          className="preview-img"
        />
      </>
    ),
  },
];

function Home() {
  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (idx, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHovered(idx);
    setMousePos({ x: rect.left + rect.width / 2, y: rect.top - 20 });
  };

  const handleMouseLeave = () => setHovered(null);

  return (
    <div className="breachbase-bg">
      <div className="breachbase-overlay">
        <h1 className="breachbase-title">breachbase</h1>
        <div className="breachbase-tiles">
          {tileData.map((tile, idx) => (
            <a
              key={tile.title}
              href={tile.link}
              className="breachbase-tile"
              style={{ backgroundImage: `url(${tile.img})` }}
              onMouseEnter={(e) => handleMouseEnter(idx, e)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="breachbase-tile-label">{tile.title}</div>
              {/* Floating window */}
              {hovered === idx && (
                <div
                  className="breachbase-tile-peek"
                  style={{
                    left: "50%",
                    top: "-160px",
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  {tile.preview}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;