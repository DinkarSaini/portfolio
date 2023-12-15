// AboutMe.jsx
import './aboutme.css'
import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="photo-container">
      <img src="https://images.pexels.com/photos/19457037/pexels-photo-19457037/free-photo-of-the-view-from-the-top-of-a-building-in-paris.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Your Profile" className="my-photo" />

      </div>
      <div className="text-container">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="https://drive.google.com/file/d/1kHTZfsRlzBegxo9a0UEjN07K71PICZb1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className="resume-button">Resume</button>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
