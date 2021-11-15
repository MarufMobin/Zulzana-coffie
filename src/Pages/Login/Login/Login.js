import React, { useState } from 'react';
import { Alert, Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'


const Login = () => {

    const history = useHistory()
    const location = useLocation()

    const [loginData, setLoginData] = useState({})
    const { logInUser, isLoading, user,userGoogleSign } = useAuth()


    const onFieldChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    // google login 
    const googleSignIn = () =>{
        userGoogleSign(location, history)
    }

    const onSubmitionForm = e => {
        logInUser(loginData.email, loginData.password, location, history);
        e.preventDefault()
    }

    // google sign in 
    // const handleGoogleSignIn = () => {
    //     signInWithGoogle(location, history)
    // }

    return (
        <Container className="intro mt-5 pt-5">
            <Row>
                <Col lg={5} md={5} sm={12}>
                    <div className="custom-form" style={{ textAlign: "left" }}>
                        {
                            !isLoading && <form onSubmit={onSubmitionForm}>
                                <input type="email" className="p-2 w-100" placeholder="Enter Your Email" name="email" onBlur={onFieldChange} />
                                <br />
                                <br />
                                <input type="password" className="p-2 w-100" placeholder="Enter Your Password" name="password" onBlur={onFieldChange} />
                                <br />
                                <br />
                                <input className=" d-inline custom-button" type="submit" value="Login" />

                                <input className="ms-2 d-inline custom-button" type="submit" value="google Sign In" onClick={googleSignIn}  />
                            </form>
                        }
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="link">New User? Please Register</Button>
                        </NavLink>
                        {
                            isLoading && <Spinner animation="border" role="status">

                            </Spinner>
                        }
                        {user?.email && <Alert variant="success">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                           
                        </Alert>}

                        
                    </div>
                </Col>
                <Col lg={7} md={7} sm={12}>

                </Col>
            </Row>
        </Container>
    );
};

export default Login;