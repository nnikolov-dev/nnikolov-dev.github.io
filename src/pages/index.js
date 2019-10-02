import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import GitHub from '../components/GitHub'
import rmfLogo from '../assets/images/projects/react-materialize-forms.png'

export default ({data}) => (
    <Layout>

        <div id="main">

            <section id="one">
                <h2>Open-Sourced</h2>
                <div className="projects">
                    <div className="projects-item">
                        <img src={rmfLogo} className="project-left" />
                        <div className="project-right">
                            <h3>React-Materialize Forms</h3>
                            <p>
                                A library of React components that provide form elements for web apps that use Materialize
                            </p>
                            <div className="project-links">
                                <a href="!#" alt="Documentation">GitHub Repo</a> <a href="!#" alt="Documentation">Documentation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="two">
                <h2><i className="icon fa-github"></i> Activity</h2>
                <GitHub />
            </section>

            <section id="three">
                <h2>Get In Touch</h2>
                <div className="row">
                    <div className="8u 12u$(xsmall)">
                        <a href="/resume" className="button">View my CV</a>
                    </div>
                    <div className="4u 12u$(xsmall)">
                        <ul className="labeled-icons">
                            <li>
                                <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                {data.site.siteMetadata.email}<br />
                                {data.site.siteMetadata.contact.reverse().map((contact) => (<>{contact}<br/></>))}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>

    </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        email
        contact
      }
    }
  }
`