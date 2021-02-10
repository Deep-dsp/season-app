import React from "react";
import './seasonDisplay.css';

const seasonConfig = {
    summer:{
        text: "Let's hit the beach",
        iconName: "sun",
        color: "yellow"
    },
    winter:{
        text: "Burr!! It's chilly",
        iconName: "snowflake",
        color: "skyblue"
    }
}

function getSeason(lat, month){

    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat >= 0 ? 'winter' : 'summer';
    }
}

function SeasonDisplay(props){

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName, color} = seasonConfig[season]; // {text, iconName}
    return(
        <div className={`SeasonDisplay ${season}`}>
            <i className={`icon-left massive ${iconName} ${color} icon`}></i>
            <h1 className= "textPos">{ text }</h1>
            <i className={`icon-right massive ${iconName} ${color} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;