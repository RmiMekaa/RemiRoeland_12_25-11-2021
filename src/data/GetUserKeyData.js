import { getDataFromAPI } from "./GetDataFromAPI";

/**
 * Fetch user Key data from API
 *
 * @param   {Number}  id  User Id
 *
 * @return  {Promise.<Object>}  User Key Data
 */
async function getUserKeyData(id) {
  let mainData = await getDataFromAPI(id, "main");
  const userKeyData = mainData.data.keyData;
  return userKeyData;
}

export { getUserKeyData };