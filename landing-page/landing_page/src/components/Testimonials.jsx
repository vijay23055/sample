import React from "react";
import { Carousel } from "react-bootstrap";
import test1 from '../assets/test1.webp'
import test2 from '../assets/test2.jpeg'
import test3 from '../assets/test3.webp'
const Testimonials = () => {
  const testimonialsData = [
    {
      review: "HCLTech's solutions reduced our time to market by 30%!",
      company: "Biopharma Company A",
      imgSrc: test1,
    },
    {
      review: "Their digital lab management transformed our operations.",
      company: "Biopharma Company B",
      imgSrc: test2,
    },
    {
      review: "We achieved significant operational efficiency thanks to their expertise.",
      company: "Biopharma Company C",
      imgSrc: test3,
    },
  ];

  return (
    <div className="cover-testimonial">
      <Carousel className="my-5 testimonial-carousel">
      {testimonialsData.map((testimonial, index) => (
        <Carousel.Item key={index}>
          <div className="testimonial-item text-center-testimonial">
            <img
              src={testimonial.imgSrc}
              alt={testimonial.company}
              className="testimonial-img"
            />
            <p className="testimonial-review">"{testimonial.review}"</p>
            <h6 className="testimonial-company">- {testimonial.company}</h6>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    
  );
};

export default Testimonials;
