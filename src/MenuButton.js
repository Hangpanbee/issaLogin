import React, { Component } from "react";
import "./MenuButton.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';


const BoostrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTranform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI',
      'Roboto',
      '"Helvetica Neue"'

    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '##0062cc',
      borderColor: '##005cbf',
    },
    '&:focus': {
      boxshadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700]
    },
  },
}))(Button)

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function MenuButton(props) {

    return (
      <div>
      <button id="roundButton" 
              onMouseDown={props.handleMouseDown}>
                <a href = "https://i.imgur.com/PWZMJcm.jpg"></a>
               </button>
        </div>
    );
  
}

