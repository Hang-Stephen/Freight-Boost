import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const AirDisplayList = (props) => {
    const [airList, setAirList] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:8000/api/airfreight")
        .then((response) => setAirList(response.data))
        .catch((err) => console.log(err));
    }, [])

        return (
            <div class = "container">
                <h1>Air Waybill List</h1>
                <div class = "top-bar">
                    <Link to = {'/airfreight/create/new'} class = "new"><Button variant = "primary">Add AWB</Button></Link>
                </div>
                <Table striped boredered hover>
                    <thead>
                        <tr>
                            <th>MAWB</th>
                            <th>HAWB</th>
                            <th>ETD</th>
                            <th>ETA</th>
                        </tr>
                        {
                            airList.map((airShipment, index) => (
                                <tr key = {index}>
                                    <td><Link to = {`/airfreight/${airShipment._id}`}>{airShipment.mawb}</Link></td>
                                    <td>{airShipment.hawb}</td>
                                    <td>{airShipment.etd}</td>
                                    <td>{airShipment.eta}</td>
                                </tr>
                            ))
                        }
                    </thead>
                </Table>


            </div>
        )
}

export default AirDisplayList;