import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import './Register.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Register = () => {
    
    const history = useHistory()
    const location = useLocation()
    const [registerInData, setRegisterInData] = useState({})
    const {registerUser, userGoogleSign} = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => setRegisterInData(data);
    
    // google login 
    const googleSignIn = () =>{
        userGoogleSign(location, history)
    }

    console.log(registerInData)
    useEffect(()=>{
        if(registerInData.exampleRequired === registerInData.exampleRequiredCon){
            alert("CONFORM ")
            registerUser( registerInData.example , registerInData.exampleRequired, registerInData.displayName,location, history)
            return
        }
    },[registerInData.exampleRequired])
    
    return (
        <Container>
            <Row>
                <Col lg={5} md={5} sm={12}>
                    <form onSubmit={handleSubmit(onSubmit)} className="custom-reg-form" >

                        <input type="text" {...register("displayName")} className="input-field" placeholder="Enter Your Name" />

                        <input type="email" {...register("example")} className="input-field" placeholder="enter Your email" />


                        <input type="password" {...register("exampleRequired", { required: true })} className="input-field" placeholder="enter Your pass" />

                        <input type="password" {...register("exampleRequiredCon", { required: true })} className="input-field" placeholder="Re enter your password" />


                        <div style={{ textAlign: "left", display:"inline-block" }}>
                            <input type="submit" className="custm-btn" value="Register" />
                        </div>  <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                                <input className="ms-2 d-inline custom-button" type="submit" value="google Sign In" onClick={googleSignIn}  />
                            <Button variant="link" style={{color: "#fff"}}>if You Are Already Memger? Please login</Button>
                        </NavLink>
                    </form>
                  
                </Col>
            </Row>
        </Container>
    );
};

export default Register;