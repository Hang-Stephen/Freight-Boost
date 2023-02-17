import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useNavigate} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const OneAirShipment = (props) => {
    const {id} = useParams();
    const [oneAirShipment, setOneAirShipment] = useState({});
    const navigate = useNavigate();
    
    
    const onDeleteHandler = (airShipmentId) => {
        axios.delete(`http://localhost:8000/api/airfreight/${id}`)
        .then (response => {
            removeFromDom(airShipmentId)
            navigate('/airfreight');
        })
        .catch(err => console.log(err))
    }
    const removeFromDom = (airShipmentId) => {
        setOneAirShipment(oneAirShipment.filter(a => a._id !== airShipmentId))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/airfreight/${id}`)
        .then((response) => {
            console.log(response);
            console.log(response.data);
            setOneAirShipment(response.data);
        })
        .catch((err) => console.log(err))
    }, [id])

    return ( 
        <div>
            <Container className = "box">
                <Row className = "justify-content-md-center">
                    <h1>{oneAirShipment.mawb}</h1>
                </Row>

                <Row className = "justify-content-md-center">
                    <label><h3>HAWB: {oneAirShipment.hawb}</h3></label>
                </Row>

                <Row className = "needs-space">
                    <Col><label>Airport of Departure:</label><p>{oneAirShipment.airportOfDeparture}</p></Col>
                    <Col><label>Airport of Arrival:</label><p>{oneAirShipment.airportOfArrival}</p></Col>
                </Row >

                <Row className = "needs-space">
                    <Col><label>ETD:</label><p>{oneAirShipment.etd}</p></Col>
                    <Col><label>ETA:</label><p>{oneAirShipment.eta}</p></Col>
                </Row>

                <Row className = "needs-space">
                    <Col><label>Shipper:</label><p>{oneAirShipment.shipper}</p></Col>
                    <Col><label>Consignee:</label><p>{oneAirShipment.consignee}</p></Col>
                </Row>
                
                <div className = "needs-spaces">
                    <Link to = {'/airfreight/delete'}><Button variant = "danger" onClick = {(e) => {onDeleteHandler(oneAirShipment._id)}}>Delete Shipment</Button></Link>
                    <Link to = {`/airfreight/edit/${id}`}><Button variant = "primary">Edit Shipment</Button></Link>
                </div>
            </Container>
        </div>
    )
}

export default OneAirShipment;