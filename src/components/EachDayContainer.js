import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud,faSun,faCloudRain} from '@fortawesome/free-solid-svg-icons'

export default function EachDayContainer(props){
    let weatherImage;

    if (props.description.includes("cloud")){
        weatherImage = faCloud;
    }else if (props.description.includes("clear")){
        weatherImage = faSun;
    }else {
        weatherImage =faCloudRain;
    }

    return (
        <div className="eachComponent">
            <h3>{props.dayName}</h3>
            <p className="dateAndTime">{props.date}, {props.time}</p>
            <p>{props.temp}°C</p>
            {<FontAwesomeIcon icon={weatherImage} />}
            <p>{props.description}</p>
        </div>
    )
}