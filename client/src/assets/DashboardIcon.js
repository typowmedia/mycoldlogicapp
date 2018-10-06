import React from 'react';

const DashboardIcon = ( props ) => {
    return <svg id="DashboardIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 85">
        <title>DashboardIcon</title>
            <path d="M40,85V55H60V85H85V45h15L50,0,0,45H15V85Z" fill={props.color}/>
    </svg>
};

export default DashboardIcon;
