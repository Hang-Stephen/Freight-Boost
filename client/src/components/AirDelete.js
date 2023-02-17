import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const AirDelete = (props) => {

    return (
        <div>
            <Container>
                <Row className = "needs-space">
                    <h2>You have deleted the air shipment</h2>
                </Row>
                
                <Row className = "needs-space">
                    <Link to = {'/airfreight'}><Button variant = "primary">Return to AWB List</Button></Link>
                </Row>
            </Container>
        </div>
    )
}

export default AirDelete;