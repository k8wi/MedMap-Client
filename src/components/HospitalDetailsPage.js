
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
const HospitalDetailsPage = () => {
  const {state} = useLocation()
  const [hospitalDetails, setHospitalDetails] = useState(state.hospital);
  return (
    <div className="container mx-auto my-8">
      {
        hospitalDetails &&   <>
        <h1 className="text-3xl font-semibold mb-4">{hospitalDetails.name}</h1>
        <p className="text-gray-600 mb-2">{hospitalDetails.address}</p>
        <p className="text-gray-700">{hospitalDetails.description}</p>
        <p className="text-gray-600 mb-2">{hospitalDetails.location}</p>
        <p className="text-gray-700">{hospitalDetails.phone}</p>
        </>
      }
    </div>
  );
};

export default HospitalDetailsPage;
