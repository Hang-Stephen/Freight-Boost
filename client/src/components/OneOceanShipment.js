import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OneOceanShipment = (props) => {
    const {id} = useParams();
    const [oneOceanShipment, setOneOceanShipment] = useState({});
    const navigate = useNavigate();

    const onDeleteHandler = (oceanShipmentId) => {
        axios.delete(`http://localhost:8000/api/oceanfreight/${id}`)
        .then (response => {
            removeFromDom(oceanShipmentId)
            navigate('/oceanfreight');
        })
        .catch(err => console.log(err))
    }
    const removeFromDom = (oceanShipmentId) => {
        setOneOceanShipment(oneOceanShipment.filter(o => o._id !== oceanShipmentId))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oceanfreight/${id}`)
        .then((response) => {
            console.log(response);
            console.log(response.data);
            setOneOceanShipment(response.data);
        })
        .catch((err) => console.log(err))
    }, [id])

    return (
        <div>
            <Container>
                <Row className = "justify-content-md-center">
                    <h1>{oneOceanShipment.mbl}</h1>
                </Row>
        
                <Row className = "justify-content-md-center">
                    <label><h3>HB/L: {oneOceanShipment.hbl}</h3></label>
                </Row>

                <Row className = "needs-space">
                    <Col><label>Port of Loading:</label><p>{oneOceanShipment.portOfLoading}</p></Col>
                    <Col><label>Port of Discharge:</label><p>{oneOceanShipment.portOfDischarge}</p></Col>
                </Row>

                <Row className = "needs-space">
                    <Col><label>ETD:</label><p>{oneOceanShipment.etd}</p></Col>
                    <Col><label>ETA:</label><p>{oneOceanShipment.eta}</p></Col>
                </Row>

                <Row className = "needs-space">
                    <Col><label>Shipper:</label><p>{oneOceanShipment.shipper}</p></Col>
                    <Col><label>Consignee:</label><p>{oneOceanShipment.consignee}</p></Col>
                    
                </Row>

                <div>
                    <Link to = {'/oceanfreight/delete'}><Button variant = "danger" onClick = {(e) => {onDeleteHandler(oneOceanShipment._id)}}>Delete Shipment</Button></Link>
                    <Link to = {`/oceanfreight/edit/${id}`}><Button variant = "primary">Edit Shipment</Button></Link>
                </div>
            </Container>
        </div>
    )
}

export default OneOceanShipment;