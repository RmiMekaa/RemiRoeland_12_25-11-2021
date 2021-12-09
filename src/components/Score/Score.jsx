/**
 * @typedef {import('react').ReactElement}  ReactElement
 */
import React, { useEffect, useState } from 'react';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';
import { useParams } from 'react-router';
import { getUserScore } from '../../data/dataManager';

function Score() {
  const { id } = useParams();
  const [userScore, setUserScore] = useState({});
  const [isLoading, setLoadingStatus] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUserScore(id)
      .then(res => {
        setUserScore(res)
        setLoadingStatus(false)
      })
      .catch(err => {
        setError(true)
        setLoadingStatus(false)
      })
  }, [id])

  if (isLoading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>Erreur</div>
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