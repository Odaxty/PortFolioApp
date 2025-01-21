import React, { useState } from 'react';
import About from './About.tsx';
import Work from './Work';
import './Portfolio.css';

const Portfolio: React.FC = () => {
    const [page, setPage] = useState('home');

    const renderPage = () => {
        switch (page) {
            case 'home':
                return <Home />;
            case 'work':
                return <Work />;
            case 'about':
                return <About />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="portfolio">
            <header>
                <nav>
                    <a href="#" onClick={() => setPage('home')}><img src="../src/assets/Théo2.png" alt="logo théo"/></a>
                    <ul className="menudereoulant">
                        <li><a href="#" onClick={() => setPage('home')}>Accueil</a></li>
                        <li><a href="#" onClick={() => setPage('work')}>Projet</a></li>
                        <li><a href="#" onClick={() => setPage('about')}>À propos</a></li>
                        <li><a href="#contact">Me contacter</a></li>
                    </ul>
                </nav>
            </header>
            {renderPage()}
        </div>
    );
};

const Home: React.FC = () => (
    <div className="portfolio">
        <section className="mains">
            <div className="all">
                <div className="text">
                    <h1>Théo
                        <br/>
                        CHAUVIERE
                    </h1>
                    <h3>Étudiant en BUT Informatique</h3>
                    <br/>
                    <div id="container">
                        <button className="learn-more">
                            <a href="../src/assets/CV Alternance CHAUVIERE Théo.pdf" target="_blank">
                    <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                    </span>
                                <span className="button-text">CV</span>
                            </a>
                        </button>
                    </div>
                    <div id="container">
                        <button className="learn-more">
                            <a href="../src/assets/Lettre_de_Motivation.pdf" target="_blank">
                    <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                    </span>
                                <span className="button-text">Lettre de motivation</span>
                            </a>
                        </button>
                    </div>
                    <br/>
                </div>
                <div className="img">
                    <img src="../src/assets/IMG_4215.PNG" alt="photo_théo" className="phototheo"/>
                </div>
            </div>

        </section>
        <section className="presentation">
            <p>
                Bonjour et bienvenue sur mon portfolio.
                <br/>
                <br/>
                Je m'appelle Théo Chauvière, j'ai 19 ans et je suis étudiant en la filière BUT Informatique.
                <br/>
                Pendant cette première année, j'ai pu développer mes compétences en développement web, mais aussi en
                développement d'applications et
                <br/>
                en gestion de bases de données SQL.
                <br/>
            </p>
        </section>
        <figure>
            <a href="#comp">
                <div className="container2">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
            </a>
        </figure>
        <br/>
        <br/>
        <section className="conp" id="comp">
            <h2>Mes compétences :</h2>
            <div className="comp_div">
                <h3>Front-end</h3>
                <div className="div_img">
                    <figure>
                        <a href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language" target="_blank">
                            <img src="../src/assets/assets-competence/html.png" alt=""/>
                            <figcaption>HTML</figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade" target="_blank">
                            <img src="../src/assets/assets-competence/css.png" alt=""/>
                            <figcaption>CSS</figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://fr.wikipedia.org/wiki/JavaScript" target="_blank">
                            <img src="../src/assets/assets-competence/JavaScript.png" alt=""/>
                            <figcaption>JavaScript</figcaption>
                        </a>
                    </figure>
                </div>
            </div>

            <div className="comp_div">
                <h3>Back-end</h3>
                <div className="div_img">
                    <figure>
                        <a href="https://www.python.org/" target="_blank">
                            <img src="../src/assets/assets-competence/python.png" alt=""/>
                            <figcaption>Python</figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://fr.wikipedia.org/wiki/Structured_Query_Language" target="_blank">
                            <img src="../src/assets/assets-competence/sql.png" alt=""/>
                            <figcaption>SQL</figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://git-scm.com/" target="_blank">
                            <img src="../src/assets/assets-competence/git.png" alt=""/>
                            <figcaption>Git</figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://www.java.com/fr/" target="_blank">
                            <img src="../src/assets/assets-competence/java.png" alt=""/>
                            <figcaption>Java</figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://go.dev/" target="_blank">
                            <img src="../src/assets/assets-competence/Go.png" alt=""/>
                            <figcaption>Golang</figcaption>
                        </a>
                    </figure>
                </div>
            </div>
            <div className="comp_div">
                <h3>Designe</h3>
                <div className="div_img">
                    <figure>
                        <a href="https://www.canva.com/" target="_blank">
                            <img src="../src/assets/assets-competence/canva.png" alt=""/>
                            <figcaption>Canva</figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://fr.wikipedia.org/wiki/Adobe_Photoshop" target="_blank">
                            <img src="../src/assets/photoshop.png" alt=""/>
                            <figcaption>PhotoShop</figcaption>
                        </a>
                    </figure>
                </div>
            </div>
            <div className="comp_div">
                <h3>Langues</h3>
                <div className="div_img">
                    <figure>
                        <a href="https://fr.wikipedia.org/wiki/France" target="_blank">
                            <img src="../src/assets/FR.png" alt=""/>
                            <figcaption>
                                France
                                <br/>
                                <p>Langue Maternellle</p>
                            </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://fr.wikipedia.org/wiki/Anglais" target="_blank">
                            <img src="../src/assets/UK.png" alt=""/>
                            <figcaption>
                                Anglais
                                <br/>
                                <p>Niveau A2 </p>
                            </figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://fr.wikipedia.org/wiki/Espagnol" target="_blank">
                            <img src="../src/assets/ES.png" alt=""/>
                            <figcaption>
                                Espagnol
                                <br/>
                                <p>Niveau A1</p>
                            </figcaption>
                        </a>
                    </figure>
                </div>
            </div>
            <div className="comp_div">
                <h3>Systèmes d'exploitation</h3>
                <div className="div_img">
                    <figure>
                        <a href="https://www.microsoft.com/fr-fr/windows?r=1" target="_blank">
                            <img src="../src/assets/windows.png" alt=""/>
                            <figcaption>Windows</figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://www.linux.org/" target="_blank">
                            <img src="../src/assets/linux.png" alt=""/>
                            <figcaption>Linux</figcaption>
                        </a>
                    </figure>
                    <figure>
                        <a href="https://www.apple.com/fr/ios/ios-17/" target="_blank">
                            <img src="../src/assets/ios.png" alt=""/>
                            <figcaption>IOS</figcaption>
                        </a>
                    </figure>
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
        </section>
    </div>
);

export default Portfolio;