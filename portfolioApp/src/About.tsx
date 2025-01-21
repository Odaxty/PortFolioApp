import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about">
            <div className="profil">
                <div className="g1t">
                    <h2>Mon Profil :</h2>
                    <br/><br/>
                    <p>Bonjour, je m'appelle Théo Chauviere.
                        <br/><br/>
                        Je suis actuellement en BUT Informatique en première année.
                        <br/><br/>
                        Et voici mon portfolio.
                        <br/><br/>
                    </p>
                </div>
                <div className="d1photo">
                    <img src="../src/assets/IMG_4215.PNG" alt=""/>
                </div>
            </div>
            <div className="passions">
                <div className="g2photo">
                    <img src="../src/assets/photo_velo.jpg" alt=""/>
                </div>
                <div className="d2t">
                    <h2>Mes Passions :</h2>
                    <br/><br/>
                    <p>Je suis passionné de sport.
                        <br/><br/>
                        Notamment de vélo de route.
                        <br/><br/>
                        J'en fais depuis des années.
                        <br/><br/>
                        Mais aussi je suis un passionné d'informatique et de jeux vidéo.
                        <br/><br/>
                    </p>
                </div>
            </div>
            <div className="parExp">
                <div className="parcours">
                    <h2>Mon Parcours :</h2>
                    <p>
                        <br/><br/>
                        Actuellement : BUT Informatique première année
                        <br/><br/>
                        Bac STI2D option SIN mention Bien
                        <br/><br/>
                        Brevets des collége mention bien
                        <br/><br/>
                    </p>
                </div>
                <div className="experiences">
                    <h2>Mon Expériences :</h2>
                    <p>
                        <br/><br/>
                        Stage de première au services informatique <a href="https://www.groupe-atlantic.fr/"
                                                                      target="_blank">d'Atlantic</a>
                        <br/><br/>
                        Garde d'une personne handicapée
                        <br/><br/>
                        Travail saisonnier dans le restaurant <a href="https://www.grind.fr/" target="_blank">Grind</a>
                        <br/><br/>
                        Travail saisonnier à l'usine <a href="https://www.groupe-atlantic.fr/"
                                                        target="_blank">d'Atlantic</a>
                    </p>
                </div>
            </div>
            <section className="contact" id="contact">
                <h1>Me contacter :</h1>
                <div className="contact">
                    <a href="mailto:theo.chauviere85@gmail.com">
                        <figure>
                            <img src="../src/assets/mail.png" alt=""/>
                            <figcaption>theo.chauviere85@gmail.com</figcaption>
                        </figure>
                    </a>
                    <a href="https://www.linkedin.com/in/th%C3%A9o-chauviere-68b3002aa/" target="_blank">
                        <figure>
                            <img src="../src/assets/LinkedIn.png" alt="LinkedIn"/>
                            <figcaption>LinkedIn</figcaption>
                        </figure>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;