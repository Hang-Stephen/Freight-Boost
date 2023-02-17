import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const UpdateAirShipment = (props) => {
    const {id} = useParams();
    const [mawb, setMawb] = useState("");
    const [hawb, setHawb] = useState("");
    const [airportOfDeparture, setAirportOfDeparture] = useState("");
    const [airportOfArrival, setAirportOfArrival] = useState("");
    const [etd, setEtd] = useState("");
    const [eta, setEta] = useState("");
    const [consignee, setConsignee] = useState("");
    const [shipper, setShipper] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/airfreight/' + id)
        .then(response => {
            setMawb(response.data.mawb);
            setHawb(response.data.hawb);
            setAirportOfDeparture(response.data.airportOfDeparture);
            setAirportOfArrival(response.data.airportOfArrival);
            setEtd(response.data.etd);
            setEta(response.data.eta);
            setConsignee(response.data.consignee);
            setShipper(response.data.shipper);
        })
        .catch(err => console.log(err))
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/airfreight/edit/${id}` , {
            mawb,
            hawb,
            airportOfDeparture,
            airportOfArrival,
            etd,
            eta,
            consignee,
            shipper
        })
        .then((response) => {
            console.log(response);
            console.log(response.data);
            navigate('/airfreight');
        })
        .catch((err) => {
            console.log(err)
            const errorResponse = err.response.data.error.errors;
            const errorArray = []

            for (const key of Object.keys(errorResponse)) {
                errorArray.push(errorResponse[key].message)
            }

            setErrors(errorArray);
        })

    }

    return (
        <div>
            <div className = "modal show" style = {{ display: 'block', position: 'initial '}}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Errors</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className = "error-body" id = "growth">
                        {errors.map((err, index) => <p className = "error" key = {index}>{err}</p>)}
                    </Modal.Body>
                </Modal.Dialog>
            </div>
            <Form className = "style" onSubmit = {onSubmitHandler}>
                <Row className = "mb-3">
                    <Form.Group as = {Col} controlId = "formGridMawb">
                        <Form.Label>MAWB</Form.Label>
                        <Form.Control type = "text" value = {mawb} onChange = {(e) => setMawb(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId = "formGridHawb">
                        <Form.Label>HAWB</Form.Label>
                        <Form.Control type = "text" value = {hawb} onChange = {(e) => setHawb(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className = "mb-3">
                    <Form.Group as = {Col} controlId = "formGridAirportOfDeparture">
                        <Form.Label>Airport of Departure</Form.Label>
                        <Form.Control type = "text" value = {airportOfDeparture} onChange = {(e) => setAirportOfDeparture(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId = "formGridAirportOfArrival">
                        <Form.Label>Airport of Arrival</Form.Label>
                        <Form.Control type = "text" value = {airportOfArrival} onChange = {(e) => setAirportOfArrival(e.target.value)}/>
                    </Form.Group>                    
                </Row>

                <Row className = "mb-3">
                    <Form.Group as = {Col} controlId = "formGridEtd">
                        <Form.Label>ETD</Form.Label>
                        <Form.Control value = {etd} type = "date" onChange = {(e) => setEtd(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId = "formGridEta">
                        <Form.Label>ETA</Form.Label>
                        <Form.Control type = "date" value = {eta} onChange = {(e) => setEta(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className = "mb-3">
                    <Form.Group as = {Col} controlId = "formGridShipper">
                        <Form.Label>Shipper</Form.Label>
                        <Form.Control type = "text" value = {shipper} onChange = {(e) => setShipper(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId = "formGridConsignee">
                        <Form.Label>Consignee</Form.Label>
                        <Form.Control type = "text" value = {consignee} onChange = {(e) => setConsignee(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Button type = "submit" variant = "primary">Edit Shipment</Button>
            </Form>
        </div>
    )
}

export default UpdateAirShipment;