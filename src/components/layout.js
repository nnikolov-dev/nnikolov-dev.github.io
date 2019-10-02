import React from 'react'
import '../assets/scss/main.scss'
import Header from './Header'
import Helmet from 'react-helmet'

import { useStaticQuery, graphql } from "gatsby"
export default ({ children }) => {
    
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
          }
        `
    )

    return (
        <>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <meta name="description" content={data.site.siteMetadata.description} />
                <meta name="author" content={data.site.siteMetadata.author} />
            </Helmet>
            <Header />
            {children}
        </>
    )

}
