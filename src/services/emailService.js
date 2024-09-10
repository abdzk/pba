// src/services/emailService.js
import emailjs from 'emailjs-com';

export const initializeEmailJS = () => {
    emailjs.init('FLh0Wjy3X3qFfwPzb');
};

export const sendForm = (form) => {
    form.contact_number.value = Math.random() * 100000 | 0;
    return emailjs.sendForm('service_3ptoq6e', 'template_dixher9', form);
};

