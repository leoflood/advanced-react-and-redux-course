import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    const { auth } = props;
    const navigate = useNavigate();

    useEffect(() => {
      shouldNavigateAway();
    });

    const shouldNavigateAway = () => {
      if (!auth) {
        navigate('/');
      }
    };

    return <ChildComponent {...props} />;
  };

  function mapStateToProps(state) {
    return {
      auth: state.auth.authenticated,
    };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
