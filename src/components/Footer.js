import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export default () => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                github
                linkedIn
                email
              }
            }
          }
        `
    )
    const {github, linkedIn, email} = data.site.siteMetadata
    return (
        <div id="footer">
            <div className="inner">
                <ul className="icons">
                    <li><a href={`http://github.com/${github}`} target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">Github</span></a></li>
                    <li><a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer" className="icon fa-linkedin-square"><span className="label">Linked In</span></a></li>
                    <li><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    <li><a href="/resume" target="_blank" rel="noopener noreferrer" className="icon fa-file-text-o"><span className="label">View my CV</span></a></li>
                </ul>
            </div>
        </div>
    )
}