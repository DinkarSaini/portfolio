import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ph1 from "../assets/img/1.png";
import ph2 from "../assets/img/2.png";
import ph3 from "../assets/img/3.png";
import ph4 from "../assets/img/4.png";
import ph5 from "../assets/img/5.png"
import ph6 from "../assets/img/6.png";
import ph7 from "../assets/img/7.png";
import ph8 from "../assets/img/8.png";
import add from "../assets/img/add.png"

const Leadership = () => {
  const images = [
        ph1,
        ph2,
        ph3,
        ph4,
        ph5,
        ph6,
        ph7,
        ph8,
        add
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Leadership</h2>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
        <div style={{ flex: 1, marginRight: '20px', maxWidth: '600px' }}>
          <p style={{ margin: '0', maxWidth: '100%' }}>
            As a React developer with leadership experience, I bring technical expertise, project management skills, and strong communication abilities to the table. I have a proven track record of building large-scale applications, optimizing code for performance, and implementing best practices. Additionally, I have experience leading teams and projects, creating and maintaining project plans, managing timelines and budgets, and ensuring timely delivery of high-quality work. I excel at communicating effectively with team members, stakeholders, and clients, both verbally and in writing, and am a skilled listener who can provide clear and constructive feedback. I am also passionate about mentoring and training other developers to help them develop their skills and achieve their goals. With my ability to solve complex technical problems and think creatively, I am always up-to-date with the latest developments in React and related technologies and am able to innovate and inspire a positive, collaborative work environment.
          </p>
        </div>

        <Slider {...settings} style={{ flex: 1, maxWidth: '600px' }}>
          {images.map((image, index) => (
            <div key={index} style={{ width: '100%' }}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Leadership;
