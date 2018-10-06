import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import DashboardNavigation from '../../components/Navigation/DashboardNavigation'
import AskManagerForm from '../../components/Forms/AskManagerForm'
import styles from './styles'
import PropTypes from 'prop-types'

const DashboardPage = ({ classes }) => (
  <Grid container justify="center" alignItems="center" className={classes.root}>
    <Grid item xs={12} md={7}>
      <DashboardNavigation />
    </Grid>
    <Grid item xs={12} md={5} className={classes.form}>
      <Typography className={classes.formTitle} variant="display2">
        Ask A Manager
      </Typography>
      <AskManagerForm />
    </Grid>
  </Grid>
)

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(DashboardPage)
