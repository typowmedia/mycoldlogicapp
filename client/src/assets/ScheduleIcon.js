import React from 'react';

const ScheduleIcon = ( props ) => {
    return <svg id="ScheduleIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <title>ScheduleIcon</title>
                <path
                    d="M77.7,52.1H49.9v27.8h27.8V52.1z M72.2,0.1v8.7H27.7V0.1H16.5v8.7H11c-6.1,0-11.1,2.8-11.1,8.5c0,0,0,0,0,0
			l-0.1,72.4c0,5.7,5,10.3,11.1,10.3c0,0,0,0,0,0h77.9c6.1,0,11.1-4.6,11.1-10.3V17.3c0-5.7-5-8.6-11.1-8.6h-5.6V0.1H72.2z
			 M88.9,88.7H11V29.5h77.9V88.7z" fill={props.color}/>
        </svg>
};

export default ScheduleIcon;
