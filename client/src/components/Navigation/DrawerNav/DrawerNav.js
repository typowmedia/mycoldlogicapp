import React from 'react'
import {
  withStyles,
  SwipeableDrawer,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PropTypes from 'prop-types'
import styles from './styles'
import DashboardIcon from '../../../assets/DashboardIcon'
import ScheduleIcon from '../../../assets/ScheduleIcon'
import ExitIcon from '../../../assets/ExitIcon'
import TimeOffIcon from '../../../assets/TimeOffIcon'
import {
  DASHBOARD,
  REQUEST_TIME_OFF,
  MY_SCHEDULE
} from '../../../routes/routes'

const DrawerNav = ({ show, clicked, classes, history, logout, user }) => {
  return (
    <SwipeableDrawer
      open={show}
      onClose={() => clicked(false)}
      onOpen={() => clicked(true)}
    >
      <MenuList className={classes.menu}>
        <MenuItem>
          <ListItemIcon className={classes.currentUserLogo}>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary={`${user.firstname} ${user.lastname}`}
          />
        </MenuItem>
        <Divider className={classes.divider} />
        <MenuItem
          className={classes.menuItem}
          onClick={() => {
            clicked(false)
            history.push(DASHBOARD)
          }}
        >
          <ListItemIcon className={classes.icon}>
            <div className={classes.icons}>
              <DashboardIcon color={'#f4f4f4'} />
            </div>
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="Dashboard"
          />
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={() => {
            clicked(false)
            history.push(MY_SCHEDULE)
          }}
        >
          <ListItemIcon className={classes.icon}>
            <div className={classes.icons}>
              <ScheduleIcon color="#f4f4f4" />
            </div>
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="My Schedule"
          />
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={() => {
            clicked(false)
            history.push(REQUEST_TIME_OFF)
          }}
        >
          <ListItemIcon className={classes.icon}>
            <div className={classes.icons}>
              <TimeOffIcon color="#f4f4f4" />
            </div>
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="Request Time Off"
          />
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={() => {
            clicked(false)
            logout()
          }}
        >
          <ListItemIcon className={classes.icon}>
            <div className={classes.icons}>
              <ExitIcon color="#f4f4f4" />
            </div>
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="Logout"
          />
        </MenuItem>
      </MenuList>
    </SwipeableDrawer>
  )
}

DrawerNav.propTypes = {
  classes: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}
export default withStyles(styles)(DrawerNav)
