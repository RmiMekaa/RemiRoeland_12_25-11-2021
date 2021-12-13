/**
 * @typedef {import('react').ReactElement}  ReactElement
 */
import React, { useEffect, useState } from 'react';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';
import { getUserScore } from '../../data/GetUserScore';
import { displayComponentStatus } from "../../services/DisplayComponentStatus";

function Score(props) {
  const [userScore, setUserScore] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUserScore(props.id)
      .then(res => {
        setUserScore(res)
        setLoadingStatus(false)
      })
      .catch(err => {
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
      <RadialBarChart width={200} height={200} innerRadius={80} outerRadius={80} barSize={10} data={userScore} startAngle={90} endAngle={-270}>
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar dataKey="value" cornerRadius={50} background={false} fill="#E60000" />
      </RadialBarChart>
      <CustomText score={userScore[0].value} />
    </div>
  );
}

/**
 * @param {Number} score User score
 * @return {ReactElement}
 */
const CustomText = ({ score }) => {
  return (
    <div className="score__text">
      <span className="score__text__value">{score}%</span>
      <span>de votre <br /> objectif</span>
    </div >
  )
}

export default Score;