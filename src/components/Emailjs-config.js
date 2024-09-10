import emailjs from '@emailjs/browser';

// Initialise EmailJS avec ta clé publique
export const initializeEmailJS = () => {
    emailjs.init('Z04ZmRiZr1Ftn7RMt');
};

// Fonction pour envoyer le formulaire
export const sendForm = (form) => {
    // Générer un nombre à cinq chiffres pour la variable contact_number
    form.contact_number.value = Math.random() * 100000 | 0;

    return emailjs.sendForm('contact_service', 'contact_form', form);
};