import React from "react"
import map from '../resources/map.jpeg'
import pointer from '../resources/pointer.png'
import $ from 'jquery'
import maphilight from 'maphilight'
export default function App() {
  
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  $(function() {
    $('.map').maphilight();
});
  
  function convertCoordinates(actualMapCoordinates, actualMapBounds, targetMapBounds) {
    // Extract individual coordinates
    let [x, y] = actualMapCoordinates;
    let [ax1, ay1, ax2, ay2] = actualMapBounds;
    let [tx1, ty1, tx2, ty2] = targetMapBounds;

    // Perform linear transformation
    let targetX = (x - ax1) / (ax2 - ax1) * (tx2 - tx1) + tx1;
    let targetY = (y - ay1) / (ay2 - ay1) * (ty2 - ty1) + ty1;

    return [targetX, targetY];
}

// Example usage
let actualMapCoordinates = [12.981921, 77.575861];
let actualMapBounds = [13.007769, 77.531260, 12.949203, 77.651178];
let targetMapBounds = [0, 0, 750,1475];

let targetMapCoordinates = convertCoordinates(actualMapCoordinates, actualMapBounds, targetMapBounds);


const lat=targetMapCoordinates[0];
const lon=targetMapCoordinates[1];
console.log("lat="+lat);
console.log("lon="+lon);

const calculateDynamicPosition = () => {
  // Replace these calculations with your own logic
  const dynamicTop = lat; // Replace with your calculated top value
  const dynamicLeft = lon; // Replace with your calculated left value

  return { top: dynamicTop, left: dynamicLeft };
}
const { top, left } = calculateDynamicPosition();

  return (
    <div style={{ overflow: 'auto', width: '100%', height: '100vh' }}>
  <div className="relative">
    <img src={map} useMap="#locate" class="map" alt="Map"/>
    <img src={pointer} className="absolute" style={{ top: `${top}px`, left: `${left}px` }} alt="Pointer"/>
    <map name='locate'>
      <area
        shape="poly"
        coords="831,194,1010,220,939,378,802,332"
        href="https://www.javatpoint.com/html-tutorial"
        title="Shivajinagar"
        alt="Shivajinagar"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
       <area
        shape="poly"
        coords="1197,372,1232,323,1397,281,1432,500,1343,581"
        href="https://www.javatpoint.com/html-tutorial"
        title="Indiranagar"
        alt="Indiranagar"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
      <area
        shape="poly"
        coords="682,513,658,554,555,550,469,546,472,500,442,497,468,417,538,417,543,407,606,437"
        href="https://www.javatpoint.com/html-tutorial"
        title="Chikpet"
        alt="Chikpet"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
      <area
        shape="poly"
        coords="1235,174,1375,203,1363,286,1300,311,1240,320,1220,230"
        href="https://www.javatpoint.com/html-tutorial"
        title="J C Nagar"
        alt="J C Nagar"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
       <area
        shape="poly"
        coords="1232,323,1167,320,1120,328,1102,355,1090,368,1084,447,1156,413,1171,385"
        href="https://www.javatpoint.com/html-tutorial"
        title="Halasuru"
        alt="Halasuru"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
      <area
        shape="poly"
        coords="802,332,831,194,799,178,712,285,744,317,779,329"
        href="https://www.javatpoint.com/html-tutorial"
        title="Vasanth Nagar"
        alt="Vasanth Nagar"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
       <area
        shape="poly"
        coords="659,552,619,558,577,555,554,543,540,575,527,587,514,633,561,648,589,660,620,630"
        href="https://www.javatpoint.com/html-tutorial"
        title="Kalasipalya"
        alt="Kalasipalya"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
      <area
        shape="poly"
        coords="470,414,442,466,427,416,456,317,503,312,503,350,531,339,573,420,"
        href="https://www.javatpoint.com/html-tutorial"
        title="Majestic"
        alt="Majestic"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
       <area
        shape="poly"
        coords="246,122,170,196,128,330,201,336,84,343,239,457,312,399,344,313,347,229"
        href="https://www.javatpoint.com/html-tutorial"
        title="Rajajinagar"
        alt="Rajajinagar"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
      <area
        shape="poly"
        coords="332,585,332,635,290,701,324,725,370,720,365,687,437,675,435,633,497,633,490,592,414,590,413,567,"
        href="https://www.javatpoint.com/html-tutorial"
        title="Chamrajpet"
        alt="Chamrajpet"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
        <area
        shape="poly"
        coords="768,568,735,648,831,726,875,718,893,691,903,626"
        href="https://www.javatpoint.com/html-tutorial"
        title="Shanthinagar"
        alt="Shanthinagar"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
       <area
        shape="poly"
        coords="922,523,900,464,839,499,858,393,976,423,966,471,977,509"
        href="https://www.javatpoint.com/html-tutorial"
        title="Brigade Road"
        alt="Brigade Road"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
      <area
        shape="poly"
        coords="375,523,340,488,301,482,242,501,206,535,171,544,144,551,202,644,290,618,307,593,337,579"
        href="https://www.javatpoint.com/html-tutorial"
        title="Jagajeevanram Nagar"
        alt="Jagajeevanram Nagar"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
      <area
        shape="poly"
        coords="520,337,512,236,485,215,481,179,511,175,526,197,538,161,550,171,590,140,576,132,564,113,572,101,618,104,636,105,650,173,622,201,606,226,619,243,611,265,604,280,583,266,525,337"
        href="https://www.javatpoint.com/html-tutorial"
        title="Sheshadripuram"
        alt="Sheshadripuram"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
        <area
        shape="poly"
        coords="213,131,162,125,103,113,55,222,60,318,139,310,158,196"
        href="https://www.javatpoint.com/html-tutorial"
        title="Bashweshwarnagar"
        alt="Bashweshwarnagar"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
        <area
        shape="poly"
        coords="622,114,618,0,374,0,457,183,520,238,564,239"
        href="https://www.javatpoint.com/html-tutorial"
        title="Malleshwaram"
        alt="Malleshwaram"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
       <area
        shape="poly"
        coords="169,480,184,442,231,424,267,406,235,468,203,490"
        href="https://www.javatpoint.com/html-tutorial"
        title="Chollorpalya"
        alt="Chollorpalya"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
      <area
        shape="poly"
        coords="513,632,591,664,595,768,513,768"
        href="https://www.javatpoint.com/html-tutorial"
        title="Basavangudi"
        alt="Basavangudi"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
      <area
        shape="poly"
        coords="771,576,718,568,676,608,659,672,674,690,723,705,"
        href="https://www.javatpoint.com/html-tutorial"
        title="Anninagar"
        alt="Anninagar"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
        <area
        shape="poly"
        coords="77,333,149,332,150,370,197,416,189,445,209,445,199,488,170,483,46,674,0,599,0,400,90,396,103,370,90,348,82,347"
        href="https://www.javatpoint.com/html-tutorial"
        title="Vijaynagar"
        alt="Vijaynagar"
        className="hover:bg-yellow-500" // Add this line for highlighting
      />
    </map>
  </div>
</div>
  );
  }