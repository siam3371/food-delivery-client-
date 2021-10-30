import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { useParams } from 'react-router'; 
import './ServicesDetail.css' 
const ServiceDetail = () => {
    const  {detail} = useParams() 
        
     const [details,setDetails]= useState([])
    const [specificDetail,setSpecificDetail] = useState({})
    const [isLoading, setIsLoading] = useState(true) 
   
 useEffect(() =>
      fetch("https://ancient-earth-91209.herokuapp.com/product")
      .then(res => res.json())
      .then(data=>setDetails(data))
    ,[])


useEffect(() =>{   
    if(details.length>0){ 
        const matchedData= details.find(det=>det._id==detail)
        setSpecificDetail(matchedData);
         }
 
    }

,[details]) 
 
    return (
   <div className="row container detail"> 
<div className="mt-5 col-lg-4 ms-5 col-4 col-md-4" >
   <div  >
    <div className="card">
<img className="card-img-top" src={specificDetail?.img} alt="Card image cap"/>
<div className="card-body">
<h5 className="card-title">{specificDetail?.name}</h5>
<p className="card-text">{specificDetail?.description}</p>
<p>price:${specificDetail?.price}</p>
<button href="#" className="btn btn-primary">please order</button>
</div>
</div>
</div>
</div></div>
    );
};
// style={{
    // marginLeft:"500px"
// }}
export default ServiceDetail;