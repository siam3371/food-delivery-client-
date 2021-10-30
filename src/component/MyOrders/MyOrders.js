import React from 'react';
import { useParams } from 'react-router';
  const MyOrders = () => {
        const id = useParams()
    return (
        <div>
            <h4>{id}</h4>
        </div>
    );
};

export default MyOrders;