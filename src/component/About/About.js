import React from 'react';
import './About.css'
const About = () => {
    return (
        <div>
               {/* using bootstrap responsive */}
      <div className="row owner container-fluid mt-5 p-5">
          <div className="col-lg-7 col-12 col-md-6">
          <div className="">
            <h4>Founder & Owner</h4>
             <h1 className="fw-bolder text-primary"> Fahim Saleh
</h1>
<hr className="horizontal-line" />
 <p>Fahim Saleh was a Bangladeshi-American entrepreneur and computer programmer who founded Gokada in Nigeria, Pathao and JoBike. Saleh was also a founding partner of Adventure Capital, a Manhattan-based venture capital firm. 
</p>
        </div>
      <div className="fs-5">
        {/* font awsome */}
      <i className="fab fa-facebook m-2 icon"></i>
        <i className="fab fa-twitter m-2 icon"></i>
        <i className="fab fa-instagram m-2 icon"></i>
      </div>
          </div>
          <div className="col-lg-5 col-12 col-md-6 ">
               <img  className="img-fluid w-100 "  src="https://media-eng.dhakatribune.com/uploads/2020/07/fahim-saleh-collected-1594786113742-1594786627916.jpg" alt="" />
          </div>
      </div>
         </div>
    );
};

export default About;