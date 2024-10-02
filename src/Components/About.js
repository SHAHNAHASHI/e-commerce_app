// import React from 'react';
import '../Components/About.css'; // Ensure you have this CSS file
import image4 from "../Components/Assets/person1.webp";
import image5 from "../Components/Assets/person2.webp";

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      
      <section className="about-us-content">
        <div className="about-us-text">
          <h2>Our Story</h2>
          <p>
            Welcome to MAZON EXPRESS! We are dedicated to providing the best products in the industry. Our journey started in 1997 with a mission to send every where. Since then, we have grown into a [brief description of your company’s growth or achievements].
          </p>
          <p>
            Our team is passionate about [what you are passionate about] and works tirelessly to ensure that every customer has a great experience. We believe in [your core values, e.g., quality, integrity, innovation].
          </p>
        </div>
        
        <div className="about-us-team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={image4} alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
              <p>John is the visionary behind our company. With a background in [industry], he leads our team with passion and commitment.</p>
            </div>
            <div className="team-member">
              <img src={image5} alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Chief Operating Officer</p>
              <p>Jane ensures our operations run smoothly. Her expertise in [field] helps us deliver excellence every day.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>
      
      <footer className="about-us-footer">
        <p>© [Year] [Your Company Name]. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;