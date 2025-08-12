import { Link } from 'react-router-dom';

function Stats() {
  return (
    <div>
      <h2>Stats</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/stats/cricket">
          <div className="tile">Cricket Stats</div>
        </Link>
        <Link to="/stats/f1">
          <div className="tile">F1 Stats</div>
        </Link>
      </div>
    </div>
  );
}

export default Stats;
