function getdistance(clat,clong,lat,long){
  const toRadians = (angle) => (angle * Math.PI) / 180;
  const R = 6371; // Earth radius in kilometers (you can adjust this value based on your needs)

  // Haversine formula
  const dLat = toRadians(lat - clat);
  const dLon = toRadians(long - clong);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(clat)) * Math.cos(toRadians(lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

module.exports = { getdistance};