import { getDataFromAPI } from "./GetDataFromAPI";

/**
 * Fetch user informations data from API
 *
 * @param   {Number}  id  User Id
 *
 * @return  {Promise.<Object>}  User Informations
 */
async function getUserInfos(id) {
  let data = await getDataFromAPI(id, "main");
  return data.data.userInfos;
}

export { getUserInfos };