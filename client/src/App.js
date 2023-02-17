import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AirDisplayList from './components/AirDisplayList';
import OneAirShipment from './components/OneAirShipment';
import CreateAirShipment from './components/CreateAirShipment';
import UpdateAirShipment from './components/UpdateAirShipment';
import OceanDisplayList from './components/OceanDisplayList';
import CreateOceanShipment from './components/CreateOceanShipment';
import OneOceanShipment from './components/OneOceanShipment';
import UpdateOceanShipment from './components/UpdateOceanShipment';
import AirDelete from './components/AirDelete';
import OceanDelete from './components/OceanDelete';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from './img/flight.png';
import vessel from './img/vessel.png';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App" id = "lifestyle">
    <Navbar bg = "light-blue" expand = "lg">
                    <Container id = "nav-bar-container">
                        <Navbar.Brand href = "/"><h2 className = "logo-name">Freight Boost</h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                        <Navbar.Collapse id= "basic-navbar-nav">
                            <Nav className = "me-auto">
                                <Nav.Link href = "/airfreight"><img src = {icon} className = "airplane" alt = {"icon"}/></Nav.Link>
                                <Nav.Link href = "/oceanfreight"><img src = {vessel} className = "cargoship" alt = {"vessel"}/></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
      <Routes>
            <Route element = {<Home/>} path = "/"/>
            <Route element = {<AirDisplayList/>} path = "/airfreight"/>
            <Route element = {<CreateAirShipment/>} path = "/airfreight/create/new"/>
            <Route element = {<OneAirShipment/>} path = "/airfreight/:id"/>
            <Route element = {<AirDelete/>} path = "/airfreight/delete"/>
            <Route element = {<UpdateAirShipment/>} path = "/airfreight/edit/:id"/>
            <Route element = {<OceanDisplayList/>} path = "/oceanfreight"/>
            <Route element = {<CreateOceanShipment/>} path = "/oceanfreight/new"/>
            <Route element = {<OneOceanShipment/>} path = "/oceanfreight/:id"/>
            <Route element = {<OceanDelete/>} path = "/oceanfreight/delete"/>
            <Route element = {<UpdateOceanShipment/>} path = "/oceanfreight/edit/:id"/>
      </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;
