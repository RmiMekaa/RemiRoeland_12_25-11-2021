import React from 'react';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';

function Score(props) {
  console.log(props.data);

  return (
    <div className='score'>
      <RadialBarChart width={200} height={200} innerRadius={80} outerRadius={80} barSize={10} data={props.data} startAngle={90} endAngle={-270}>
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar background dataKey="value" cornerRadius={50} fill="#E60000" />
        <text x={100} y={100} textAnchor="middle" dominantBaseline="middle" className="progress-label">{ }% de votre objectif</text>
      </RadialBarChart>
    </div>
  );
}

export default Score;