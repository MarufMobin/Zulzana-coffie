import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduc = ({product}) => {
    const { id, description, name, price ,categories, sku, tag, img } = product;
    console.log(product)
    
    return (
        <Col xs={6} xs lg="4" md={4}>
            <div className="mt-4 shadow-lg">
                <Card className="p-3">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 80)}
                            catagory : {categories}
                        </Card.Text>
                        <Link to={`/allproducts/${id}`} > <button className="custom-button">Buy Now</button> </Link>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};

export default SingleProduc;