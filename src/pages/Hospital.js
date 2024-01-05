import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HospitalCard from '../components/HospitalCard';

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(process.env.REACT_APP_SERVER_ENDPOINT + '/hospital/getall')
      .then((response) => {
        setHospitals(response.data.hospitals);
        console.log(hospitals);
      })
      .catch((error) => {
        console.error('Error fetching hospitals:', error);
      });
  }, []);




  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-4">Find Hospitals</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search hospitals..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hospitals.map((hospital) => 
         {  
           if(  hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                hospital.type.toLowerCase().includes(searchTerm.toLowerCase()) ){
            return <HospitalCard key={hospital._id} hospital={hospital} />
         }
        }
        )}
      </div>
    </div>
  );
};

export default Hospital;
