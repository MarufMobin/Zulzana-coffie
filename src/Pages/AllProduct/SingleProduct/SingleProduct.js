import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduc = ({product}) => {
    const { id, description, name, categories, sku, tag, img } = product;
    const submition = (id) =>{
        console.log("click", id)
    }
    return (
        <Col xs={6} xs lg="4" md={4}>
            <div className="mt-4 shadow-lg">
                <Card className="p-3">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 80)}
                        </Card.Text>
                        <Button variant="primary" className="custom-button" onClick={ ()=> submition(id) }>Godfdsfs    somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};

export default SingleProduc;