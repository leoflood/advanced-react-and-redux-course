import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Signout = ({ signout }) => {
  useEffect(() => {
    signout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Sorry to see you go</div>;
};

export default connect(null, actions)(Signout);
