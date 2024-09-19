import React from 'react';
import "./About.css";
import { Image } from '../../../public/Image';

const About = () => {
    return (
        <>
            <section className='about1' id='about'>
                <h3>About US</h3>
                <section className='about'>
                    <p>Reasons to Select DAV</p>
                    <small>Scroll here  <i class='bx bx-right-arrow-circle'></i></small>
                    <div className="about-image">
                        <div className="image-label">
                            <img src={Image.Events} alt="event" />
                            <label forImage="Events">Events at DAV</label>
                        </div>
                        <div className="image-label">
                            <img src={Image.Classroom} alt="classroom" />
                            <label forImage="Events">Classroom at DAV</label>
                        </div>
                        <div className="image-label">
                            <img src={Image.Library} alt="library" />
                            <label forImage="Events">best Library</label>
                        </div>

                        <div className="image-label">
                            <img src={Image.Lab} alt="Lab" />
                            <label forImage="Events">Top science lab</label>
                        </div>
                        <div className="image-label">
                            <img src={Image.Sports} alt="sports" />
                            <label forImage="Events">Best sport team</label>
                        </div>
                        <div className="image-label">
                            <img src={Image.Hostel} alt="hostel" />
                            <label forImage="Events">First class hostel</label>
                        </div>
                        <div className="image-label">
                            <img src={Image.HostelMess} alt="hostelmess" />
                            <label forImage="Events">Home like food</label>
                        </div>
                        <div className="image-label">
                            <img src={Image.Transport} alt="transport" />
                            <label forImage="Events">Safe and better transport </label>
                        </div>
                    </div>
                    <div className="about-vision">
                        <section>
                            <h3>Our Vision</h3>
                            <ul>
                                <li>Every student feels valued and inspired: We aim to create a safe and inclusive environment that celebrates diversity and encourages personal growth.</li>
                                <li>Excellence is the standard: Our dedicated faculty and staff are committed to academic excellence and continuous improvement.</li>
                                <li>Community matters: We believe in the power of collaboration between students, parents, and educators to create a supportive learning environment.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eum. Corrupti unde molestiae iure mollitia amet inventore veritatis cumque, perferendis reprehenderit eius quaerat tempora necessitatibus dolorem error recusandae deleniti molestias!</li>
                            </ul>
                        </section>
                        <section>
                            <img src={Image.classroom2} alt="classroom2" />
                        </section>
                    </div>
                        <div className="about-paragraph">
                            <h4>About US</h4>
                            <p>Welcome to DAV
                                At DAV public school , we are committed to fostering an environment where every student can thrive academically, socially, and personally. Our mission is to inspire a lifelong love of learning and to prepare our students to be thoughtful, innovative, and responsible citizens.</p>
                        </div>
                    
                </section>
            </section>
        </>
    )
}

export default About
