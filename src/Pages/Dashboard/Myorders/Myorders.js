import { Table } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Order from '../Order/Order';

const Myorders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://fast-fjord-39007.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const orderProducts = orders.filter(order => order.email === user?.email)
    console.log(orderProducts)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>All Product Quentity{orderProducts.length}</h1>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>sl</th>
                                <th>Thambnel</th>
                                <th>Emiail</th>

                            </tr>
                        </thead>
                        <tbody>
                            
                                {
                                    orderProducts.map((orderProduct, index) => <Order index={index} key={index}  orderProduct={orderProduct}></Order>)
                                }
                           

                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
    );
};

export default Myorders;