import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fast-fjord-39007.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // console.log(products)
    return (
        <>
            <Navigation></Navigation>

            <div className="product-section">
                <Container>
                    <Row>
                        <div>
                            <h1>Recent Products </h1>
                            <h6 style={{ width: "58%", margin: "0px auto", fontSize: "20px" }}>Maecenas tempus, tellus eget condimentum rhoncus? Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus vitae sapien</h6>
                        </div>
                    </Row>
                    <Row>
                        {
                            products.map(product => <SingleProduct product={product} key={product.id}></SingleProduct>)
                        }
                    </Row>
                </Container>
            </div>

            <Footer></Footer>

        </>
    );
};

export default AllProducts;
