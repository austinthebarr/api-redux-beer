import React from 'react';
import Brewery from './Brewery';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BeerList = ({breweryList}) => {
  console.log(breweryList.name === undefined)
if(breweryList.name === undefined){
  return <div>Enter a city</div>
} else {
  {Object.keys(breweryList).map(brewId => {
    console.log(brew)
      let brew = breweryList[brewId];
      return (
        <Brewery
          name={brew.name}
          street={brew.street}
          city={brew.city}
          state={brew.state}
          website={brew.website}
          />
      );
    })}

}
}

BeerList.propTypes = {
  breweryFinder: PropTypes.object
};

const mapStateToProps = state => {
  return {
    breweryList: state.breweryFinder
  };
}

export default connect(mapStateToProps)(BeerList);
