import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <>
      <section id='home' className='home'>
        <p className='home-heading'>DAV PUBLIC SR. SCHOOL </p>
        <p className='home-para'>Tradition of Excellence, Vision for the Future</p>
        <small>we blend academic excellence with personal growth, empowering students to explore their passions and prepare for a bright future.</small>
        <div className="home-btn">
          <button className='home-addmission'>Addmission</button>
          <button className='home-learn'>Learn more</button>
        </div>
      </section>
    </>
  )
}

export default Home
