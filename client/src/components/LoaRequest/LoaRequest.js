import React from 'react';
import LoadContent from '../../hoc/LoadContent';
import Spinner from '../UI/Spinner';
import LoaForm from '../Forms/LoaForm';
import PropTypes from 'prop-types';

const LoaRequest = ({ user }) => (
  <LoadContent url="/LeaveAbsReasons">
    {({ data, error, loading }) => {
      if (loading) return <Spinner color="secondary" size={100} />;
      if (error) return <p>Error</p>;
      return <LoaForm reasons={data} user={user} />;
    }}
  </LoadContent>
);

LoaRequest.propTypes = {
  user: PropTypes.object.isRequired,
};

export default LoaRequest;
