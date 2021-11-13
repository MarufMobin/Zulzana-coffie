import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './About.css'
import aboutImg from '../../images/aboutmove.png'

const About = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="about-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12" style={{textAlign:"left", fontSize:"60px", fontWeight:"700",textDecoration:"underline"}}>
                                About Us
                            </div>
                        </div>
                    </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 my-5" style={{ textAlign: "left" }}>
                        <p>
                            The about page on your eCommerce website should be more than just an afterthought. This is especially true considering the about page is the second most visited page on websites, just after home pages.</p>

                        <p> Nailing the copy, design, and information included in your about page can build your credibility as a brand, offer an opportunity for you to tell your story, and provide customers with an idea of who you are, and why they should do business with your eCommerce company.</p>

                        <h4>Beyond that, the goals of your about page should include:</h4>
                        <ul>
                            <li>Telling a story of your eCommerce company and why your company matters
                                Providing insight into the leadership of your company</li>
                            <li>Showing off your business model
                                Presenting any interesting stats
                                Using persuasive content to delve deeper into your story</li>
                            <li>When you put time and attention into your about page, you show customers that you’re honest, passionate, and excited about sharing your brand with the world.</li>
                            <li>This post will cover everything you need to know about how to create the perfect about page for your eCommerce website.</li>
                        </ul>

                        <p>A foolproof approach for your about page
                            Your home page is all about communicating a clear and succinct value proposition, providing a navigation bar for users to click to other content, and writing smart calls-to-action to get your audience to do something.</p>
                        <p>Your about page, on the other hand, is about delving deeper into your value proposition and really getting into the story of what makes your brand unique.</p>
                        <p> When someone clicks on your about page, they don’t want to be sold; they want to learn who you and your business are.</p>
                        <p>To say it’s difficult to write an about page is an understatement. It always feels weird to brag about yourself and your eCommerce company. Additionally, when you know the ins and outs of your company so well, it can be challenging to identify what you should include and exclude in your about page. It’s also hard to write about you in a way that actually piques the interest of the readers (aka it’s hard to write about yourself in a way that is also about the reader)</p>
                        <strong> Here is a quick overview of what you can include in your about page so it will resonate well with your website visitors.</strong>
                    </div>
                    <div className="col-md-5">
                        <img src={aboutImg} alt="" className="img-fluid swing mt-5" />
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default About;