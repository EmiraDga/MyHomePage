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
      <div className="greet">
      <h3 id="greeting">Good {timeOfDay} {props.name}!</h3>
      <Search />
      </div>

      <div class="container">
       <Section
       title="Dev"
       item1="Github"
       item2="FreeCodeCamp"
       item3="Stackoverflow"
       item4="Udemy"/>
       

<Section
       title="Social Media"
       item5="Facebook"
       item6="Instagram"
       item7="LinkedIn"
       item8="Mail"
       />
<Section
       title="General"
       item9="Youtube"
       itemA="Notion.io"
       itemB="Esprit"
       />

      </div>
    </div>

  )
}