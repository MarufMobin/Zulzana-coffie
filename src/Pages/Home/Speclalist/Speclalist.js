import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Speclalist.css'
import imgOne from '../../../images/CUP_collage-1024x868.jpg'

const Speclalist = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <span>Our Exclusive Coffie Explanation</span>
                    <h4 style={{width: "45%", margin: "20px auto 80px"}}>
                        Divine Aroma  in Every Cup
                        Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.
                    </h4>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={4} sm={12} style={{ textAlign: 'left' }} className="inner-speclalist">
                    <h4>Pure Grades</h4>
                    <p>Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.</p>
                    <h4>Wide Assortment</h4>
                    <p>Cras ut nisl ac sapien interdum scelerisque sed in elit rutrum in massa sed congue eget turpis ligula.</p>
                    <h4>Proper Roasting</h4>
                    <p>
                        Proin non vulputate diam, ut varius orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>






                </Col>

                <Col lg={4} md={4} sm={12}>
                    <img src={imgOne} alt="" className="img-fluid" />
                </Col>

                <Col lg={4} md={4} sm={12} style={{ textAlign: "right", lineHeight: "32px"}}>
                    <h4>High Quality</h4>
                    <p>Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.</p>

                    <h4>Excellent Grinding</h4>
                    <p>Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.</p>
                    <h4> Awesome Aroma</h4>
                    <p> Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.</p>





                </Col>
            </Row>
        </Container>
    );
};

export default Speclalist;