// portfolioApp/src/Work.tsx
import React from 'react';
import './Work.css';

const Work: React.FC = () => {
    return (
        <div className="work">
            <h2 className="projet">Mes projets :</h2>
            <div className="jeux" id="jeux">
                <div className="p1">
                    <div className="d1v">
                        <video autoPlay loop muted>
                            <source src="../src/assets/vidéo-jeux.mp4" type="video/mp4"/>
                            " Votre navigateur ne supporte pas la vidéo."
                        </video>
                    </div>
                    <div className="g1t">
                        <br/>
                        <h1>Mon premier jeux en 2D !</h1>
                        <br/>
                        <p>Voici une vidéo de mon premier projet de développement d'application en langage GO (Golang),
                            développé par
                            la grande entreprise Google. J'ai réalisé ce projet avec un membre de ma classe. Nous avons
                            bénéficié de
                            30 heures de cours pour développer des fonctions telles que l'ouverture d'un fichier, la
                            récupération des
                            données et leur transmission au jeu pour charger les cartes.
                            <br/>
                            <br/>
                            De plus, nous avons été chargés de mettre en
                            place une méthode plus optimisée pour charger et décharger les cartes, appelée Quadtree.
                            Enfin, nous avons
                            développé des extensions, notamment une génération de terrains aléatoires, un téléporteur,
                            un enregistreur
                            de cartes, ainsi qu'une extension permettant au personnage de ne pas marcher sur l'eau.</p>
                        <br/>
                        <br/>
                        <div className="b1">
                            <h4>Outils utilisé :</h4>
                            <div className="a">
                                <a href="https://go.dev/" target="_blank">Golang</a>
                                <a href="https://code.visualstudio.com/" target="_blank">Visual Studio</a>
                                <a href="https://iutnantes.univ-nantes.fr/" target="_blank">IUT Nantes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <figure>
                <a href="#ongle">
                    <div className="container2">
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                    </div>
                </a>
            </figure>
            <div className="ongle" id="ongle">
                <div className="p2">
                    <div className="d2t">
                        <br/>
                        <h1>Projet site L'atelier du Vernis !</h1>
                        <br/>
                        <p>Voici une vidéo du site de L'atelier du Vernis, un site de vente et de prise de rendez-vous
                            pour
                            la pose de vernis. J'ai réalisé ce projet avec 5 membres de ma classe. Nous avons bénéficié
                            de 10
                            heures de cours pour la création du site, qui devait être en lien avec un type de design
                            précis :
                            le design nommé "Flat design", caractérisé par son aspect épuré mettant en avant les
                            éléments
                            principaux.
                            <br/>
                            <br/>
                            Sur ce site, nous avons une page d'accueil présentant différents types de produits, ainsi
                            qu'une page
                            "Mon compte" permettant la connexion ou l'inscription des utilisateurs. Nous avons également
                            une page
                            produit affichant les différents articles vendus, une page agenda pour la prise de
                            rendez-vous, et
                            enfin une page FAQ regroupant différentes questions fréquemment posées.</p>
                        <br/>
                        <br/>
                        <div className="b2">
                            <h4>Outils utilisé :</h4>
                            <div className="a">
                                <a href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"
                                   target="_blank">HTML</a>
                                <a href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"
                                   target="_blank">CSS</a>
                                <a href="https://fr.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>
                                <a href="https://code.visualstudio.com/" target="_blank">Visual Studio</a>
                                <a href="https://iutnantes.univ-nantes.fr/" target="_blank">IUT Nantes</a>
                            </div>
                        </div>
                    </div>
                    <div className="g2v">
                        <video autoPlay loop muted>
                            <source src="../src/assets/ongle.mp4" type="video/mp4"/>
                            " Votre navigateur ne supporte pas la vidéo."
                        </video>
                    </div>
                </div>
            </div>
            <figure>
                <a href="#sql">
                    <div className="container2">
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                    </div>
                </a>
            </figure>
            <div className="sql" id="sql">
                <div className="p3">
                    <div className="d3v">
                        <video autoPlay loop muted>
                            <source src="../src/assets/Projet SQL1/sql_video.mp4" type="video/mp4"/>
                            " Votre navigateur ne supporte pas la vidéo."
                        </video>
                    </div>
                    <div className="g3t">
                        <br/>
                        <h1>Projet Gestionne de Base de Données SQL !</h1>
                        <br/>
                        <p> Voici une vidéo sur le projet de gestion de base de données que j'ai effectué pendant le
                            premier
                            semestre de mon BUT Informatique. J'ai réalisé ce projet avec un membre de ma classe. Nous
                            avons
                            bénéficié de 15 heures de cours pour la création de la base de données. Nous avons travaillé
                            sur
                            une base de données concernant une application qui permet de créer et de participer à des
                            trajets
                            en covoiturage.
                            <br/>
                            <br/>
                            Pour cela, nous avons créé des tables telles que "Voiture", "Conducteur", "Passager", "Avis"
                            et
                            "Trajet" en utilisant la commande "CREATE TABLE (nom de la table)". Ensuite, nous avons
                            inséré
                            des informations dans ces tables à l'aide de la commande "INSERT INTO...". Enfin, nous avons
                            répondu à 8 questions qui nous demandaient de sélectionner des informations précises en
                            fonction
                            des conditions données.
                        </p>
                        <br/>
                        <br/>
                        <div className="b3">
                            <h4>Outils utilisé :</h4>
                            <div className="a">
                                <a href="https://www.oracle.com/fr/database/sqldeveloper/" target="_blank">SQL
                                    Developer</a>
                                <a href="https://www.looping-mcd.fr/" target="_blank">Looping</a>
                                <a href="https://iutnantes.univ-nantes.fr/" target="_blank">IUT Nantes</a>
                            </div>
                        </div>
                    </div>
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

export default Work;