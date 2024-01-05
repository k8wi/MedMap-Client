import {useState,useEffect} from 'react'

import axios from 'axios';
export default  function Gmap() {

  const Map = () => {
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
    }, []);}

  return (
    
    <div className="flex w-600 h-450 border-4 border-black rounded-xl overflow-hidden">
  <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2422905002545!2d77.5830774!3d12.956342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e716408af1%3A0x275f98002bf46061!2sB.%20W.%20Lions%20Super%20Speciality%20Eye%20Hospital!5e0!3m2!1sen!2sin!4v1703853509791!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl"
    ></iframe>
    
</div>

  )}
  

