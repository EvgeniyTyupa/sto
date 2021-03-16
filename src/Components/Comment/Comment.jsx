import React from 'react';
import classes from './Comment.module.css';

const Comment = (props) => {
    return(
        <div className={classes.main}>
            <div className={classes.header}>
                <img src={props.item.img}/>
                <h4>{props.item.name}</h4>
            </div>
            <p>{props.item.text}</p>
        </div>
    );
}

export default Comment;