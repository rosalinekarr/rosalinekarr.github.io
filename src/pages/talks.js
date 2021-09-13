import React from "react"
import "../main.css"

export default function Talks() {
  return (
    <main className="talks">
      <a className="talk" href="/talks/agile_on_the_edge.pdf">
        <img className="talk-preview" src="/talks/agile_on_the_edge_preview.png" alt="Agile on the Edge: Building Projects with Cutting Edge Technology Using Agile Methodology" />
        Agile on the Edge
      </a>
      <a className="talk" href="/talks/cryptojacking.pdf" alt="Cryptojacking: How to Go to Prison with JavaScript">
        <img className="talk-preview" src="/talks/cryptojacking_preview.png" />
        Cryptojacking
      </a>
      <a className="talk" href="/talks/cryptojacking_2.pdf" alt="Cryptojacking 2: A Follow Up to Cryptojacking">
        <img className="talk-preview" src="/talks/cryptojacking_2_preview.png" />
        Cryptojacking 2
      </a>
      <a className="talk" href="/talks/react_hooks.pdf" alt="Introduction to React Hooks">
        <img className="talk-preview" src="/talks/react_hooks_preview.png" />
        React Hooks
      </a>
      <a className="talk" href="/talks/texting_with_javascript.pdf" alt="txting w js">
        <img className="talk-preview" src="/talks/texting_with_javascript_preview.png" />
        Texting with Javascript
      </a>
    </main>
  )
}
