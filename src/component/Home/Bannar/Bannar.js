import React from 'react';
import { Carousel } from 'react-bootstrap';

const Bannar = () => {
    return (
        <div className="container">
            <>
{/* our Food  bannar  */}
<Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src='https://i.ibb.co/n0vxHB1/3333449.jpg'
            alt="First slide"
        />
        <Carousel.Caption>
            <h3 className="text-danger">First slide label</h3>
            <p  className="text-danger"> Everything you need to build an amazing food restaurant responsive website.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src= 'https://i.ibb.co/86BPMH8/3876105.jpg'
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3  className="text-danger">Second slide label</h3>
            <p  className="text-danger"> Food can be classified into cereals, pulses, nuts and oilseeds, vegetable, fruits, milk and milk products and flesh food.
</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src='https://i.ibb.co/DVR6WRp/front-view-little-delicious-pizza-with-fresh-red-tomatoes-dark-salad-food-dough-cake-color-photo-fas.jpg'
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3  className="text-danger">Third slide label</h3>
            <p  className="text-danger"> Food is the necessity of life. It provides nutrition, sustenance growth to human body. Food can be classified.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
</>
         </div>
    );
};

export default Bannar;