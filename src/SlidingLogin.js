import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import '/Users/justinandhang/Desktop/menu/menu2/src/SlidingLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSignUp from '/Users/justinandhang/Desktop/menu/menu2/src/LoginSignUp.js';

import {Form, Button, Row, Col, ToggleButton, ButtonGroup} from 'react-bootstrap'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,

        };
    }
 
    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    render() {
        return <div ref={ref => this.el = ref}>
            <div style={{ marginTop: '32px' }}>
                <div className = 'leftBar1' onClick={ () => this.setState({ isPaneOpen: true }) }></div>
            </div>
            <SlidingPane
                className='PaneStyle'
                overlayClassName='some-custom-overlay-class'
                isOpen={ this.state.isPaneOpen }
  
                onRequestClose={ () => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                } }>
                    <LoginSignUp />

            </SlidingPane>
        </div>
    }
}