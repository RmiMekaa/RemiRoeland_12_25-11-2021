import React from 'react';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';
import PropTypes from 'prop-types';

function Score(props) {
  return (
    <div className='score'>
      <RadialBarChart width={200} height={200} innerRadius={80} outerRadius={80} barSize={10} data={props.data} startAngle={90} endAngle={-270}>
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar dataKey="value" cornerRadius={50} background={false} fill="#E60000" />
      </RadialBarChart>
      <CustomText score={props.data[0].value} />
    </div>
  );
}

const CustomText = ({ score }) => {
  return (
    <div className="score__text">
      <span className="score__text__value">{score}%</span>
      <span>de votre <br /> objectif</span>
    </div >
  )
}

Score.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Score;