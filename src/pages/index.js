import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import GitHub from '../components/GitHub'
import Project from '../components/Project'


export default ({ data }) => (
    <Layout>

        <div id="main">
            <section id="one">
                <h2>Open-Sourced</h2>
                <div className="projects">
                    {data.allProjectsJson.edges.map((edge) => (<Project edge={edge} />))}
                </div>
            </section>

            <section id="two">
                <h2><i className="icon fa-github"></i> Activity</h2>
                <GitHub account={data.allDataJson.edges[0].node.github} />
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
                                {data.allDataJson.edges[0].node.email}<br />
                                {data.allDataJson.edges[0].node.contact.reverse().map((contact) => (<>{contact}<br /></>))}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>

    </Layout>
)

export const data = graphql`
  {
    allProjectsJson {
      edges {
        node {
          title
          github
          image
        }
      }
    }
    allDataJson {
      edges {
        node {
          github
          email
          contact
          linkedIn
        }
      }
    }
  }
`