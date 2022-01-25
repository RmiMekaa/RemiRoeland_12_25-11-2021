import React, { useEffect, useState } from 'react';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';
import PropTypes from 'prop-types';
import { getData } from '../../data/dataManager';
import { displayComponentStatus } from "../../services/DisplayComponentStatus";

/**
 * React Component for user score (Chart: RadialBarChart)
 * @param {Object} props 
 * @param {Number} props.id
 * @component
 */
function Score(props) {
  const [userScore, setUserScore] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData(props.id, "score")
      .then(res => {
        setUserScore(res)
        setLoadingStatus(false)
      })
      .catch(err => {
        console.error(err)
        setError(true)
        setLoadingStatus(false)
      })
  }, [props.id])

  if (isLoading || error) {
    return (
      <div className='score'>
        {displayComponentStatus(isLoading, error, "Score")}
      </div>
    )
  }

  return (
    <div className='score'>
      <h2 className='score__heading'>Score</h2>
      <RadialBarChart width={200} height={200} innerRadius={80} outerRadius={80} barSize={10} data={userScore} startAngle={-270} endAngle={90}>
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar dataKey="value" cornerRadius={50} background={false} fill="#E60000" />
      </RadialBarChart>
      <CustomText score={userScore[0].value} />
    </div>
  );
}

/**
 * Custom component to display user score
 * @param {Object} score User score
 * @component
 */
const CustomText = ({ score }) => {
  return (
    <div className="score__text">
      <span className="score__text__value">{score}%</span>
      <span>de votre <br /> objectif</span>
    </div >
  )
}

Score.propTypes = {
  id: PropTypes.number.isRequired
};


export default Score;