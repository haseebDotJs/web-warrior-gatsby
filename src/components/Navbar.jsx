import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
const Navbar = () => {

    const data = useStaticQuery(graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
        }
  `)

    const { title } = data.site.siteMetadata
    console.log("data in compo", data)
    return (
        <nav>
            <h1>{title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar
