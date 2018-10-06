import React from 'react';

const ScheduleIcon = ( props ) => {
    return <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"
                viewBox="358 0 112 125" aria-labelledby="title">
            <title id="title">View my Schedule</title>
            <defs>
                <clipPath id="b">
                    <rect x="358" width="112" height="125"/>
                </clipPath>
            </defs>
            <g id="schedulesvg" clipPath="url(#b)">
                <path
                    d="M90.152,69.476H59.026V100.6H90.152ZM83.927,1V13.45h-49.8V1H21.675V13.45H15.45A12.394,12.394,0,0,0,3.062,25.9L3,113.052A12.447,12.447,0,0,0,15.45,125.5H102.6a12.487,12.487,0,0,0,12.45-12.45V25.9A12.487,12.487,0,0,0,102.6,13.45H96.377V1ZM102.6,113.052H15.45V44.576H102.6Z"
                    transform="translate(354.627 -1)" fill={props.color}/>
            </g>
        </svg>
};

export default ScheduleIcon;
