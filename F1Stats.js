import { useEffect, useState } from 'react';

function F1Stats() {
  const [drivers, setDrivers] = useState(null);

  useEffect(() => {
    fetch('https://api.openf1.org/v1/drivers')
      .then(res => res.json())
      .then(setDrivers);
  }, []);

  if (!drivers) return <div>Loading F1 stats...</div>;

  return (
    <div>
      <h2>F1 Drivers</h2>
      <ul>
        {drivers.map(driver => (
          <li key={driver.driver_number}>
            {driver.full_name} ({driver.country_code})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default F1Stats;
