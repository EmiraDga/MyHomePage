import React from "react"
import Search from "./search";
import Section from "./sections";
import '/home/edga/MyHomePage/home-page/src/style.css';

export default function Main(props) {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours >= 4 && hours <= 11) {
    timeOfDay = "morning"
  }
  else if (hours >= 12 && hours <= 18) {
    timeOfDay = "afternoon"
  }
  else {
    timeOfDay = "night"
  }


  return (
    <div className="main-class">
      <h3 id="greeting">Good {timeOfDay} {props.name}!</h3>
      <Search />

      <div class="container">
       <Section
       title="Dev"
       item1="Github"
       item2="FreeCodeCamp"
       item3="Stackoverflow"
       item4="Udemy"/>
       

<Section
       title="Social Media"
       item1="Facebook"
       item2="Instagram"
       item3="LinkedIn"
       item4="Mail"
       />
<Section
       title="General"
       item1="Youtube"
       item2="Notion.io"
       item3="Esprit"
       />

      </div>
    </div>

  )
}