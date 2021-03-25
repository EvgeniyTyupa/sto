import { Button } from '@material-ui/core';
import React from 'react';
import classes from './Button.module.css';

const ButtonSto = (props) => {
    return(
        <Button onClick={()=>{props.function(true)}} className={classes.main}>{props.text}</Button>
    );
}

export default ButtonSto;