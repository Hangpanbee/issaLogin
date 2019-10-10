import React, { Component } from 'react';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import '/Users/justinandhang/Desktop/menu/menu2/src/SlidingLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Flip from 'react-reveal/Flip';

import {Form, Button, Row, Col, ToggleButton, ButtonGroup} from 'react-bootstrap'


export default class LoginSignup extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ show: !this.state.show })
    }

    render(){
        return (
        <div>
            <Flip left when = {this.state.show}>
                <h1>hello</h1>
            </Flip>
        <div className="outterCon">
        <div className="authBox outterBox">
            <div class = 'authBox'>
                <div className="formCon">
                    <h2>Welcome to Hang's fan club</h2>
                <div className="formBox">
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <div className="innerBox">
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className="forgotLink">
                        <a href="">Forgot Password</a>
                    </div>
                </div>
                <ButtonGroup toggle className = 'loginBox'>
                    
                <Button variant="outline-primary" >
                    Log In
                </Button>
                <Button variant="outline-primary"  onClick = {this.handleClick}>
                    Sign Up
                </Button>                       
                                
                </ButtonGroup>
                </Form>

                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        )
    }
}