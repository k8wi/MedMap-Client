import React from 'react'

function Geolocation() {

    const[latitude,setLatitude]=React.useState('');
    const[longitude,setLongitude]=React.useState('');
    React.useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
         setLatitude(position.coords.latitude);
         setLongitude(position.coords.longitude);
    })
    },[]);
    return (
      <div className="container mx-auto my-8">
        {
         <>
          <h1 className="text-3xl font-semibold mb-4">{latitude}</h1>
          <p className="text-gray-600 mb-2">{longitude}</p>
        
          </>
        }
      </div>
    );
}

export default Geolocation