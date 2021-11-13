import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './ProductSell.css'

const ProductSell = () => {
    const { servicesId } = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);
    const { user } = useAuth()


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setServicesDetails(data))
    }, [servicesId])

    const foundDetails = servicesDetails.find(service => service._id == servicesId)

    const productData = {
        email: user?.email,
        id: servicesId,
        img: foundDetails?.img
    }
    // console.log("jabar bhai", productData)
    const placeItemBtn = () => {

        fetch(`http://localhost:5000/allproducts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        }).then(res => res.json()).then(data => console.log(data))

    }

    return (
        <>
            <Navigation></Navigation>
            <div className="container d-flex justify-content-center " style={{ marginTop: "6rem " }}>
                <Card className="border-0" style={{
                    backgroundColor: "#212529", padding: "20px",
                    marginBottom: "50px",
                    display: "flex",
                    flexDirection: "row",
                    color: "#fff",
                    textAlign: "justify",
                    justifyContent: "center"
                }}>
                    <Card.Img variant="top" src={foundDetails?.img} className="w-50" />
                    <Card.Body style={{ marginTop: "50px" }}>
                        <Card.Title className="fw-bold fs-3">
                            <h1 style={{ marginBottom: "20px", textDecoration: "underline" }}>See Product full Details</h1>
                            {foundDetails?.name}</Card.Title>
                        <Card.Text>
                            <h4>Book Now: {foundDetails?.price}</h4>
                            <p style={{ width: "50%", margin: "15px 0px" }}>{foundDetails?.description}</p>
                            <h6>Tags: {foundDetails?.tag}, Sku: {foundDetails?.sku}</h6>
                            <h6>Categories: {foundDetails?.categories}</h6>

                        </Card.Text>

                        <Link className="custom-sec-btn" onClick={placeItemBtn} to="/checkout">Place Item</Link>
                    </Card.Body>
                </Card>

            </div >
            <Footer></Footer>
        </>
    );
};


export default ProductSell;