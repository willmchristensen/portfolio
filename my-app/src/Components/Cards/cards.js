import './cards.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import mu from '../images/pls.png'
import share from '../images/sharebnb-splash.png'
import query from '../images/query-splash.png'
import me from '../images/PORTRAIT OF ME.jpg'
const Cards = () => {
    const [sideBar, showSideBar] = useState(true);
    const handleClick = () => {
        showSideBar(!sideBar)
    }
    const dynamicSideBar = sideBar ? 'sidebar' : 'hidden-button';
    const button = sideBar ? 'hidden-button' : 'not-hidden-button';
    return (
        <div
            className="container flex justify-items-center flex-col m-4 max-w-full"
        >
            <div className="header items-center flex justify-items-center flex-col-reverse"
            >
                <h1 class="text-3xl font-bold underline">will christensen</h1>
                <div className='img-container items-center flex
                  justify-items-center mb-11 mt-11 '>
                    <img className="profile-pc w-90 h-90 shadow-inner" src={me} alt="" />
                </div>
            </div>
            <div
                className="
                about-me
                flex
                items-center
                justify-items-center "
            >
                <div className="text-box p-3">
                    <p>
                        My experience in customer experience, marketing, and operations provides a distinct vantage point when approaching new challenges. With a Bachelor of Science in Agricultural Business from California Polytechnic University, I have gained valuable skills in transportation and logistics, quality assurance, inventory management, sales and marketing, and account management. My technical proficiencies include CSS3, HTML5, JavaScript, React, SQL, Python, and Java, which I have further developed through formal education at App Academy, Bitwise Industries, and Foothill College.
                    </p>
                    <p>
                        My genuine passion for creating sincere connections with others sets me apart. By combining my technical expertise with my extensive experience in customer service and marketing, I can effectively bridge the communication gap between developers and end users. With my strong background in customer experience, marketing, and operations, technical prowess, and genuine passion for connecting with people, I am confident in my ability to build valuable relationships and deliver impactful solutions that meet the needs and exceed end users' expectations.
                    </p>
                    <p>

                        Beyond my professional pursuits, I actively engage in various hobbies such as mixing music, gardening, hiking, golfing, yoga, cooking, and climbing.

                        I can be contacted by email at: willmchristensen@gmail.com
                    </p>
                </div>
            </div>
            <div className="projects flex justify-items-center flex-col">
                <h1>projects</h1>
                <div className="project-images flex max-w-full justify-between">
                    <div className="project-card flex justify-item-center flex-col">
                        <img className='project-img max-w-full' src={share} alt="" />
                        <a
                            href='https://sharebnb-wpig.onrender.com/'
                            className="card"
                        >
                            <div className="img">
                                <span>Sharebnb</span>
                            </div>
                            <div className="card-content">
                                <p>Airbnb clone.</p>
                            </div>
                        </a>
                    </div>
                    <div className="project-card flex justify-item-center flex-col">
                        <img className='project-img max-w-full' src={query} alt="" />
                        <a
                            href='https://query-bhy5.onrender.com'
                            className="card"
                        >
                            <div className="img">
                                <span>Query</span>
                            </div>
                            <div className="card-content">
                                <p> Quora clone.</p>
                            </div>
                        </a>
                    </div>
                    <div
                        className="project-card flex justify-item-center flex-col"
                    >
                        <img
                            className='max-w-full'
                            src={mu} alt=""
                        />
                        <a
                            href='https://mu-zfwi.onrender.com'
                            className="card">
                            <div className="img">
                                <span>Mu</span>
                            </div>
                            <div className="card-content">
                                <p>Resident advisor clone.</p>
                            </div>
                        </a>
                    </div>


                </div>
                <div className="cards-container flex justify-items-center">



                </div>
            </div>

            <div className="header">
                <h1>Contact Me</h1>
            </div>
            <div className="cards-container">
                <ul>
                    <li>Email: willmchristensen@gmail.com</li>
                    <li>Phone Number: 559-284-4414</li>
                    <li><a href="https://docs.google.com/document/d/1u8rULmGGkga0h7qKgC56gOraWr6Egk_aSDluzh5oh44/edit?usp=drive_link">Resume</a></li>
                    <li><a href="https://github.com/willmchristensen">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/will-christensen-85531317a/">linkedin</a></li>
                </ul>
            </div>
            <div className="cards-container">
                <h3>skills</h3>
                <ul>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SQL</li>
                </ul>
            </div>
        </div>
    )
}

export default Cards;
