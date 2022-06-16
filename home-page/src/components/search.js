import React from "react"
import '/home/edga/Documents/MyHomePage/home-page/src/style.css';

export default function Search(){
    return(
<div class="search-box">
    <button class="btn-search"><i class="fa-search"></i></button>
    <input type="text" class="input-search" placeholder="Type to Search..."></input>
</div>
    )
}