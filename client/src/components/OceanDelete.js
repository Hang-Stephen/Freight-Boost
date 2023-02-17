import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const OceanDelete = (props) => {

    return (
        <div>
            <Container>
                <Row className = "needs-space">
                    <h2>You have deleted the ocean shipment</h2>
                </Row>
                
                <Row className = "needs-space">
                    <Link to = {'/oceanfreight'}><Button variant = "primary">Return to BOL List</Button></Link>
                </Row>
            </Container>
        </div>
    )
}

export default OceanDelete;