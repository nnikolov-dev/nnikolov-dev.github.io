import React, {useState, useEffect} from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown';

function Resume() {
    const [markdown, setMarkdown] = useState(null)

    async function fetchMarkdown() {
        await fetch('/static/cv/README.md').then(res => res.text()).then(text => setMarkdown(text));
        console.log(markdown)
    }

    useEffect(() => {
        fetchMarkdown()
    })

    const siteTitle = "nnikolov-dev > CV"
    const siteDescription = "The personal portfolio of Nikita Nikolov"

    return (
        <Layout>
            <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
            </Helmet>

            <div id="main">

                <section id="one">
                    <ReactMarkdown source={markdown} />
                </section>

            </div>

        </Layout>
    )

}

export default Resume