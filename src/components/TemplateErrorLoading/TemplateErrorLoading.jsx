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
      {loading ? templateLoading() : templateError(error)}
    </div>
  )
}

const templateLoading = () => {
  return <span className='loadingMsg'>Chargement des données...</span>
}

const templateError = (error) => {
  return <span className='errorMsg'>Désolé, nous n'avons pas réussi à charger vos données. <br /> (Erreur: {error})</span>
}

TemplateErrorLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  className: PropTypes.string.isRequired
}