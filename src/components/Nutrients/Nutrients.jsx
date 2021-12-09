import React, { useEffect, useState } from 'react';
import NutrientsCard from '../NutrientCard/NutrientCard';
import { getUserKeyData } from '../../data/dataManager';
import { useParams } from 'react-router';

function Nutrients() {
  const { id } = useParams();
  const [userKeyData, setUserKeyData] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUserKeyData(id)
      .then(res => {
        setUserKeyData(res)
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
    <div className='nutrients'>
      <NutrientsCard type="Calories" count={userKeyData.calorieCount} />
      <NutrientsCard type="Proteines" count={userKeyData.proteinCount} />
      <NutrientsCard type="Glucides" count={userKeyData.carbohydrateCount} />
      <NutrientsCard type="Lipides" count={userKeyData.lipidCount} />
    </div>
  );
}

export default Nutrients;
