
import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear(); // Pour obtenir l'année en cours

    return (
        <footer className="footer">
            <p className="copy">&copy; {year} Aurore Budzik</p>
        </footer>
    );
};

export default Footer;
