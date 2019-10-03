import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

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
            {repo ? <img src={require(`../assets/images/projects/${edge.node.image}`)} className="project-left" /> : <div className="project-left"><Skeleton width={200} height={200} /></div>}
            <div className="project-right">
                <h3>{title}</h3>
                <div className="badges">
                    {languages ? languages.map((language) => (<span className="badge">{language}</span>)) : <Skeleton width={600} height={50} />}
                </div>
                <p>
                    {repo ? repo.description : <Skeleton width={600} height={150} />}
                </p>
                <div className="project-links">
                    <a href={`https://github.com/${github}`} alt="GitHub Repository" target="_blank" rel="noopener noreferrer">
                        GitHub Repo</a>
                    <a href="!#" alt="Documentation">
                        Documentation
                    </a>
                </div>
            </div>
        </div>
    )
}