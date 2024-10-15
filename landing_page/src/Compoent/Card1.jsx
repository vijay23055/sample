import React from 'react'
import image1 from '../assets/img/testimonials-1.jpg'
import image2 from '../assets/img/testimonials-2.jpg'
import image3 from '../assets/img/testimonials-3.jpg'

function Card1() {
  const data = [
    {
      image:image1,
      Name:"Margaret E.",
      Comments:"This is fantastic! Thanks so much guys!"
    },
    {
      image:image2,
      Name:"Fred S.",
      Comments:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
    },
    {
      image:image3,
      Name:"Sarah W.",
      Comments:"Thanks so much for making these free resources available to us!"
    },

  ]
  return <>

    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          {data.map((item, index) => (
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src={item.image} alt="..." />
                <h5>{item.Name}</h5>
                <p className="font-weight-light mb-0">"{item.Comments}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  </>
}

export default Card1
