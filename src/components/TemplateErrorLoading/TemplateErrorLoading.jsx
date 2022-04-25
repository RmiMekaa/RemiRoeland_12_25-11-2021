import React from "react";
import PropTypes from 'prop-types';

/**
 * React component for loading or error status
 * @param   {Object}   props
 * @param   {boolean}  props.loading    Loading status (boolean)
 * @param   {String}   props.error      Null if there is no error
 * @param   {String}   props.className  Component className
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
  switch (className) {
    case 'dailyActivity': return "Activité quotidienne";
    case 'averageSessions': return "Durée moyenne des sessions";
    case 'performance': return "Performance";
    case 'score': return "Score";
    case 'keyData': return "Chiffres clés";
    default: return;
  }
}

TemplateErrorLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  className: PropTypes.string.isRequired
}