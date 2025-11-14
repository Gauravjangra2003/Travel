import './Testimonial.css'
import UP from "../../assets/svg/up.svg"
import DOWN from "../../assets/svg/down.svg"
import { useState } from 'react';

 const testimonialsData = [
  {
    id: 1,
    location: "Lahore, Pakistan",
    name: "Mike Taylor",
    image: "/src/assets/svg/user1.svg",
    text: `“On the Windows talking painted pasture yet its express parties use. 
    Sure last upon he same as knew next. Of believed or diverted no.”`,
  },
  {
    id: 2,
    location: "CEO of Red Button",
    name: "Chris Thomas",
    image: "/src/assets/svg/user1.svg",
    text: `“We needed a solution for travel planning and this app delivered exactly what we required. 
    Exceptional experience!”`,
  },
  {
    id: 3,
    location: "Dubai, UAE",
    name: "Zara Malik",
    image: "/src/assets/svg/user1.svg",
    text: `“Simple and fast. Planning trips has never been easier than this.”`,
  },
];

const Testimonial = () => {

   const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="testimonials_conatiner">
      <div className="text-area">
        <p className="subheading">TESTIMONIALS</p>
        <h1 className="heading">What People Say<br />About Us.</h1>

        {/* Dots */}
        <div className="dots">
          {testimonialsData.map((i, id) => (
            <span
              key={id}
              className={`dot ${id === current ? "active" : ""}`}
              onClick={() => setCurrent(id)}
            ></span>
          ))}
        </div>
      </div>


      <div className="testimonial-card-container">
        
        {testimonialsData.map((i, id) => (
          <div
            key={i.id}
            className={`testimonial_card ${id === current ? "active" : ""}`}
          >
            <img src={i.image} alt="user" className="user-img" />

            <p className="text">{i.text}</p>

            <h3 className="name">{i.name}</h3>
            <p className="location">{i.location}</p>
          </div>
        ))}

      </div>

          <div className='Arrows'>

        <button className="arrow_up" onClick={prevSlide}><img src={UP} alt="" /></button>
        <button className="arrow_down" onClick={nextSlide}><img src={DOWN} alt="" /></button>
        </div>

    </div>
  )
}

export default Testimonial