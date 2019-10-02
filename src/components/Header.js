import React from 'react'
import Footer from './Footer'
import { useStaticQuery, graphql } from "gatsby"
export default () => {
    const data = useStaticQuery(
        graphql`
          query {
            allAttributesJson {
              edges {
                node {
                  title
                }
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
                    {data.allAttributesJson.edges.map((edge) => (<><br/>{edge.node.title}</>))}
                </h1>
            </div>
            <Footer />
        </header>
    )
}