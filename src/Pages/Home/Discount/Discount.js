import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Discount.css'
import discountImg from '../../../images/discount (2).png'


const Discount = () => {
    return (
        <section className="discount-section">
            <div style={{backgroundColor: "#7d696969",  padding: "80px 0px",}}>
                <Container>
                    <Row>
                        <Col lg={6} className="d-flex justify-content-start align-items-center">
                            <div style={{ textAlign: "left" }}>

                                <h2 style={{ width: "65%", fontSize: "36px", fontWeight: "700", marginBottom: "20px" }}>
                                    Arabica & Robusta
                                    Exclusive Planted Coffee
                                </h2>
                                <p>
                                    Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros. Aliquam eget sapien sed orci accumsan interdum at ac m lorem ut ante pulvinar finibus non non metusi.
                                </p>

                                <p style={{ fontSize: "18px", fontWeight: "700" }}>Download price</p>
                                <p style={{ fontSize: "18px", fontWeight: "700" }}>3-068-387-01-39</p>
                                <button className="discount-btn">Discount More</button>

                            </div>
                        </Col>
                        <Col lg={6}>
                            <img src={discountImg} alt="" className="img-fluid w-75" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Discount;