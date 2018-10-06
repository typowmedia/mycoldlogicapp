import React from 'react';

const SafeSiteIcon = (props) => {
    return <svg id="SafeSiteIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <title>SafeSiteIcon</title>
                <path d="M90,0H10C4.5,0,0,4.5,0.1,10L0,100l20-20h70c5.5,0,10-4.5,10-10V10C100,4.5,95.5,0,90,0z M35,45H25V35h10V45z
			 M55,45H45V35h10V45z M75,45H65V35h10V45z" fill={props.color}/>
    </svg>
};

export default SafeSiteIcon;
