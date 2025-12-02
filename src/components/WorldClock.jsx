import React from 'react';
import './WorldClock.css';

const timeZones = [
  { label: 'India', zone: 'Asia/Kolkata' },
  { label: 'USA (New York)', zone: 'America/New_York' },
  { label: 'UK (London)', zone: 'Europe/London' },
  { label: 'Australia (Sydney)', zone: 'Australia/Sydney' },
];

const WorldClock = () => {
  const [times, setTimes] = React.useState({});

  React.useEffect(() => {
    const updateTimes = () => {
      const updated = {};
      timeZones.forEach(({ zone }) => {
        const now = new Date();
        const time = now.toLocaleTimeString('en-IN', {
          timeZone: zone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        updated[zone] = time;
      });
      setTimes(updated);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="world-clock-container">
      <div className="ticker-wrapper">
        <div className="ticker-track">
          <div className="ticker-content">
            {timeZones.map(({ label, zone }) => (
              <div key={zone} className="ticker-item">
                <span className="ticker-label">{label}</span>
                <span className="ticker-separator">|</span>
                <span className="ticker-time">{times[zone] || '--:--:--'}</span>
              </div>
            ))}
            {timeZones.map(({ label, zone }) => (
              <div key={`${zone}-dup`} className="ticker-item">
                <span className="ticker-label">{label}</span>
                <span className="ticker-separator">|</span>
                <span className="ticker-time">{times[zone] || '--:--:--'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldClock;
