import React from "react"
import '/home/edga/MyHomePage/home-page/src/style.css';



export default function Section(props) {
    return (
        <div className="allSections">
            <div class="table1">
                <h3>{props.title}</h3>
                <div class="tcontent">


                    <a href="https://github.com/EmiraDga" target="_blank">{props.item1}</a>
                    <a href="https://www.freecodecamp.org/" target="_blank">{props.item2}</a>
                    <a href="https://stackoverflow.com/" target="_blank">{props.item3}</a>
                    <a href="https://www.udemy.com/" target="_blank">{props.item4}</a>

                </div>
            </div>
            <div class="table2">
                <div class="tcontent">


                    <a href="https://www.facebook.com/dga.amira" target="_blank">{props.item5}</a>
                    <a href="https://www.instagram.com/emiiradga/" target="_blank">{props.item6}</a>
                    <a href="https://www.linkedin.com/in/emira-dga-ba65781b4/" target="_blank">{props.item7}</a>
                    <a href="https://mail.google.com/mail/u/1/#inbox" target="_blank">{props.item8}</a>

                </div>
            </div>
            <div class="table3">
                <div class="tcontent">


                    <a href="https://www.youtube.com/" target="_blank">{props.item9}</a>
                    <a href="https://www.notion.so" target="_blank">{props.itemA}</a>
                    <a href="https://esprit-tn.com/esponline/online/default.aspx" target="_blank">{props.itemB}</a>
                </div>
            </div>
        </div>
    )
}