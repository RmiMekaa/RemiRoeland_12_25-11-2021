export function displayComponentStatus(isLoading, error, componentName) {
  if (isLoading) return templateLoading();
  if (error) return templateError(componentName);
}

function templateLoading() {
  return (
    <span className='loadingMsg'>Chargement des données...</span>
  )
}

function templateError(componentName) {
  return (
    <span className='errorMsg'>Erreur, nous n'avons pas réussi à charger vos données pour: {componentName}</span>
  )
}
