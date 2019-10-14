import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default ({data}) => (
    <Layout>
        <div id="main">
            <section>
                <h2>Resume</h2>
                <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
            </section>
        </div>
    </Layout>
)

export const query = graphql`
{
  markdownRemark(frontmatter: {type: {eq: "cv"}}) {
    html
    frontmatter {
      title
    }
  }
}
`