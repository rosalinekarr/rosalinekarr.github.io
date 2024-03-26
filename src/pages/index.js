import React from "react"
import { Helmet } from "react-helmet"
import "../main.css"

export default function Home() {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rose Karr</title>
        <link rel="canonical" href="https://www.rosalinekarr.com" />
      </Helmet>
      <div className="vcard">
        <img className="photo" src="rose.jpg" alt="Rose" />
        <div className="details">
          <h1 className="n">
            <span className="given-name">Rosaline</span>{" "}
            <span className="family-name">Karr</span>
          </h1>
          <h2 className="category">Software Engineer</h2>
          <a className="email" href="mailto:rose@rosalinekarr.com">
            Email
          </a>
          <a href="/talks">
            Talks
          </a>
          <a href="https://github.com/rosalinekarr">
            GitHub
          </a>
          <a href="https://twitter.com/rosalinekarr">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/rosalinekarr/">
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  )
}
