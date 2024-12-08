import React from "react";
import "./place.css";
const Place = (props) =>{
    console.log(props.placeName);
return(
    <>
    <div className="main_div">
        <div className="left_div">
            <h2 id="placename">{props.placeName}</h2>
            <h4 id="cityname">{props.city}</h4>
            <p id="details">{props.details}</p>
        </div>
        <div className="right_div">
            <a href={props.mapLink}>
            <img src={props.imgSrc} alt={props.alternate}/>
            </a>
        </div>
    </div>
    </>
)
}
export default Place;