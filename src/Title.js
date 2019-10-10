import React, { Component } from "react";
import "./Title.css"
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

class Title extends Component {
    render () {
        return (
            <div className = 'Title'>
                <div className = 'transbox'>
                <BouncyDiv><h1>Hang is such a cool hot chick</h1></BouncyDiv>
                </div>
            </div>
        )
    }
}

export default Title;