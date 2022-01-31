import React from "react";
import PropTypes from 'prop-types';

/**
 * Template for component loading/error
 * @param   {Object}   props
 * @param   {boolean}  props.loading    loading status (boolean)
 * @param   {String}   props.error      null if there is no error
 * @param   {String}   props.className  component className
 * @component
 */
export default function TemplateErrorLoading(props) {
  const { loading, error, className } = props;
  return (
    <div className={className}>
      {loading ? templateLoading() : templateError(className, error)}
    </div>
  )
}

const templateLoading = () => {
  return <span className='loadingMsg'>Chargement des données...</span>
}

const templateError = (className, error) => {
  return (
    <p className='errorMsg'>
      <h2 className='errorMsg__feature'>{feature(className)}</h2>
      <span className='errorMsg__error'>Données indisponibles : {error}</span>
    </p >
  )
}

const feature = (className) => {
  let feature;
  switch (className) {
    case 'dailyActivity': feature = "Activité quotidienne"; break;
    case 'averageSessions': feature = "Durée moyenne des sessions"; break;
    case 'performance': feature = "Performance"; break;
    case 'score': feature = "Score"; break;
    case 'keyData': feature = "Chiffres clés"; break;
    default: return;
  }
  return feature;
}

TemplateErrorLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  className: PropTypes.string.isRequired
}