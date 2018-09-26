import React from 'react';
import { fetchBrewery } from './../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SearchBar = ({ dispatch }) => {
  let input;
  return(
  <div>
    <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchBrewery(input.value.trim()));
        console.log('SEARCHED ARTIST:');
      console.log(input.value.trim());
      input.value = '';
      }} className="input-group">
      <input
        type='text'
        id='city'
        placeholder="Find da Beer"
        className="form-control"
        ref={node => {
          input = node;
        }}></input>
       <span className="input-group-btn">
         <button type="submit" className="btn btn-primary">Submit</button>
       </span>
    </form>
  </div>
  );
}
SearchBar.propTypes = {
  dispatch: PropTypes.func
};


export default connect()(SearchBar);
