import React from "react"
import '/home/edga/MyHomePage/home-page/src/style.css';



export default function Section(props) {
    return (
        /*<div className="card">
            <h2 className="card-header">
                {props.title}
            </h2>
            <div className="card-body">
                <a href="#" id="first">{props.FirstLink}</a>
                <a href="#" id="second">{props.SecondLink}</a>
                <a href="#" id="third">{props.ThirdLink}</a>
                <a href="#" id="fourth">{props.FourthLink}</a>
          </div>
        </div>*/

        <div className="linksbox">
					<h3 className="title">   {props.title} </h3>
                    <a href="#" id="first">{props.FirstLink}</a>
                <a href="#" id="second">{props.SecondLink}</a>
                <a href="#" id="third">{props.ThirdLink}</a>
                <a href="#" id="fourth">{props.FourthLink}</a>
		</div>
     
    )
}