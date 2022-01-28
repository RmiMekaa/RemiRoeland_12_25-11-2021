import React from 'react';
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';

/**
 * React component for welcome message
 * @component
 */
export default function Welcome() {
  const { id } = useParams();
  const userId = parseInt(id);
  const { loading, error, data } = useFetch(userId, "userInfos");

  if (loading || error) {
    return (
      <div className='welcome'>
        <h1>Bonjour !</h1>
      </div>
    )
  }

  return (
    <div className="welcome">
      <h1>Bonjour <span className='userName'>{data.firstName}</span></h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}