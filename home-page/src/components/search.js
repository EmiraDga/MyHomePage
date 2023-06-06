import React from "react"
import "../style.css";;

export default function Search(){
    return(
<div class="search-box">
    <button class="btn-search" ><i class="fa-search"></i></button>
    <input type="text" class="input-search" placeholder="Type to Search..."></input>
</div>
    )
}