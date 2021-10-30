import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { useHistory, useParams } from 'react-router'; 
// import useProvider from '../../Hook/useProvider';
import './ServicesDetail.css' 
const ServiceDetail = () => {
    const history = useHistory()
    const  {detail} = useParams()  
     const [details,setDetails]= useState([])
    const [specificDetail,setSpecificDetail] = useState({})
    // const {setLoading} =  useProvider
    
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
     const handlePurchase = (key) => {
        const uri = `/detail/${key}`;
         history.push(uri) 
     }
    return (
//  services detail
 <div className="row container "> 
<div className="mt-5 col-lg-4 " >
   <div  >
    <div className="card">
<img className="card-img-top" src={specificDetail?.img} alt="Card image cap"/>
<div className="card-body">
<h5 className="card-title">{specificDetail?.name}</h5>
<p className="card-text">{specificDetail?.description}</p>
<p>price:${specificDetail?.price}</p>
<button  className="btn btn-primary   p-2">purchase</button>
</div>
</div>
</div>
</div></div>
    );
};
 
export default ServiceDetail;