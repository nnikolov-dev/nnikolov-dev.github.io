import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <div id="main">
            	<section>
                    <h2>{post.frontmatter.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </section>
            </div>
        </Layout>
    )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`