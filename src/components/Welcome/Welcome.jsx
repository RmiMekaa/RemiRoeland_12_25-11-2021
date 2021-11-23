import React from 'react';
import PropTypes from 'prop-types';

function Welcome({ name }) {
    return (
      <div className="welcome">
        <h1>Bonjour <span className='userName'>{name}</span></h1>  
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>    
      </div>
    );
}

Welcome.propTypes = {
  name: PropTypes.string,
};

export default Welcome;