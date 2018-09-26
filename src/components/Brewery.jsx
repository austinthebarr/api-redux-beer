import React from 'react';
import PropTypes from 'prop-types'

const Brewery = (props) => {
  return(
    <div className="card cardSize">
      <style jsx>{`
        .cardSize{
          width: 18rem;

        `}</style>
      <div className="card-header">
        {props.name}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.street}</li>
        <li className="list-group-item">{props.city}</li>
        <li className="list-group-item">{props.state}</li>
        <li className="list-group-item">{props.website}</li>
      </ul>
    </div>
  );
}

Brewery.propTypes = {
  name: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  website: PropTypes.string
};

export default Brewery;
