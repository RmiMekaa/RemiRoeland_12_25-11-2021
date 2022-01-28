import React from 'react';
import PropTypes from 'prop-types';
import caloriesIcon from '../../assets/calories-icon.png';
import carbsIcon from '../../assets/carbs-icon.png';
import lipidIcon from '../../assets/lipid-icon.png';
import proteinIcon from '../../assets/protein-icon.png';

/**
 * React component for Key Data Card
 * @param {Object} props 
 * @param {String} props.type key data type
 * @param {Number} props.count amount
 * @component
 */
export default function KeyDataCard(props) {
  let icon, unity;
  switch (props.type) {
    case 'Calories': icon = caloriesIcon; unity = 'Kcal'; break;
    case 'Proteines': icon = proteinIcon; unity = 'g'; break;
    case 'Glucides': icon = carbsIcon; unity = 'g'; break;
    case 'Lipides': icon = lipidIcon; unity = 'g'; break;
    default: return;
  }

  return (
    <div className='nutrientsCard'>
      <img className='nutrientsCard__icon' src={icon} alt='' />
      <div className='nutrientsCard__content'>
        <span className='nutrientsCard__content__count'>{props.count}{unity}</span>
        <span className='nutrientsCard__content__type'>{props.type}</span>
      </div>
    </div>
  );
}

KeyDataCard.propTypes = {
  count: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}