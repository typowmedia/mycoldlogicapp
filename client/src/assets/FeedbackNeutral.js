import React from 'react';

const FeedbackNeutral = (props) => {
    return <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <title>NeutralIcon</title>
        <path
            d="M50,0C22.4,0,0.1,22.4,0.1,50s22.4,49.9,50,49.9s49.9-22.4,49.9-50C100,22.3,77.7,0,50.2,0H50z M50,90
	c-22.1,0-40-17.9-40-40s17.9-40,40-40s40,17.9,40,40S72.1,90,50,90z M39.8,39.8c0,3.1-2.5,5.6-5.6,5.6s-5.6-2.5-5.6-5.6
	c0-3.1,2.5-5.6,5.6-5.6S39.8,36.7,39.8,39.8z M71.3,39.8c0,3.1-2.5,5.6-5.6,5.6c-3.1,0-5.6-2.5-5.6-5.6c0-3.1,2.5-5.6,5.6-5.6
	C68.8,34.3,71.3,36.7,71.3,39.8z M63.8,71H36.3v-7.8h27.5V71z" fill={props.color}/>
    </svg>
};

export default FeedbackNeutral