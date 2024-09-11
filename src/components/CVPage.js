import React from 'react';
 // Ajoutez un fichier CSS pour styliser votre page CV si nécessaire

const CvPage = () => {
    return (
        <div className="cv-page">
            <h1>Mon CV</h1>
            <p>Voici mon CV, je vous invite à le consulter :</p>
            <iframe
                src="#" // Remplacez par le lien vers votre CV PDF ou une version visualisable
                title="Mon CV"
                width="100%"
                height="800px"
                frameBorder="0"
                scrolling="yes"
            ></iframe>
        </div>
    );
};

export default CvPage;
