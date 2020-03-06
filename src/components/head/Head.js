import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Helmet title={`${title} - ${data.site.siteMetadata.title}`} defer={false}>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
  )
}

export default Head
