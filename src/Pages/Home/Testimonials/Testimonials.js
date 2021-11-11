import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';
import Slider from 'react-slick';


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('/fakeTestimonial.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    const settings = {
        infinite: false,
        slidesToShow: 2 ,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <Container>
            <Row>
                <Col className="12">
                    <div className="my-5">
                        <Slider {...settings}>

                            {

                                testimonials.slice(0,9).map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.id}></Testimonial>)
                            }

                        </Slider>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Testimonials;