import React from 'react';
import "./Learnmore.css";
import Footer from '../Footer/Footer.jsx'

const Learnmore = () => {
  return (
    <>
      <section className='learnmore'>
        <nav>
          <h1>DAV PUBLIC SCHOOL</h1>
        </nav>
        <div className="learnmore-content">
          <h3>More About Us</h3>
          <p>DAV Public Schools are renowned institutions in India, dedicated to providing quality education that emphasizes both academic excellence and holistic development. These schools are managed by the DAV College Managing Committee, which is one of the largest educational organizations in India. The primary aim of DAV Public Schools is to foster an environment where students can thrive academically, socially, and personally.</p>
        </div>
        <div className="learnmore-content">
          <p>Founded on the principles of the Dayanand Anglo-Vedic (DAV) tradition, these schools uphold values such as integrity, discipline, and respect for cultural heritage. They blend traditional values with modern educational practices to prepare students for the challenges of the future. DAV Public Schools are known for their emphasis on a well-rounded education that includes not just academics but also sports, arts, and other co-curricular activities.
          </p>
        </div>
        <div className="learnmore-content">
          <ul>
            <li>Holistic Education: DAV Public Schools offer a well-rounded education that balances academics with sports, arts, and other co-curricular activities to foster all-around development.</li>
            <li>Values and Ethics: The schools emphasize moral and ethical education, promoting values such as integrity, respect, and responsibility, in line with the DAV tradition.</li>
            <li>Modern Curriculum: The curriculum is designed to stimulate intellectual curiosity and critical thinking, incorporating modern educational practices and experiential learning.</li>
            <li>Supportive Environment: DAV Public Schools provide a nurturing and inclusive environment that supports individual growth and helps students reach their full potential.</li>
          </ul>
        </div>
      </section>
      <Footer />

    </>
  )
}

export default Learnmore