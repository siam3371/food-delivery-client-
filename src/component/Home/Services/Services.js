import React, { useEffect, useState } from 'react';
 import ServicesItem from '../ServicesItem/ServicesItem';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="row">
             {
                services.map(service =><ServicesItem 
                    key={service._id} 
                    service={service} 
               ></ServicesItem>
 )
            }
            
             </div>
    );
}; 
export default Services;