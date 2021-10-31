import React, { useRef } from 'react';

const AddServices = () => {
     const imageRef =  useRef()
     const nameRef = useRef()
     const descriptionRef = useRef()
     const handleAddUser = (e) => {
        e.preventDefault(); 
        const name= nameRef.current.value;  
        const image = imageRef.current.value;
        const description = descriptionRef.current.value;
        const newService = {name, image, description};
            fetch('https://ancient-earth-91209.herokuapp.com/product', {
                method:"POST",
                headers:{
                    'content-type':"application/json"
                }, 
                body:JSON.stringify(newService)
            })
            .then()
    } 
    return (
        <div>
            <h3>Add A New User</h3>
            <form onSubmit={handleAddUser} >
            <label htmlFor="username" className="form-label"
                      >Image: </label>
            <input type="text" ref={imageRef} className="m-3 w-25 "  placeholder="Image Add" />
             <br />
            <label htmlFor="username" className="form-label"
                      >Name: </label>
            <input type="text" ref={nameRef}  className="m-3 w-25 " placeholder="Enter Name" />
            <br />
            <label htmlFor="username" className="form-label"
                      >Description:  </label>
               <input type="text" ref={descriptionRef}  className="m-3 w-25 " placeholder="Enter Description" />
                <br />
                <button className="btn btn-primary" type="submit">Add Service</button> 
            </form>
 
        </div>
    );
};

export default AddServices;