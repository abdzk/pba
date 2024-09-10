import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
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
