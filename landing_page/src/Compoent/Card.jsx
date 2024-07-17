import React from 'react'
import image1 from '../assets/img/bg-showcase-1.jpg'
import image2 from '../assets/img/bg-showcase-2.jpg'
import image3 from '../assets/img/bg-showcase-3.jpg'


const data = [
  {
    title: 'Fully Responsive Design',
    description: 'When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it\'s a phone, tablet, or desktop the page will behave responsively!',
    image: image1,
    imgalign: "order-lg-2"
  },
  {
    title: 'Updated For Bootstrap 5',
    description: 'Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!',
    image: image2,
    imgalign: "order-lg-1"

  },
  {
    title: 'Easy to Use & Customize',
    description: 'Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!',
    image: image3,
    imgalign: "order-lg-2"
  },
];
function First() {
  return (
    <>
      {data.map((item, index) => (
        <section className="showcase" key={index}>
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className={`col-lg-6 ${item.imgalign} text-white showcase-img`} style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className={`col-lg-6 ${item.imgalign === 'order-lg-2' ? 'order-lg-1' : 'order-lg-2'} my-auto showcase-text`}>
                <h2>{item.title}</h2>
                <p className="lead mb-0">{item.description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}



export default First
