// portfolioApp/src/Portfolio.tsx
import React from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio">
            <header>
                <h1>Théo Chauvière</h1>
                <p>Développeur et passionné de vélo</p>
            </header>
            <section className="projects">
                <h2>Projets</h2>
                <div className="project">
                    <h3>Projet 1</h3>
                    <p>Description du projet 1</p>
                </div>
                <div className="project">
                    <h3>Projet 2</h3>
                    <p>Description du projet 2</p>
                </div>
            </section>
            <footer>
                <p>Contact: theo@example.com</p>
                <p>Linkedind</p>
            </footer>
        </div>
    );
};

export default Portfolio;