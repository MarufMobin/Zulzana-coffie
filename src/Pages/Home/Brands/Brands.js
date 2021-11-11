import React from 'react';
import './Brands.css'
import { Col, Container, Row } from 'react-bootstrap';
import brandOne from '../../../images/brand/01.png'
import brandTwo from '../../../images/brand/02.png'
import brandThree from '../../../images/brand/03.png'
import brandFour from '../../../images/brand/04.png'
import brandFive from '../../../images/brand/05.png'
import brandSix from '../../../images/brand/06.png'

const Brands = () => {
    return (
        <Container style={{borderTop: "2px solid #ededed"}} className="py-2">
            <Row className="brand-section">
                <Col lg={2} md={2} sm={4}>
                    <img src={brandOne} alt="" className="img-fluid" />
                </Col>
                <Col lg={2} md={2} sm={4}>
                    <img src={brandTwo} alt="" className="img-fluid" />
                </Col>
                <Col lg={2} md={2} sm={4}>
                    <img src={brandThree} alt="" className="img-fluid" />
                </Col>
                <Col lg={2} md={2} sm={4}>
                    <img src={brandFour} alt="" className="img-fluid" />
                </Col>
                <Col lg={2} md={2} sm={4}>
                    <img src={brandFive} alt="" className="img-fluid" />
                </Col>
                <Col lg={2} md={2} sm={4}>
                    <img src={brandSix} alt="" className="img-fluid" />
                </Col>
                
            </Row>
        </Container>
    );
};

export default Brands;