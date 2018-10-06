import React from 'react'
import { Grid, Typography, Button, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import TimeOffIcon from '../../../assets/TimeOffIcon'
import ScheduleIcon from '../../../assets/ScheduleIcon'
import BonusRecognitionIcon from '../../../assets/BonusRecognitionIcon'
import MyBestSiteIcon from '../../../assets/MyBestSiteIcon'
import SafeSiteIcon from '../../../assets/SafeSiteIcon'
import OpenPositionIcon from '../../../assets/OpenPositionIcon'
import styles from './styles'
import PropTypes from 'prop-types'
import {
  REQUEST_TIME_OFF,
  BONUS_RECOGNITIONS,
  MY_SCHEDULE,
  BEST_SITE_REPORT,
  SAFE_SITE_REPORT,
  OPEN_POSITIONS
} from '../../../routes/routes'

const navigation = [
  {
    name: 'Request Time Off',
    route: REQUEST_TIME_OFF,
    icon: <TimeOffIcon color={'#f4f4f4'} />
  },
  {
    name: 'Bonus Recognitions',
    route: BONUS_RECOGNITIONS,
    icon: <BonusRecognitionIcon color={'#f4f4f4'} />
  },
  {
    name: 'My Schedule',
    route: MY_SCHEDULE,
    icon: <ScheduleIcon color={'#f4f4f4'} />
  },
  {
    name: 'My Best Site Report',
    route: BEST_SITE_REPORT,
    icon: <MyBestSiteIcon color={'#f4f4f4'} />
  },
  {
    name: 'Safe Site Report',
    route: SAFE_SITE_REPORT,
    icon: <SafeSiteIcon color={'#f4f4f4'} />
  },
  {
    name: 'Bid For An Open Position',
    route: OPEN_POSITIONS,
    icon: <OpenPositionIcon color={'#f4f4f4'} />
  }
]

const DashboardNavigation = ({ classes }) => {
  return (
    <Grid container spacing={24}>
      {navigation.map(nav => (
        <Grid
          className={classes.navLinkContainer}
          key={nav.name}
          item
          xs={6}
          sm={6}
          md={6}
          lg={4}
        >
          <Button
            className={classes.navButton}
            variant="fab"
            component={Link}
            to={nav.route}
          >
            <div className={classes.navLink}>{nav.icon}</div>
          </Button>
          <Typography>{nav.name}</Typography>
        </Grid>
      ))}
    </Grid>
  )
}

DashboardNavigation.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(DashboardNavigation)
