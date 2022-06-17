import React from "react"
import Search from "./search";
import Section from "./sections";
import '/home/edga/MyHomePage/home-page/src/style.css';

export default function Main(props){
const date = new Date()
const hours = date.getHours()
let timeOfDay

if(hours >=4 && hours <= 11) {
  timeOfDay="morning"
}
else if (hours >=12 && hours <= 18){
timeOfDay="afternoon"
}
else{
  timeOfDay = "night"
}


  return(
    <div className="main-class">
<h3 id="greeting">Good {timeOfDay} {props.name}!</h3>
<Search />
<div className="AllSections">
<div className="a">
<Section
title="Dev"
FirstLink="Github"
SecondLink="Stackoverflow"
ThirdLink='FreeCodeCamp'
/>
</div>
<div className="b">
<Section
title="Social Media"
FirstLink="Facebook"
SecondLink="Instagram"
ThirdLink='LinkedIn'
/>
</div>
<div className="c">
<Section
title="Entertainement"
FirstLink="Youtube"
SecondLink="Notion.io"
/>
</div>

</div>
    </div>

)
}