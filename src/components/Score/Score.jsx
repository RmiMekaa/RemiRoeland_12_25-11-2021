import TemplateErrorLoading from "../TemplateErrorLoading/TemplateErrorLoading";
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router';
import React from 'react';

/**
 * React Component for user score (Chart: RadialBarChart)
 * @component
 */
export default function Score() {
  const { id } = useParams();
  const userId = parseInt(id);
  const { loading, error, data } = useFetch(userId, "score");

  if (loading || error) return <TemplateErrorLoading loading={loading} error={error} className='score' />

  return (
    <section className='score'>
      <h2 className='score__heading'>Score</h2>
      <RadialBarChart width={200} height={200} innerRadius={80} outerRadius={80} barSize={10} data={data} startAngle={-270} endAngle={90}>
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar dataKey="value" cornerRadius={50} background={false} fill="#E60000" />
      </RadialBarChart>
      <CustomText score={data[0].value} />
    </section>
  );
}

/**
 * Custom component to display user score
 * @param {Object} score User score
 * @component
 */
const CustomText = (score) => {
  return (
    <div className="score__text">
      <span className="score__text__value">{score.score}%</span>
      <span>de votre <br /> objectif</span>
    </div >
  )
}