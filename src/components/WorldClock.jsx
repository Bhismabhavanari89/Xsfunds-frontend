import React from 'react';
import './WorldClock.css';

const timeZones = [
  { label: 'India', zone: 'Asia/Kolkata' },
  { label: 'United States (New York)', zone: 'America/New_York' },
  { label: 'China', zone: 'Asia/Shanghai' },
  { label: 'Japan', zone: 'Asia/Tokyo' },
  { label: 'Hong Kong', zone: 'Asia/Hong_Kong' },       // CET/CEST
  { label: 'Canada (Toronto)', zone: 'America/Toronto' },
  { label: 'United Kingdom (London)', zone: 'Europe/London' },
  { label: 'Taiwan', zone: 'Asia/Taipei' },
  { label: 'Saudi Arabia', zone: 'Asia/Riyadh' },
  { label: 'Germany', zone: 'Europe/Berlin' },
  { label: 'Iran', zone: 'Asia/Tehran' },
  { label: 'Switzerland', zone: 'Europe/Zurich' },
  { label: 'Australia (Sydney)', zone: 'Australia/Sydney' },
  { label: 'Denmark', zone: 'Europe/Copenhagen' },
  { label: 'Sweden', zone: 'Europe/Stockholm' },
  { label: 'Finland', zone: 'Europe/Helsinki' },
  { label: 'Estonia', zone: 'Europe/Tallinn' },
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
