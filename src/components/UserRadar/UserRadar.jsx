import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { getUserPerformance } from '../../data/GetUserPerformance';
import { displayComponentStatus } from "../../services/DisplayComponentStatus";

/**
 * React component for user performance radar (Chart: Radar)
 * @param {Object} props 
 * @param {Number} props.id User Id
 * @component
 */
function UserRadar(props) {
  const [userPerformance, setUserPerformance] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUserPerformance(props.id)
      .then(res => {
        setUserPerformance(res)
        setLoadingStatus(false)
      })
      .catch(err => {
        setError(true)
        setLoadingStatus(false)
      })
  }, [props.id])

  if (isLoading || error) {
    return (
      <div className='radar'>
        {displayComponentStatus(isLoading, error, "Performances")}
      </div>
    )
  }

  return (
    <div className='radar'>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }} cx="50%" cy="50%" outerRadius="70%" data={userPerformance} >
          <PolarGrid />
          <PolarAngleAxis dy={3} tick={{ fill: 'white', fontSize: 12 }} dataKey='kind' />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserRadar;