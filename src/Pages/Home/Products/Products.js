import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fast-fjord-39007.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // console.log(products)
    return (
        <div className="product-section">
            <Container>
                <Row >
                    <div className="my-5">
                        <h3>Recent Products</h3>
                        <h6 style={{width:"58%",margin: "0px auto", fontSize:"20px"}}>Maecenas tempus, tellus eget condimentum rhoncus? Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus vitae sapien</h6>
                    </div>
                </Row>
                <Row>
                    {
                        products?.slice(0, 6).map(product => <Product product={product} key={product.id}></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;