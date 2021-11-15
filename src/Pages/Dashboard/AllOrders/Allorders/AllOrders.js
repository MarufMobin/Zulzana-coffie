import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';

const AllOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [updateStatus, setUpdateStatus] = useState(false)

    useEffect(() => {
        fetch('https://fast-fjord-39007.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [updateStatus]);



    const changeStatus = id => {
        const user = id
        fetch('https://fast-fjord-39007.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(req => req.json()).then(data => console.log(data))
        
        setUpdateStatus(true)
    } 
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>All Product Quentity{orders.length}</h1>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>sl</th>
                                <th>Emiail</th>
                                <th>Thambnel</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                orders.map((orderProduct, index) => <tr index={index} key={index} orderProduct={orderProduct}>
                                    <td>{index + 1}</td>
                                    <td>{orderProduct.email}</td>
                                    <td><img src={orderProduct.img} alt="" style={{ width: "50px", height: "50px" }} /></td>
                                    <td className="badge bg-info text-dark text-white mt-3">{orderProduct.status}</td>
                                    <td>

                                        <button className=" btn btn-success text-dark text-white mt-3" onClick={() => changeStatus(orderProduct._id)}>Shipping</button>

                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
    );
};

export default AllOrders;