import React from 'react';
import KeyDataCard from '../KeyDataCard/KeyDataCard';
import TemplateErrorLoading from "../TemplateErrorLoading/TemplateErrorLoading";
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router';

/**
 * React component for key data section
 * @component
 */
export default function KeyData() {
  const { id } = useParams();
  const userId = parseInt(id);
  const { loading, error, data } = useFetch(userId, "keyData");

  if (loading || error) return <TemplateErrorLoading loading={loading} error={error} className='keyData' />

  return (
    <section className='keyData'>
      <h2 className='sr-only'>keyData</h2>
      <KeyDataCard type="Calories" count={data.calorieCount} />
      <KeyDataCard type="Proteines" count={data.proteinCount} />
      <KeyDataCard type="Glucides" count={data.carbohydrateCount} />
      <KeyDataCard type="Lipides" count={data.lipidCount} />
    </section>
  )
}