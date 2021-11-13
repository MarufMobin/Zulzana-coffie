import React from 'react';
import done from '../../images/congrats-1.gif'
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Checkout = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img className="img-fluid mt-5" src={done} alt="" />

                        </div>
                        <div className="col-md-7" style={{ textAlign: "left" }}>
                            <h3 className="mt-5 mb-3">Your Product to readey to Shiping </h3>
                            <h6>
                                Permeation enhancement may also be achieved by physical technologies such as iontophoresis,
                                microporation, sonophoresis and microdermabrasion, which could be characterised as active
                                enhancement strategies.</h6><p>
                                A transdermal patch, which may also be considered a Transdermal Drug Delivery System (TDDS), is
                                defined as a flexible, multi-layered, pharmaceutical single dose preparation of varying size containing
                                one or more active substances to be applied to the intact skin for systemic absorption. This is normally
                                formulated with pressure-sensitive adhesives that assure the adhesion of the preparation to the skin. A
                                transdermal patch includes a backing sheet, impermeable to the active substance and normally
                                impermeable to water. The releasing surface.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Checkout;