import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default ({ edge }) => {
    const { title, github } = edge.node
    const [repo, setRepo] = useState(null)
    const [languages, setLanguages] = useState(null)
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const repo = await axios(`https://api.github.com/repos/${github}`)
        const languages = await axios(`https://api.github.com/repos/${github}/languages`)
        setRepo(repo.data)
        setLanguages(Object.keys(languages.data))
    }

    return (
        <div className="projects-item">
            <img src={require(`../assets/images/projects/${edge.node.image}`)} className="project-left" />
            <div className="project-right">
                <h3>{title}</h3>
                <div className="badges">
                    {languages ? languages.map((language) => (<span className="badge">{language}</span>)) : (<span>...</span>)}
                </div>
                <p>
                    {repo ? repo.description : (<span>...</span>)}
                </p>
                <div className="project-links">
                    <a href={`https://github.com/${github}`} alt="GitHub Repository" target="_blank" rel="noopener noreferrer">
                        GitHub Repo
                    </a>
                    <a href="!#" alt="Documentation">
                        Documentation
                    </a>
                </div>
            </div>
        </div>
    )
}