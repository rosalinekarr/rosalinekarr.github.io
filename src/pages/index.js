import React from "react"
import "../main.css"

export default function Home() {
  return (
    <div className="vcard">
      <div className="details">
        <h1 className="n">
          <span className="given-name">Rosaline</span>{" "}
          <span className="additional-name">Annabelle</span>{" "}
          <span className="family-name">Karr</span>
        </h1>
        <h2 className="category">Software Engineer</h2>
        <a className="email" href="mailto:rose@rosalinekarr.com">
          rose@rosalinekarr.com
        </a>
        <a className="tel" href="tel:+14233561413">
          (423) 356-1413
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
      <img className="photo" src="rose.png" alt="Rose" />
    </div>
  )
}
