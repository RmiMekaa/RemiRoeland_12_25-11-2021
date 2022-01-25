import { getMockData } from "./getMockData";
import { getDataFromAPI } from "./getDataFromAPI";
import { formatData } from "./formatData";

//Set to false to use mock data
const api = true;

/**
 * Get the requested data.
 * If api is set to false, get mockData.
 * Else, fetch data from API
 *
 * @param   {number}  id    User id
 * @param   {String}  type  Requested data type
 *
 * @return  {Promise.<Object>}  Formated Data
 */
export async function getData(id, type) {
  let data;
  if (!api) data = getMockData(id, type);
  else data = await getDataFromAPI(id, type);
  return formatData(data, type);
}