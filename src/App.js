import React, {useEffect, useState} from "react"
import EachDayContainer from "./components/EachDayContainer"
import { getDayNameByDate, getMonthNameByDate, getTimeByDate } from "./helpers/todayDate"

export default function App() {
    const [weather,setWeather] = useState([]);
    const [startDayOffset,setStartDayOffset] = useState(0)

    async function getData() {
        const res = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,current,minutely,alerts&units=metric&appid=f45fec4cf83360ab461fa13eb78e4d39");
        const data = await res.json();
        
        setWeather(data.daily)
    }

    useEffect(() => {
        getData()
    },[])
    
    function goToNextDay() {
        setStartDayOffset(prevState => prevState+1)
    }

    const MainElement = weather.slice(startDayOffset,startDayOffset+5).map((eachWeather,indexEachWeather) => {
        const date = new Date();
        date.setDate(date.getDate() + indexEachWeather + startDayOffset);

        return (
            <EachDayContainer 
                key={indexEachWeather}
                temp = {eachWeather.temp.day}
                description = {eachWeather.weather[0].description}
                dayName = {getDayNameByDate(date)}
                date={getMonthNameByDate(date) + ' ' + (date.getDate())}
                time={getTimeByDate(date)}
            />
        )
    })

    return (
        <div className="container_flex">
            <header className="headerMain">
                <h1>5-Days forecast.</h1>
            </header>
            <span className="locationTitle">NewYork,US</span>
            <div className="containerMain">
                { MainElement }
            </div>
            <div>
                <button onClick={() => setStartDayOffset(prev => prev -1)} disabled={startDayOffset === 0}>Prev</button>
                <button onClick={goToNextDay} disabled={startDayOffset>2}>Next</button>
            </div>  
        </div>
    )
}