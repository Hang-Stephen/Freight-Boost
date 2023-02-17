import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const OceanDisplayList = (props) => {
    const [oceanList, setOceanList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/oceanfreight")
        .then((response) => setOceanList(response.data))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className = "container">
            <h1>Ocean Bill of Lading List</h1>
            <div class = "top-bar">
                <Link to = {'/oceanfreight/new'} class = "new"><Button variant = "primary">Add BOL</Button></Link>
            </div>
            <Table striped boredered hover>
                <thead>
                    <tr>
                        <th>MB/L</th>
                        <th>HB/L</th>
                        <th>ETD</th>
                        <th>ETA</th>
                    </tr>
                    {
                        oceanList.map((oceanShipment, index) => (
                            <tr key = {index}>
                                <td><Link to = {`/oceanfreight/${oceanShipment._id}`}>{oceanShipment.mbl}</Link></td>
                                <td>{oceanShipment.hbl}</td>
                                <td>{oceanShipment.etd}</td>
                                <td>{oceanShipment.eta}</td>
                            </tr>
                        ))
                    }
                </thead>
            </Table>
        </div>
    )
}

export default OceanDisplayList;