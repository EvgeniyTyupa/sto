import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollIntoView = (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    useEffect(()=>{
        if(!props.location.pathname.includes("/services/")){
            window.scrollTo(0, 0);
        }
        
    }, [props.location]);

    return(
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

export default withRouter(ScrollIntoView);
