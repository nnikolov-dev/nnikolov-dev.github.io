import React from 'react'
import Footer from './Footer'
import { useStaticQuery, graphql } from "gatsby"
export default () => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                attributes
              }
            }
          }
        `
    )
    return (
        <header id="header">
            <div className="inner">
                <h1>
                    <strong>nnikolov-dev</strong>
                    {data.site.siteMetadata.attributes.reverse().map((attribute) => (<><br/>{attribute}</>))}
                </h1>
            </div>
            <Footer />
        </header>
    )
}