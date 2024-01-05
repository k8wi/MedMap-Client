import React from 'react';
import { Link } from 'react-router-dom';

const HospitalCard = ({ hospital }) => {
  return (
    <Link to={"/hospital/" + hospital._id} state={{hospital}}
    className="block">
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">{hospital.name}</h2>
        <p className="text-gray-600 mb-2">{hospital.address}</p>
        <p className="text-gray-700">{hospital.description}</p>
      </div>
    </Link>
  );
};

export default HospitalCard;
