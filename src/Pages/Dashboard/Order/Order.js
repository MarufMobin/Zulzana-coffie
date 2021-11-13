import React from 'react';

const Order = ({orderProduct}) => {
    const {email,img,id} = orderProduct;
    
    return (
        <tr>
            <td>{id}</td>
            <td><img src={{img}} alt="" style={{width:"50px", height:"50px"}} /></td>
            <td>{email}</td>
        </tr>
    );
};

export default Order;