import constants from './../constants';
const { types } = constants;

const breweryFinderReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case types.CITY_RECIEVED:
     let newcityEntered = {
      isFetching: true,
      city: action.city
    };
    newState = Object.assign({}, state, newcityEntered);
    return newState

    case types.BREWERY_RETURNED:
    newState = Object.assign({}, state, {
      isFetching: false,
      name: action.name,
      street: action.street,
      city: action.city,
      state: action.state,
      website: action.website
    });
      return newState;

    default:
      return state;
  }
};

export default breweryFinderReducer;
