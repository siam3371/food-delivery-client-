import React from 'react';
import { useHistory } from 'react-router';
  
const ServicesItem = ({service}) => {
    const history = useHistory();  
         const handleDetails = (key) => {
                 const uri = `/services/${key}`;
                // console.log(uri)
                history.push(uri) 
        } 
     return ( 
<> 
<div className="col-lg-4">
  {/* services item showing */}
<div className="shadow-lg p-2 mb-5 bg-body rounded p-5">
<img className="w-100" src={service.img} alt="" />
<h3>{service.name}</h3>
<p>{service.description}</p> 
 <button onClick={() => handleDetails(service._id )} className="btn-regular">buy now</button>
 </div> 
  </div>
</>
    );
};

export default ServicesItem;