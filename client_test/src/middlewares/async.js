export default ({ dispatch }) =>
  (next) =>
  (action) => {
    // Check to see if the actions has a promise
    // on its "payload" property
    // If it does, then wait for it to resolve
    // If it does not, then send the action on to
    // the next middleware
    if (!action.payload?.then) {
      return next(action);
    }

    // We want to wait for the promise to resolve
    // (get its data!) and then create a new action
    // with that data and dispatch it
    action.payload.then((response) => {
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  };
