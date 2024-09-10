// src/components/About.js
import React from 'react';
import './About.css'; // Style spécifique à la page À propos
import ABPortfolio from '../img/portfolio.webp'; // Importation des images
import Interhop from '../img/interhop.webp';
import ABC from '../img/abc.webp';
import KJ from '../img/maitrekevinjurion.webp';
import Series from '../img/serie.webp';
import Snapfaces from '../img/snapfaces.webp';

function About() {
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

            <section id="portfolio" className="section">
                <h1>Portfolio</h1>
                <p>Découvrez mes projets ici...</p>
                <div className="img-1">
                    <div className="image-container">
                        <img className="ab" src={ABPortfolio} alt="screenshot portfolio" />
                        <div className="overlay">
                            <p>
                                <a className="github" href="https://github.com/abdzk/portfolio_AB">
                                    Mon portfolio<br />GITHUB
                                </a><br />
                                HTML-CSS-JAVASCRIPT
                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="interhop" src={Interhop} alt="screenshot interhop association version test" />
                        <div className="overlay">
                            <p>
                                <a className="link" href="https://easyappointments-test.interhop.org/">
                                    Stage à l'association INTERHOP<br />Version test
                                </a><br />
                                Application OpenSource : EASYAPPOINTMENT<br />
                                CODEIGNITER-PHP-JAVASCRIPT-JQUERY-BOOSTRAP
                            </p>
                        </div>
                    </div>
                </div>

                <div className="img-2">
                    <div className="image-container">
                        <img className="abc" src={ABC} alt="screenshot de l'application ABCDaire" />
                        <div className="overlay">
                            <p>
                                <a className="github" href="https://github.com/abdzk/ABCDaire">
                                    Projet personnel : ABCDaire<br />GITHUB
                                </a><br />
                                SYMFONY-PHP-BOOSTRAP
                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="kj" src={KJ} alt="screenshot site Jurion Kevin Avocat" />
                        <div className="overlay">
                            <p>
                                <a className="link" href="#">
                                    Projet professionnel<br />KEVIN JURION
                                </a><br />
                                HTML-CSS-JAVASCRIPT
                            </p>
                        </div>
                    </div>
                </div>

                <div className="img-3">
                    <div className="image-container">
                        <img className="series" src={Series} alt="screenshot application de classement de séries" />
                        <div className="overlay">
                            <p>
                                <a className="github" href="https://github.com/abdzk/series-symfony">
                                    Projet formation : Séries<br />GITHUB
                                </a><br />
                                PHP-SYMFONY
                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="snapfaces" src={Snapfaces} alt="screenshot application snapface" />
                        <div className="overlay">
                            <p>
                                <a className="github" href="https://github.com/abdzk/facesnap">
                                    Projet formation : Snapfaces<br />GITHUB
                                </a><br />
                                TYPESCRIPT-ANGULAR
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="section">
                <h1>Contact</h1>
                <p>Voici comment me contacter...</p>
            </section>
        </div>
    );
}

export default About;
