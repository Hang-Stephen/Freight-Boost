import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const CreateOceanShipment = (props) => {
    const [mbl, setMbl] = useState("");
    const [hbl, setHbl] = useState("");
    const [consignee, setConsignee] = useState("");
    const [shipper, setShipper] = useState("");
    const [portOfLoading, setPortOfLoading] = useState("");
    const [portOfDischarge, setPortOfDischarge] = useState("");
    const [etd, setEtd] = useState("");
    const [eta, setEta] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/oceanfreight/new", {
            mbl,
            hbl,
            consignee,
            shipper,
            portOfLoading,
            portOfDischarge,
            etd,
            eta
        })
        .then(response => {
            console.log(response);
            console.log(response.data);
            navigate('/oceanfreight');
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
            <div class = "modal show" style = {{ display: 'block', position: 'initial '}}>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Errors</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className = "error-body" id = "growth">
                            {errors.map((err, index) => <p class = "error" key = {index}>{err}</p>)}
                        </Modal.Body>   
                    </Modal.Dialog>
            </div>
            <Form className = "style" onSubmit = {onSubmitHandler}>
                <Row className = "mb-3">
                    <Form.Group as = {Col} controlId = "formGridMbl">
                        <Form.Label>MB/L</Form.Label>
                        <Form.Control type = "text" onChange = {(e) => setMbl(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId = "formGridHbl">
                        <Form.Label>HB/L</Form.Label>
                        <Form.Control type = "text" onChange = {(e) => setHbl(e.target.value)}/>
                    </Form.Group>    
                </Row>

                <Row className = "mb-3">
                    <Form.Group as = {Col} controlId = "formGridPortofLoading">
                        <Form.Label>Port of Loading</Form.Label>
                        <Form.Control type = "text" onChange = {(e) => setPortOfLoading(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId = "formGridPortOfDischarge">
                        <Form.Label>Port of Discharge</Form.Label>
                        <Form.Control type = "text" onChange = {(e) => setPortOfDischarge(e.target.value)}/>
                    </Form.Group>
                </Row >

                <Row className = "mb-3">
                    <Form.Group as = {Col} controlId = "formGridEtd">
                        <Form.Label>ETD</Form.Label>
                        <Form.Control type = "date" onChange = {(e) => setEtd(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId = "formGridEta">
                        <Form.Label>ETA</Form.Label>
                        <Form.Control type = "date" onChange = {(e) => setEta(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className = "mb-3">
                    <Form.Group as = {Col} controlId = "formGridShipper">
                        <Form.Label>Shipper</Form.Label>
                        <Form.Control type = "text" onChange = {(e) => setShipper(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId = "formGridConsignee">
                        <Form.Label>Consignee</Form.Label>
                        <Form.Control type = "text" onChange = {(e) => setConsignee(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Button type = "submit" variant = "primary">Add Shipment</Button>
            </Form>
        </div>
    )
}

export default CreateOceanShipment;