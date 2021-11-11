import React from 'react';
import { Carousel } from 'react-bootstrap';
import bgOne from '../../../images/herobgtwo.jpg'
import bgTwo from '../../../images/herobgone.jpg'
import bgThree from '../../../images/herobgthree.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade  controls={false}>
            <Carousel.Item className="custm-carusal" >
                <img
                    className="d-block w-100 h-50"
                    src={bgThree}
                    alt="First slide"

                />
                <Carousel.Caption className="title">
                    <h3>How we Prepare our Beans</h3>
                    <p>The coffee is brewed by first roasting the green coffee beans over hot coals in brazier.Once the beans are roasted each participant is given an opportunity to sample The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={bgOne}

                />

                <Carousel.Caption className="title">
                    <h3>GUATEMALA COFFEE</h3>
                    <p>Coffee confidential’s carefully curated compendium of coffee quips and quotes.Never Underestimate the Importance of Being Properly Caffeinated.Like everyone else who makes the mistake of getting older, I begin each day with coffee and obituaries.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={bgTwo}
                />

                <Carousel.Caption className="title">
                    <h3>MyCoffeeShop Cup OF Tea</h3>
                    <p>The earliest credible evidence of the drinking of coffee in the form of the modern beverage appears in modern-day Yemen from the middle of the 15th century in Sufi shrines, where coffee seeds were first roasted and brewed in a manner similar to current methods.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;