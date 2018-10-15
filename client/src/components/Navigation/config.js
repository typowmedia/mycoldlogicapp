import React from 'react';
import {
  REQUEST_TIME_OFF,
  BONUS_RECOGNITIONS,
  SAFE_SITE_REPORT,
  BEST_SITE_REPORT,
} from '../../routes/routes';
import TimeOffIcon from '../../assets/TimeOffIcon';
import BonusRecognitionIcon from '../../assets/BonusRecognitionIcon';
import MyBestSiteIcon from '../../assets/MyBestSiteIcon';
import SafeSiteIcon from '../../assets/SafeSiteIcon';

export const navigation = [
  {
    name: 'Request Time Off',
    route: REQUEST_TIME_OFF,
    icon: <TimeOffIcon color={'#f4f4f4'} />,
    description: 'Submit a leave of absence and follow up on them.',
  },
  {
    name: 'Bonus Recognitions',
    route: BONUS_RECOGNITIONS,
    icon: <BonusRecognitionIcon color={'#f4f4f4'} />,
    description: 'View your upcoming bonus recognitions.',
  },
  {
    name: 'My Best Site Report',
    route: BEST_SITE_REPORT,
    icon: <MyBestSiteIcon color={'#f4f4f4'} />,
    description: 'Make a suggestion that will help us improve.',
  },
  {
    name: 'Safe Site Report',
    route: SAFE_SITE_REPORT,
    icon: <SafeSiteIcon color={'#f4f4f4'} />,
    description: 'Report something you saw or experienced.',
  },
];
