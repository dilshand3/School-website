import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section id='home' className='home'>
        <p className='home-heading'>DAV PUBLIC SR. SCHOOL </p>
        <p className='home-para'>Tradition of Excellence, Vision for the Future</p>
        <small>we blend academic excellence with personal growth, empowering students to explore their passions and prepare for a bright future.</small>
        <div className="home-btn">
          <a href="#admission" className='home-addmission'>Addmission</a>
          <Link to="/learn-more" className='home-learn'>Learn more</Link>
        </div>
      </section>
    </>
  )
}

export default Home
