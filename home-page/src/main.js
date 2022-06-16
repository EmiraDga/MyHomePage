import React from "react"
import ReactDOM from 'react-dom'
import './style.css';
export default function Main(props){
return(
    <div className="main-class">
<h3 id="search">Welcome {props.name}!</h3>
<div class="search-box">
    <button class="btn-search"><i class="fa-search"></i></button>
    <input type="text" class="input-search" placeholder="Type to Search..."></input>
  </div>
    </div>
)
}