import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Helmet } from 'react-helmet';
import ParticleBackground from './components/ParticleBackground';
import About from './components/About';
import './SlideTransition.css';


function App() {
    const [showAbout, setShowAbout] = useState(false);

    const handleSlide = () => {
        setShowAbout(true); // Affiche la page "À propos"
    };

    return (
        <div className="App">
            <Helmet>
                {showAbout ? (
                    <>
                        <title>Mon Portfolio | Aurore Budzik</title>
                        <meta name="description" content="En savoir plus sur Aurore Budzik, développeuse freelance." />
                        <meta property="og:title" content="À Propos - Mon Portfolio" />
                        <meta property="og:description" content="Découvrez plus sur Aurore Budzik, ses compétences et son expérience." />
                        <script type="application/ld+json">
                            {`
                            {
                                "@context": "https://schema.org",
                                "@type": "Person",
                                "name": "Aurore Budzik",
                                "jobTitle": "Développeuse freelance",
                                "url": "https://aurorebudzik.fr",
                                "description": "Développeuse web freelance spécialisée en création de sites interactifs.",
                                "image": "https://www.aurorebudzik.fr/static/media/auroreBudzik.25abfa6a2d245bec65bf.webp"
                            }
                            `}
                        </script>
                    </>
                ) : (
                    <>
                        <title>Mon Portfolio</title>
                        <meta name="description" content="Bienvenue sur mon portfolio. Découvrez mes projets et compétences." />
                        <meta property="og:title" content="Accueil - Mon Portfolio" />
                        <meta property="og:description" content="Découvrez mes projets et compétences sur mon portfolio." />
                        <script type="application/ld+json">
                            {`
                            {
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Mon Portfolio",
                                "url": "https://aurorebudzik.fr",
                                "description": "Site de présentation de Aurore Budzik, développeuse freelance."
                            }
                            `}
                        </script>
                    </>
                )}
            </Helmet>
            {!showAbout && <ParticleBackground />} {/* Particules sur la page d'accueil uniquement */}

            <CSSTransition
                in={showAbout}
                timeout={300}
                classNames="slide"
                unmountOnExit
            >
                {/* Encapsuler About dans un div */}
                <div>
                    <About /> {/* Affiche le composant About */}
                </div>
            </CSSTransition>

            {!showAbout && (
                <div className="content">
                    <h1>AURORE BUDZIK</h1>
                    <p>Développeuse freelance</p>
                    <span className="arrow" onClick={handleSlide}>⇝</span>
                </div>
            )}
        </div>
    );
}

export default App;
