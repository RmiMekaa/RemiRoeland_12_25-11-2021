/**
 * @typedef {import('react').ReactElement}  ReactElement
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import KeyDataCard from '../KeyDataCard/KeyDataCard';
import { getUserKeyData } from '../../data/GetUserKeyData';
import { displayComponentStatus } from "../../services/DisplayComponentStatus";

/**
 * React Component for Key Data Section
 * @param {Object} props 
 * @returns { ReactElement }
 */
function KeyData(props) {
  const [userKeyData, setUserKeyData] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUserKeyData(props.id)
      .then(res => {
        setUserKeyData(res)
        setLoadingStatus(false)
      })
      .catch(err => {
        setError(true)
        setLoadingStatus(false)
      })
  }, [props.id])

  if (isLoading || error) {
    return (
      <div className='keyData'>
        {displayComponentStatus(isLoading, error, "Chiffres clés")}
      </div>
    )
  }

  return (
    <div className='keyData'>
      <KeyDataCard type="Calories" count={userKeyData.calorieCount} />
      <KeyDataCard type="Proteines" count={userKeyData.proteinCount} />
      <KeyDataCard type="Glucides" count={userKeyData.carbohydrateCount} />
      <KeyDataCard type="Lipides" count={userKeyData.lipidCount} />
    </div>
  );
}

KeyData.propTypes = {
  id: PropTypes.number.isRequired
};

export default KeyData;
