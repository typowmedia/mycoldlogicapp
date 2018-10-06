import React from 'react';
import './ListView.css';

const ListView = ( props ) => {
  const recognitions = props.recognitions.map(week => {
    let wkEndDate = new Date(week.wkEndDate);
    return (

      <div key={week.id} className='ListView'>
        <p>Week Ending Date:<span>{wkEndDate.toDateString()}</span></p>
        <p>Daily Incentives:<span>{week.dlyIncTot.toFixed(2)}</span></p>
        <p>Weekly Incentives:<span>{week.wklyIncTot.toFixed(2)}</span></p>
        <p>Gross Incentives:<span>{week.grssInc.toFixed(2)}</span></p>
        <p>BBS Factor:<span>{week.bbsFactor.toFixed(2)}</span></p>
        <p>Net Incentives:<span>{week.netInc.toFixed(2)}</span></p>
      </div>

    )

  });
  return (
    <div>
      {recognitions}
    </div>
  );
};

export default ListView;
