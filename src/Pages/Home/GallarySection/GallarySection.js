import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './GallarySection.css'
import imgOne from '../../../images/gallary/glone.jpg'
import imgTwo from '../../../images/gallary/port-1-gallery-1.jpg'
import imgThree from '../../../images/gallary/port-1-gallery-10.jpg'
import imgFour from '../../../images/gallary/port-1-gallery-11.jpg'
import imgFive from '../../../images/gallary/port-1-gallery-12.jpg'
import imgSix from '../../../images/gallary/port-1-gallery-2.jpg'

const GallarySection = () => {
    return (
        <Container>
            <Row>
                <h2 className="mt-5">Our Gallary Section</h2>
                <p style={{width:"45%",margin: "0px auto"}}>Our Some Spacial Memoralbe moments and We can not miss this kind of moment that's Why we create a gallary because of we don't forget the ceromonys</p>
            </Row>
            <Row className="mt-5">
                <Col sm={12} lg={4} md={4}>
                    <img src={imgOne} alt="" className="img-fluid custom-hover" title="Fist Img"/>
                </Col>
                <Col sm={12} lg={4} md={4}>
                    <img src={imgTwo} alt="" className="img-fluid custom-hover" title="Second Img"/>
                </Col>
                <Col sm={12} lg={4} md={4}>
                    <img src={imgThree} alt="" className="img-fluid custom-hover"  title="Third Img"/>
                </Col>
            </Row>
            <Row className="my-5">
                <Col sm={12} lg={4} md={4}>
                    <img src={imgFour} alt="" className="img-fluid custom-hover" title="Four Img"/>
                </Col>
                <Col sm={12} lg={4} md={4}>
                    <img src={imgFive} alt="" className="img-fluid custom-hover" title="Fifth Img"/>
                </Col>
                <Col sm={12} lg={4} md={4}>
                    <img src={imgSix} alt="" className="img-fluid custom-hover" title="Sixth Img"/>
                </Col>
            </Row>
        </Container>
    );
};

export default GallarySection;