import React from "react"
import * as homeStyles from "./home.module.css"

export default function Home() {
  return (
    <div class={`vcard ${homeStyles.vcard}`}>
      <img class={`photo ${homeStyles.photo}`} src="rose.png" alt="Rose" />
      <div class={homeStyles.details}>
        <h1 class="n">
          <span class="given-name">Rosaline</span>{" "}
          <span class="additional-name">Annabelle</span>{" "}
          <span class="family-name">Karr</span>
        </h1>
        <h2 class="category">Software Engineer</h2>
        <a
          class={`email ${homeStyles.link}`}
          href="mailto:rose@rosalinekarr.com"
        >
          rose@rosalinekarr.com
        </a>
        <a class={`tel ${homeStyles.link}`} href="tel:+14233561413">
          (423) 356-1413
        </a>
        <a class={homeStyles.link} href="https://github.com/rosalinekarr">
          GitHub
        </a>
        <a class={homeStyles.link} href="https://twitter.com/rosalinekarr">
          Twitter
        </a>
        <a
          class={homeStyles.link}
          href="https://www.linkedin.com/in/rosalinekarr/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}
