import { useEffect, useState } from 'react';

function CricketStats() {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    fetch('https://cricket-api.vercel.app/api/matches')
      .then(res => res.json())
      .then(setMatches);
  }, []);

  if (!matches) return <div>Loading cricket stats...</div>;

  return (
    <div>
      <h2>Cricket Stats</h2>
      <ul>
        {matches.data?.map(match => (
          <li key={match.id}>
            {match.name} ({match.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CricketStats;
