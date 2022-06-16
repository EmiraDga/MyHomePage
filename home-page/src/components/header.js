import React from "react"
import ReactDOM from 'react-dom'
import '/home/edga/Documents/MyHomePage/home-page/src/style.css';
export default function Header(){

return(

<nav class="navbar navbar-expand-lg  navbar-dark bg-dark">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Weather</a>
      </li>
    </ul>
  </div>
</nav>


)


}
