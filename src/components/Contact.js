import React, { useEffect, useState } from 'react';
import { initializeEmailJS, sendForm } from '../services/emailService';
import './Contact.css';

const Contact = () => {
    const [confirmationMessage, setConfirmationMessage] = useState('');

    useEffect(() => {
        initializeEmailJS();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        sendForm(form)
            .then(() => {
                setConfirmationMessage('Votre message a bien été envoyé.');
                form.reset(); // Réinitialiser le formulaire après l'envoi
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi du message:', error);
                setConfirmationMessage('Erreur lors de l\'envoi du message.');
            });
    };

    return (
        <section id="contact" className="contact-section">
            <h1>Contact</h1>
            <p>Voici comment me contacter...</p>
            <form id="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="contact_number" />
                <label><strong>Nom :</strong></label><br />
                <input type="text" name="user_name" required /><br />
                <label><strong>Email :</strong></label><br />
                <input type="email" name="user_email" required /><br />
                <label><strong>Message :</strong></label><br />
                <textarea name="message" required></textarea><br />
                <input type="submit" value="ENVOYER" className="submit-button" />
            </form>
            {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
        </section>
    );
};

export default Contact;
