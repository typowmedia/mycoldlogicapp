import React from 'react';
import LoadLeaveOfAbsence from '../../hoc/LoadLeaveOfAbsence';
import Spinner from '../UI/Spinner';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';

const LeaveOfAbsenceData = ({ classes }) => (
  <LoadLeaveOfAbsence>
    {({ data, error, loading }) => {
      if (loading) return <Spinner color="secondary" size={100} />;
      if (error) return <p>Error</p>;
      data.sort((a, b) => b.from > a.from);
      return (
        <div className={classes.container}>
          <div className={classes.row}>
            <h3 className={`${classes.cellReason} ${classes.cellHeading}`}>
              Reason
            </h3>
            <h3 className={classes.cellHeading}>From </h3>
            <h3 className={classes.cellHeading}>To</h3>
            <h3 className={classes.cellHeading}>Status</h3>
          </div>
          {data.map(loa => {
            return (
              <div className={classes.row} key={loa.id}>
                <p className={`${classes.cellReason} ${classes.cell}`}>
                  {loa.reason}
                </p>
                <p className={classes.cell}>{loa.to}</p>
                <p className={classes.cell}>{loa.from}</p>
                <p className={classes.cell}>{loa.status}</p>
              </div>
            );
          })}
        </div>
      );
    }}
  </LoadLeaveOfAbsence>
);

LeaveOfAbsenceData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeaveOfAbsenceData);

{
  /* <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.Cell}>Reason</TableCell>
              <TableCell className={classes.Cell}>From</TableCell>
              <TableCell className={classes.Cell}>To</TableCell>
              <TableCell className={classes.Cell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(d => {
              if (d.reason === '') return null;
              //if (d.reason.length > 40) return null;
              return (
                <TableRow key={d.id}>
                  <TableCell className={classes.Cell}>{d.reason}</TableCell>
                  <TableCell className={classes.Cell}>{d.from}</TableCell>
                  <TableCell className={classes.Cell}>{d.to}</TableCell>
                  <TableCell className={classes.Cell}>{d.status}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table> */
}
