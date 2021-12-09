import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getUserInfos } from '../../data/dataManager';

function Welcome() {
  const { id } = useParams();
  const [userInfos, setUserInfos] = useState([]);
  const [isLoading, setLoadingStatus] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUserInfos(id)
      .then(res => {
        setUserInfos(res)
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
    <div className="welcome">
      <h1>Bonjour <span className='userName'>{userInfos.firstName}</span></h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Welcome;