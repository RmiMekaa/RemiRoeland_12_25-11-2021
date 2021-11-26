import React from 'react';
import PropTypes from 'prop-types';

function Welcome(props) {
  return (
    <div className="welcome">
      <h1>Bonjour <span className='userName'>{props.name}</span></h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Welcome;