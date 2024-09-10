// src/components/About.js
import React, { useRef, useEffect, useState } from 'react';
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
import { initializeEmailJS, sendForm } from '../services/emailService';


function About() {
    const form = useRef();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        initializeEmailJS();

        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            setActiveLink(current);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendForm(form.current)
            .then(() => {
                console.log('SUCCESS!');
            })
            .catch((error) => {
                console.log('FAILED...', error);
            });
    };

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
                <p> Bonjour ! Je suis Aurore Budzik, une développeuse freelance spécialisée dans le développement web.
                    Je suis passionnée par la création de sites web interactifs et réactifs.
                    Voici quelques informations sur mon parcours et mes compétences.
                </p>

                <p>
                    Bonjour,
                    Je suis une développeuse web passionnée et motivée, qui a décidé
                    de changer de carrière après une expérience
                    plusieurs années dans la restauration. J'ai suivi une formation
                    auprès de l'école informatique ENI afin de me spécialiser dans
                    le développement web et acquérir les compétences nécessaires
                    pour réussir dans ce domaine en constante évolution.

                    Au cours de ma formation, j'ai appris les langages de
                    programmation tels que HTML, CSS, PHP et JavaScript, ainsi que
                    les frameworks populaires comme Symfony et Angular. J'ai
                    également acquis de solides compétences en gestion de projet et
                    en travail d'équipe, grâce aux projets en groupe et au stage en
                    entreprise que j'ai effectués.
                    Aujourd'hui, je suis à la recherche d'opportunités pour mettre mes compétences en pratique
                    et contribuer à des projets passionnants.
                    Je suis convaincue que mon parcours atypique et mon expérience
                    dans la restauration me donnent un avantage unique en termes de créativité et de résolution de
                    problèmes. Je suis impatiente de mettre mes services de votre
                    entreprise et de contribuer à son succès.

                </p>
            </section>

            {/* Section Portfolio */}
            <section id="portfolio" className="section">
                <h1>Portfolio</h1>
                <p>Découvrez mes projets ici...</p>

                {/* sites MadeinCalais-Shore */}
                <div className="image-grid">
                    <div className="image-container">
                        <img className="mic" src={Mic} alt="screenshot site Madeincalais.fr" />
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
                        <img className="shore" src={Shoredesign} alt="screenshot site Shoredesign.fr" />
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
                        <img className="fc" src={FelicieColin} alt="screenshot site feliciecolin.com" />
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
                        <img className="jsd" src={Jsdebarras} alt="screenshot site jsdebarras.com" />
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
                        <img className="kj" src={KJ} alt="screenshot site maitrekevinjurion.fr" />
                        <div className="overlay">
                            <p>
                                    <a className="link" href="https://maitrekevinjurion.fr/">
                                       Maitre Kevin Jurion <br />
                                    </a><br />
                                <span className="highlight-text">HTML-CSS-JAVASCRIPT
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="mamsweb" src={Mamsweb} alt="screenshot site mamswebconception.fr" />
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
                        <img className="ab" src={ABPortfolio} alt="screenshot portfolio" />
                        <div className="overlay">
                            <p>
                                <a className="github" href="https://github.com/abdzk/pba.git">
                                    Mon portfolio<br />GITHUB
                                </a><br/><br/>
                                <span className="highlight-text"> JavaScript React
                                </span>

                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="interhop" src={Interhop} alt="screenshot interhop association version test" />
                        <div className="overlay">
                            <p>
                                <a className="link" href="https://easyappointments-test.interhop.org/">
                                    Stage à l'association INTERHOP<br />Version test
                                </a><br/><br/>
                                <span className="highlight-text">
                                    Application OpenSource : EASYAPPOINTMENT<br />
                                    CODEIGNITER-PHP-JAVASCRIPT-JQUERY<br/>BOOSTRAP
                                </span>
                            </p>
                        </div>
                    </div>
                {/* sites Abcdaire-serie */}
                    <div className="image-container">
                        <img className="abc" src={ABC} alt="screenshot de l'application ABCDaire" />
                        <div className="overlay">
                            <p>
                                <a className="github" href="https://github.com/abdzk/ABCDaire">
                                    Projet personnel : ABCDaire<br />GITHUB
                                </a><br/><br/>
                                <span className="highlight-text"> SYMFONY-PHP-BOOSTRAP (en cours...)
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="series" src={Series} alt="screenshot application de classement de séries" />
                        <div className="overlay">
                            <p>
                                <a className="github" href="https://github.com/abdzk/series-symfony">
                                    Projet formation : Séries<br />GITHUB
                                </a><br/><br/>
                                <span className="highlight-text"> PHP-SYMFONY
                                </span>

                            </p>
                        </div>
                    </div>
                {/* sites snapface-falabalas */}
                    <div className="image-container">
                        <img className="snapfaces" src={Snapfaces} alt="screenshot application snapface" />
                        <div className="overlay">
                            <p>
                                <a className="github" href="https://github.com/abdzk/facesnap">
                                    Projet formation : Snapfaces<br />GITHUB
                                </a><br/><br/>
                                <span className="highlight-text"> TYPESCRIPT-ANGULAR
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="ff" src={Falbala} alt="screenshot site falbalasfabala.fr" />
                        <div className="overlay">
                            <p>
                                <a className="wordpress" href="https://madeincalais.fr/">
                                    Vêtements Falbalas <br />Wordpress (en cours..)
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
                <Contact />
            </section>
        </div>
    );
}

export default About;
