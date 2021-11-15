import React, { useEffect, useState } from 'react';
    

const Order = ({orderProduct,index}) => {

    const {email,img,id} = orderProduct;

    const dismissBtn = id =>{
        
        const uri =`https://fast-fjord-39007.herokuapp.com/orders/${id}`;
           fetch(uri,{
               method: 'DELETE',
           }).then( res => res.json()).then(data => {
               if( data.deletedCount == 1){
                   alert("Success Fully Deleted")
               }
           });
    }

    
    return (
        <tr>
            <td>{index+1}</td>
            <td><img src={img} alt="" style={{width:"50px", height:"50px"}} /></td>
            <td>{email}</td>
            <td><button onClick={() => dismissBtn(id)} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default Order;