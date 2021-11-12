import Button from '@restart/ui/esm/Button';
import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import './Product.css'

const Product = ({ product}) => {
    const { id,description,name,categories,sku,tag,img } = product;
   const submition = id =>{
       console.log(id)
    //    fetch(``)
   }
    return (
        <Col xs={6} xs lg="4" md={4}>
            <div className="mt-4 shadow-lg">
                <Card className="p-3">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0,80)}
                        </Card.Text>
                        <Button variant="primary" onClick={()=> submition(id)} className="custom-button">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};

export default Product;