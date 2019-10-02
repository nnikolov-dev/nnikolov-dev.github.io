import React from 'react'

export default (project, image) => (
    <div className="projects-item">
        <img src={image} className="project-left" />
        <div className="project-right">
            <h3>{project.title}</h3>
            <p>
                A library of React components that provide form elements for web apps that use Materialize
            </p>
            <div className="project-links">
                <a href={`https://github.com/${project.github}`} alt="GitHub Repository" target="_blank" rel="noopener noreferrer">
                    GitHub Repo</a>
                <a href="!#" alt="Documentation">
                    Documentation
                </a>
            </div>
        </div>
    </div>                        
)