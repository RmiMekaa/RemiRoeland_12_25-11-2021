import { useState, useEffect } from "react"
import { getMockData } from "../data/getMockData"
import { getDataFromAPI } from "../data/GetDataFromAPI"
import formatData from "../data/formatData"

//Set to false to use mock data
const api = true;
console.log(api ? 'Fetch from API' : 'Mock Data');

/**
 * Hook to get data
 * @param {Number} userId User Id
 * @param {String} type Type of requested data. Available so far: "averageSessions" | "performance" | "activity" | "keyData" | "userInfos" | "score"
 * @return {Object} { loading, error, data }
 */
export function useFetch(userId, type) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!api) {
      let mockData = getMockData(userId, type);
      let formatedData = formatData(mockData, type)
      setData(formatedData)
      setLoading(false);
      return;
    }
    getDataFromAPI(userId, type)
      .then((res) => {
        setData(formatData(res, type));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message ? err.message : 'Error');
        setLoading(false);
      })
  }, [userId, type])

  return { loading, error, data }
}