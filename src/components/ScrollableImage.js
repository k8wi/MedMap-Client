import React from 'react';
import map from '../resources/map.jpeg';

const ScrollableImage = () => {
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  function normalizeCoordinate(originalValue, minOriginal, maxOriginal, minTarget, maxTarget) {
    return (
      ((originalValue - minOriginal) * (maxTarget - minTarget)) / (maxOriginal - minOriginal) + minTarget
    );
  }

  const originalLatitude = latitude;
  const normalizedLatitude = normalizeCoordinate(
    originalLatitude,
    12.948195,
    13.007500,
    0,
    2788
  );

  const originalLongitude = longitude;
  const normalizedLongitude = normalizeCoordinate(
    originalLongitude,
    77.532607,
    77.648346,
    0,
    5379
  );
  console.log("Normalized Latitude:", normalizedLatitude);
  console.log("Normalized Longitude:", normalizedLongitude);

  return (
    <div style={{ overflow: 'auto', width: '100%', height: '100vh' }}>
      <img
        src={map}
        alt="Map"
        useMap="#workmap"
        width="5379"
        height="2788"
        style={{ width: '100%', height: 'auto' }}
      />
      <map name="workmap"></map>
    </div>
  );
};

export default ScrollableImage;
