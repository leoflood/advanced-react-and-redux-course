import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { useNavigate } from 'react-router-dom';

const Signup = ({ handleSubmit, signup, errorMessage }) => {
  const navigate = useNavigate();

  const onSubmit = (formProps) => {
    signup(formProps, () => {
      navigate('/feature');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>

      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>

      <div>{errorMessage}</div>

      <button>Sign Up!</button>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
  };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);
