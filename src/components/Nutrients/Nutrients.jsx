import React from 'react';
import NutrientsCard from '../NutrientCard/NutrientCard';
import PropTypes from 'prop-types';

function Nutrients(props) {

  return (
    <div className='nutrients'>
      <NutrientsCard type="Calories" count={props.data.calorieCount} />
      <NutrientsCard type="Proteines" count={props.data.proteinCount} />
      <NutrientsCard type="Glucides" count={props.data.carbohydrateCount} />
      <NutrientsCard type="Lipides" count={props.data.lipidCount} />
    </div>
  );
}

Nutrients.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Nutrients;
