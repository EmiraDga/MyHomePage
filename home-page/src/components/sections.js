import React from "react"
import '/home/edga/MyHomePage/home-page/src/style.css';



export default function Section(props) {
    return (
        <div class="table1">
        <h3>{props.title}</h3>
          <div class="tcontent">


            <a href="https://github.com/EmiraDga" target="_blank">{props.item1}</a>
            <a href="https://www.freecodecamp.org/" target="_blank">{props.item2}</a>
            <a href="https://stackoverflow.com/" target="_blank">{props.item3}</a>
            <a href="https://www.udemy.com/" target="_blank">{props.item4}</a>

          </div>
      </div>

     
    )
}