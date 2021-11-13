import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'


const Login = () => {

    const history = useHistory()
    const location = useLocation()

    const [loginData, setLoginData] = useState({})
    const { logInUser } = useAuth()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => setLoginData(data);
    const loginRelated = logInUser(loginData.email, loginData.password , history, location)

        // if(loginRelated){
        //     alert("successFull Login")
        // }

    return (
        <Container className="intro mt-5 pt-5">
            <Row>
                <Col lg={5} md={5} sm={12}>
                    <div className="custom-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                         
                            <input type="email"  {...register("email")} className="w-100 p-2 rounded rounded-3 d-block mb-4" placeholder="enter Your email"/>

                            <input type="password" {...register("password", { required: true })} className="w-100 p-2 rounded rounded-3 d-block mb-5" placeholder="enter Your password"/>

                            <input type="submit" className="cus-btn" />
                        </form>
                    </div>
                </Col>
                <Col lg={7} md={7} sm={12}>

                </Col>
            </Row>
        </Container>
    );
};

export default Login;