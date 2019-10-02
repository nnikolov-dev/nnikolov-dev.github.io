import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import GitHub from '../components/GitHub'

// Assets
import rmfLogo from '../assets/images/projects/react-materialize-forms.png'


class HomeIndex extends React.Component {

    render() {
        const siteTitle = "nnikolov-dev"
        const siteDescription = "The personal portfolio of Nikita Nikolov"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <h2>Open-Sourced</h2>
                        <div className="projects">
                            <div className="projects-item">
                                <div className="project-left">
                                    <img src={rmfLogo} />
                                    Github
                                </div>
                                <div className="project-right">
                                    <h3>React-Materialize Forms</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
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
                                        nn00317@surrey.ac.uk<br />
                                        University of Surrey<br />
                                        United Kingdom
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex