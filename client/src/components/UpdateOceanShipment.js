import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const UpdateOceanShipment = (props) => {
    const {id} = useParams();
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

    useEffect(() => {
        axios.get("http://localhost:8000/api/oceanfreight/" + id)
        .then(response => {
            setMbl(response.data.mbl);
            setHbl(response.data.hbl);
            setPortOfLoading(response.data.portOfLoading);
            setPortOfDischarge(response.data.portOfDischarge);
            setEtd(response.data.etd);
            setEta(response.data.eta);
            setConsignee(response.data.consignee);
            setShipper(response.data.shipper);
        })
        .catch(err => console.log(err))
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/oceanfreight/edit/${id}` , {
            mbl,
            hbl,
            portOfLoading,
            portOfDischarge,
            etd,
            eta,
            consignee,
            shipper
        })
        .then((response) => {
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
            <div className = "modal show" style = {{ display: 'block', position: 'initial '}}>
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
                        <Form.Control type = "text" value = {mbl} onChange = {(e) => setMbl(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId = "formGridHbl">
                        <Form.Label>HB/L</Form.Label>
                        <Form.Control type = "text" value = {hbl} onChange = {(e) => setHbl(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className = "mb-3">
                    <Form.Group as = {Col} controlId = "formGridPortOfLoading">
                        <Form.Label>Port of Loading</Form.Label>
                        <Form.Control type = "text" value = {portOfLoading} onChange = {(e) => setPortOfLoading(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId = "formGridPortOfDischarge">
                        <Form.Label>Port of Discharge</Form.Label>
                        <Form.Control type = "text" value = {portOfDischarge} onChange = {(e) => setPortOfDischarge(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className = "mb-3">
                    <Form.Group as = {Col} controlId = "formGridEtd">
                        <Form.Label>ETD</Form.Label>
                        <Form.Control type = "date" value = {etd} onChange = {(e) => setEtd(e.target.value)}/>
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

export default UpdateOceanShipment;