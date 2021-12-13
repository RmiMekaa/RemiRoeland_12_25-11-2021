import { getDataFromAPI } from "./GetDataFromAPI";

/**
 * Fetch user performance data from API and format it to match the component requirements
 *
 * @param   {Number}  id  User Id
 *
 * @return  {Promise.<Object>}  User Performances
 */
async function getUserPerformance(id) {
  let data = await getDataFromAPI(id, "performance");
  const userPerformance = data.data.data.map(item => {
    return {
      value: item.value,
      kind: translateKind(data.data.kind[item.kind])
    }
  });
  return userPerformance.reverse();
}

/**
 * Translate performance kind from EN to FR
 * @param  {String}   string   English kind
 * @return {String}            FR kind
 */
function translateKind(string) {
  switch (string) {
    case 'energy': return "energie";
    case 'strength': return "Force";
    case 'speed': return "Vitesse";
    case 'intensity': return "Intensité";
    default: return string;
  }
}

export { getUserPerformance };