import React from 'react';
import LoadLeaveOfAbsence from '../../hoc/LoadLeaveOfAbsence';
import Spinner from '../UI/Spinner';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const LeaveOfAbsenceData = () => (
  <LoadLeaveOfAbsence>
    {({ data, error, loading }) => {
      if (loading) return <Spinner color="secondary" size={100} />;
      if (error) return <p>Error</p>;
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Reason</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(d => {
              if (d.reason === '') return null;
              if (
                d.reason ===
                'This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA. This is a test LOA.'
              )
                return null;
              return (
                <TableRow key={d.id}>
                  <TableCell>{d.reason}</TableCell>
                  <TableCell>{d.from}</TableCell>
                  <TableCell>{d.to}</TableCell>
                  <TableCell>{d.status}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      );
    }}
  </LoadLeaveOfAbsence>
);

export default LeaveOfAbsenceData;
