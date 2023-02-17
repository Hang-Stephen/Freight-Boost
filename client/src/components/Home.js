import React from 'react';
import {Link} from 'react-router-dom';
const Home = (props) => {
    return ( 
        <div>
            <div>
                <h1 className = "header">Welcome to Freight Boost!</h1>
                <h4>Please select the mode of transport</h4>
            </div>
            <div className = "home-icons">
                <Link to = {'/airfreight'}><img src = "img/airfreight.png" className = "icon" alt = "airfreight icon"/></Link>
                <Link to = {'/oceanfreight'}><img src = "img/oceanfreight.png" className = "icon" alt = "oceanfreight icon"/></Link>
            </div>
        </div>
    )
}

export default Home;