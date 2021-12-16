import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/project-details.module.css"
import Img from "gatsby-image"
const projectDetails = ({ data }) => {
    const { html } = data.markdownRemark
    const { fluid } = data.markdownRemark.frontmatter.featuredImg.childImageSharp
    const { title, stack } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    <Img fluid={fluid} />
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectDetails($slug: String) { 
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        stack
        featuredImg { 
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
        }
      }
    }
  }
  
`
export default projectDetails

