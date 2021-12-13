import React, { useEffect, useState } from 'react';
import { getUserInfos } from '../../data/GetUserInfos';
import { displayComponentStatus } from "../../services/DisplayComponentStatus";

function Welcome(props) {
  const [userInfos, setUserInfos] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUserInfos(props.id)
      .then(res => {
        setUserInfos(res)
        setLoadingStatus(false)
      })
      .catch(err => {
        setError(true)
        setLoadingStatus(false)
      })
  }, [props.id])

  if (isLoading || error) {
    return (
      <div className='welcome'>
        {displayComponentStatus(isLoading, error, "Nom de l'utilisateur")}
      </div>
    )
  }

  return (
    <div className="welcome">
      <h1>Bonjour <span className='userName'>{userInfos.firstName}</span></h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Welcome;