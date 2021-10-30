import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
      // contact page
                 <div className="contact-color p-5">
                        <h2 className="text-danger">GET IN TOUCH</h2> 
             <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-md-8 col-sm-8">
            <div className="card shadow">
              <div className="card-tittle text-center border-bootom">
                <h2 className="p-3">Contact</h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-4">
                    <label htmlFor="username" className="form-label"
                      >Name </label>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      id="username"
                      placeholder="Enter Your Username"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="username" className="form-label"
                      >Email</label >
                    <input
                      type="email"
                      className="form-control"
                      name=""
                      id="Email"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor=" password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name=""
                      id="password"
                      placeholder="Enter Your Password"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="phone"
                      className="form-control"
                      name=""
                      id="phone"
                      placeholder="Enter Your Phone Number "
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="remember"
                    />
                    <label htmlFor="remember">Remember me</label>
                  </div>

                  <div className="d-grid text-center contact-btn">
                    <button type="submit" className="btn-regular ">Contact</button>
                  </div>
                </form>  
                </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Contact;