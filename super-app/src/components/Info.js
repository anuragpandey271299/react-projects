import React, { useEffect, useState } from "react";
import './Info.css'
import dp from './images/dp.png'
import { useNavigate } from "react-router-dom";

export default function Info() {
    const storedData = localStorage.getItem('userData');
    const userData = JSON.parse(storedData);
    
    const storedID = localStorage.getItem('imageID');
    const imageID = JSON.parse(storedID);

    const date = new Date();
    const date1 = date.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2});;
    const month1 = date.getMonth().toLocaleString('en-US', { minimumIntegerDigits: 2});;
    const year1 = date.getFullYear();
    const hrs = date.getHours().toLocaleString('en-US', { minimumIntegerDigits: 2});
    const min = date.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2});

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const apiKey = '1fd3ef2ac027426e9ce7bf1922e4c2d5';
        const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-10-01&sortBy=publishedAt&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setNewsData(data.articles[0]);
            })
    }, []);


    const [weatherData, setWeatherData] = useState(null);
    const apiKey = 'cee3c3e91bd54e6a85e201717230111';
    const city = 'Mumbai';

    useEffect(() => {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data);
            })
    }, []);

    const navigate = useNavigate();
    const Next=()=>{
        navigate('/movies')
    }
    

    return (
        <div className="wrapperInfo">
            <div className="leftSide">
            <div className="card">
                <img src={dp} alt="User Profile" />
                <div className="details">
                    <div className="userData">
                        <h3>{userData.name}</h3>
                        <h2>{userData.email}</h2>
                        <h1>{userData.username}</h1>
                    </div>
                    <div className="genres">
                        {imageID.map(id => (
                            <button>{id}</button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="dateTime">
                <h1>{date1.toString()}/{month1.toString()}/{year1.toString()}</h1>
                <h1>{hrs.toString()}:{min.toString()}</h1>
            </div>
            <div className="weather-info">
            {weatherData ? (
                <div>
                    <h2>Weather in {weatherData.location.name}, {weatherData.location.country}</h2>
                    <p>Temperature: {weatherData.current.temp_c}°C</p>
                    <p>Condition: {weatherData.current.condition.text}</p>
                    <p>Humidity: {weatherData.current.humidity}%</p>
                    <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
            </div>
            <div className="newsData">
                    {newsData.urlToImage?(<img src={newsData.urlToImage}/>):(<div className="no-image">No Image Available</div>)}
                    <h3>{newsData.title}</h3>
                    <p>{newsData.description}</p>
                    <a href={newsData.url} target="_blank">Read more</a><br/>
                    <button onClick={Next}>Next</button>
            </div>
        </div>
    );
}
