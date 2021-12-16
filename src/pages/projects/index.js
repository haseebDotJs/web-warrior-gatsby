import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/projects.module.css"
import Img from "gatsby-image"

const Portfolio = ({ data }) => {
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've Created</h3>
                <div className={styles.projects}>
                    {projects.map((project, index) => {
                        console.log("src", project.frontmatter.thumb)
                        return (
                            <Link Link to={`/projects/${project.frontmatter.slug}`} key={project.id} >
                                <div>
                                    <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} alt={project.frontmatter.title} placeholder="blurred" />
                                    <h3>{project.frontmatter.title}</h3>
                                    <p>{project.frontmatter.stack}</p>
                                </div>
                            </Link>
                        )
                    }
                    )}
                </div>
                <p>Looking for me? Contact at {contact}</p>
            </div>
        </Layout >
    )
}


// export page query

export const query = graphql`
query PageQuery {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          html
          frontmatter {
            slug
            stack
            title
            date
            thumb {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          id
        }
    }
    contact: site {
        siteMetadata {
          contact
        }
      }
  }
`
export default Portfolio
