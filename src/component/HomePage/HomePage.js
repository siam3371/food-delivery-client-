import React from 'react';
import Bannar from '../Home/Bannar/Bannar';
import Services from '../Home/Services/Services';

const HomePage = () => {
    return (
        <div>
            {/* bannar part */}
            <Bannar></Bannar>
            {/* services part */}
            <Services></Services>
        </div>
    );
};

export default HomePage;