import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useProvider from '../Hook/useProvider';
const MyOrders = () => {
  const { id } = useParams()
 
  const { user } = useProvider()
  
 
  return (
    <div>

          

    </div>
  );
};

export default MyOrders;