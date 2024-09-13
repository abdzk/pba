
import React, {useEffect, useState} from 'react';
import './About.css';
import ABPortfolio from '../img/portfolio.webp';
import Interhop from '../img/interhop.webp';
import ABC from '../img/abc.webp';
import KJ from '../img/maitrekevinjurion.webp';
import Series from '../img/serie.webp';
import Snapfaces from '../img/snapfaces.webp';
import Mic from '../img/madeincalais.webp';
import Shoredesign from '../img/shoredesign.webp';
import Jsdebarras from '../img/js-debarras.webp';
import FelicieColin from '../img/feliciecolin.webp';
import Mamsweb from '../img/mamsweb.webp';
import Falbala from '../img/falbalasfabala.webp';
import Contact from './Contact'; // Importation du composant Contact
import {initializeEmailJS} from '../services/emailService';
import CVImage from '../img/CV_AuroreBudzik.webp';
import aurorePhoto from '../img/auroreBudzik.webp';


function About() {
    const [showCv, setShowCv] = useState(false); // Gardé pour le CV

    useEffect(() => {
        initializeEmailJS(); // Initialiser EmailJS ici

        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - sectionHeight / 3) {

                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        const progressBars = document.querySelectorAll('.progress-container');
        progressBars.forEach((bar) => observer.observe(bar));

        return () => progressBars.forEach((bar) => observer.unobserve(bar));
    }, []);

    const handleShowCv = () => setShowCv(!showCv);




    return (
        <div className="about-container">
            {/* Menu de navigation fixe */}
            <nav className="fixed-menu">
                <ul>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Sections */}
            <section id="about" className="section">
                <h1>À propos de moi</h1>
                <div className="ab-container">
                    <img src={aurorePhoto} alt="Aurore Budzik" className="about-photo" />
                    <div className="about-content">
                        <p className="p-about">
                            Bonjour, je suis Aurore Budzik, une développeuse freelance spécialisée dans le développement web.
                            Je suis passionnée par la création de sites web interactifs et réactifs, et je souhaite partager
                            avec vous quelques éléments sur mon parcours et mes compétences.
                        </p>
                        <p className="p-about">
                            Après plusieurs années d'expérience dans la restauration, j'ai décidé de changer de carrière et
                            de me consacrer pleinement au développement web. J'ai suivi une formation intensive à l'école
                            informatique ENI, où j'ai acquis des compétences solides en HTML, CSS, PHP et JavaScript, ainsi que
                            dans les frameworks populaires comme Symfony et Angular.
                        </p>
                        <p className="p-about">
                            Mon parcours m'a également permis de développer des compétences en gestion de projet et en travail
                            d'équipe, grâce aux projets de groupe et au stage en entreprise que j'ai réalisés. Aujourd'hui,
                            je suis en quête d'opportunités pour mettre en pratique mes compétences et contribuer à des projets
                            stimulants. Mon expérience variée me permet d'aborder les défis avec créativité et pragmatisme.
                            Je suis enthousiaste à l'idée de collaborer avec vous et de contribuer au succès de vos projets.
                        </p>
                    </div>
                </div>
                {/* Barres de progression */}
                <h2>Compétences</h2>
                <div className="competences-container">
                    <div className="competences">
                        <div className="progress-container" style={{'--progress-width': '90%'}}>
                            <div className="progress-bar">
                                <div className="progress-fill">HTML/CSS</div>
                            </div>
                        </div>
                        <div className="progress-container" style={{'--progress-width': '85%'}}>
                            <div className="progress-bar">
                                <div className="progress-fill">JavaScript</div>
                            </div>
                        </div>
                        <div className="progress-container" style={{'--progress-width': '75%'}}>
                            <div className="progress-bar">
                                <div className="progress-fill">React</div>
                            </div>
                        </div>
                        <div className="progress-container" style={{'--progress-width': '70%'}}>
                            <div className="progress-bar">
                                <div className="progress-fill">PHP</div>
                            </div>
                        </div>
                        <div className="progress-container" style={{'--progress-width': '65%'}}>
                            <div className="progress-bar">
                                <div className="progress-fill">Symfony</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section CV */}
                <button onClick={handleShowCv} className="cv-button">
                    {showCv ? 'Masquer mon CV' : 'Visualiser mon CV'}
                </button>

                {showCv && (
                    <div className="cv-section">
                        <img src={CVImage} alt="Mon CV" className="cv-image" />
                    </div>
                )}

            </section>

            {/* Section Portfolio */}
            <section id="portfolio" className="section">
                <h1>Portfolio</h1>
                <p className="discover">Découvrez mes projets ici...</p>

                {/* sites MadeinCalais-Shore */}
                <div className="image-grid">
                    <div className="image-container">
                        <img className="mic" src={Mic} alt="screenshot site Madeincalais.fr"/>
                        <div className="overlay">
                            <p>
                                <a className="wordpress" href="https://madeincalais.fr/">
                                    Association <br/> Made in Calais
                                </a><br/><br/>
                                <span className="highlight-text">Wordpress
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="shore" src={Shoredesign} alt="screenshot site Shoredesign.fr"/>
                        <div className="overlay">
                            <p>
                                <a className="link" href="https://shoredesign.fr/">
                                    Artiste Graffeur Shore<br/>
                                </a><br/>
                                <span className="highlight-text">Wordpress
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* sites felicie colin- jsdebarras */}
                    <div className="image-container">
                        <img className="fc" src={FelicieColin} alt="screenshot site feliciecolin.com"/>
                        <div className="overlay">
                            <p>
                                <a className="wordpress" href="https://feliciecolin.com/">
                                    Artiste Bijoutière<br/> Félicie Colin
                                </a><br/><br/>
                                <span className="highlight-text">Wordpress
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="jsd" src={Jsdebarras} alt="screenshot site jsdebarras.com"/>
                        <div className="overlay">
                            <p>
                                <a className="link" href="https://jsdebarras.com/">
                                    Jsdebarras<br/>
                                </a><br/>
                                <span className="highlight-text">Wordpress
                                </span>
                            </p>
                        </div>
                    </div>
                    {/* sites maitre jurion - mamsweb */}
                    <div className="image-container">
                        <img className="kj" src={KJ} alt="screenshot site maitrekevinjurion.fr"/>
                        <div className="overlay">
                            <p>
                                <a className="link" href="https://maitrekevinjurion.fr/">
                                    Maitre Kevin Jurion <br/>
                                </a><br/>
                                <span className="highlight-text">HTML-CSS-JAVASCRIPT
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="mamsweb" src={Mamsweb} alt="screenshot site mamswebconception.fr"/>
                        <div className="overlay">
                            <p>
                                <a className="link" href="https://mamswebconception.fr/">
                                    MAMSWEB Conception<br/>
                                </a><br/>
                                <span className="highlight-text">Wordpress
                                </span>
                            </p>
                        </div>
                    </div>
                    {/* sites potfolio - interhop */}
                    <div className="image-container">
                        <img className="ab" src={ABPortfolio} alt="screenshot portfolio"/>
                        <div className="overlay">
                            <p>
                                <a className="github" href="https://github.com/abdzk/pba.git">
                                    Mon portfolio<br/>GITHUB
                                </a><br/><br/>
                                <span className="highlight-text"> JavaScript React
                                </span>

                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="interhop" src={Interhop} alt="screenshot interhop association version test"/>
                        <div className="overlay">
                            <p>
                                <a className="link" href="https://easyappointments-test.interhop.org/">
                                    Stage à l'association INTERHOP<br/>Version test
                                </a><br/><br/>
                                <span className="highlight-text">
                                    Application OpenSource : EASYAPPOINTMENT<br/>
                                    CODEIGNITER-PHP-JAVASCRIPT-JQUERY<br/>BOOSTRAP
                                </span>
                            </p>
                        </div>
                    </div>
                    {/* sites Abcdaire-serie */}
                    <div className="image-container">
                        <img className="abc" src={ABC} alt="screenshot de l'application ABCDaire"/>
                        <div className="overlay">
                            <p>
                                <a className="github" href="https://github.com/abdzk/ABCDaire">
                                    Projet personnel : ABCDaire<br/>GITHUB
                                </a><br/><br/>
                                <span className="highlight-text"> SYMFONY-PHP-BOOSTRAP (en cours...)
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="series" src={Series} alt="screenshot application de classement de séries"/>
                        <div className="overlay">
                            <p>
                                <a className="github" href="https://github.com/abdzk/series-symfony">
                                    Projet formation : Séries<br/>GITHUB
                                </a><br/><br/>
                                <span className="highlight-text"> PHP-SYMFONY
                                </span>

                            </p>
                        </div>
                    </div>
                    {/* sites snapface-falabalas */}
                    <div className="image-container">
                        <img className="snapfaces" src={Snapfaces} alt="screenshot application snapface"/>
                        <div className="overlay">
                            <p>
                                <a className="github" href="https://github.com/abdzk/facesnap">
                                    Projet formation : Snapfaces<br/>GITHUB
                                </a><br/><br/>
                                <span className="highlight-text"> TYPESCRIPT-ANGULAR
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="ff" src={Falbala} alt="screenshot site falbalasfabala.fr"/>
                        <div className="overlay">
                            <p>
                                <a className="wordpress" href="https://madeincalais.fr/">
                                    Vêtements Falbalas <br/>Wordpress (en cours..)
                                </a><br/><br/>
                                <span className="highlight-text"> Wordpress (en construction)
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Contact */}
            <section id="contact" className="section">
                <Contact/>
            </section>
        </div>
    );
}

export default About;
