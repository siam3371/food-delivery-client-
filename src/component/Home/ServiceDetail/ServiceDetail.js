import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const  {detail} = useParams() 
        
     const [details,setDetails]= useState([])
    const [specificDetail,setSpecificDetail] = useState({})
    const [isLoading, setIsLoading] = useState(true) 
   
 useEffect(() =>
      fetch("http://localhost:5000/product")
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
console.log(specificDetail)

    return (
     <div className="mt-5" >
            <div style={{
                marginLeft:"500px"
            }} >
             <div className="card" style={{
                width: "18rem"
            }}>
  <img className="card-img-top" src={specificDetail?.img} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{specificDetail?.name}</h5>
    <p className="card-text">{specificDetail?.description}</p>
    <p>price:${specificDetail?.price}</p>
    <button href="#" className="btn btn-primary">please order</button>
  </div>
</div>
        </div>
     </div>
    );
};

export default ServiceDetail;