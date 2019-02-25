import React from 'react';

import FeedBackSad from '../../../assets/FeedbackSad';
import FeedBackNeutralSad from '../../../assets/FeedbackNeutralSad';
import FeedBackNeutral from '../../../assets/FeedbackNeutral';
import FeedBackNeutralHappy from '../../../assets/FeedbackNeutralHappy';
import FeedBackHappy from '../../../assets/MyBestSiteIcon';

export const ratings = [
  {
    rating: 1,
    color: '#ED2B2B',
    icon: color => <FeedBackSad color={color} />,
  },
  {
    rating: 2,
    color: '#F5A42A',
    icon: color => <FeedBackNeutralSad color={color} />,
  },
  {
    rating: 3,
    color: '#F2E830',
    icon: color => <FeedBackNeutral color={color} />,
  },
  {
    rating: 4,
    color: '#13BA51',
    icon: color => <FeedBackNeutralHappy color={color} />,
  },
  {
    rating: 5,
    color: '#12821A',
    icon: color => <FeedBackHappy color={color} />,
  },
];

export const features = [
  {
    id: 1,
    name: 'Leave of Absence',
  },
  {
    id: 2,
    name: 'Bonus Recognitions',
  },
  {
    id: 3,
    name: 'Best Site Suggestion',
  },
  {
    id: 4,
    name: 'Safe Site Report',
  },
  {
    id: 5,
    name: 'None of the Above',
  },
  {
    id: 6,
    name: 'All of the Above',
  },
];
