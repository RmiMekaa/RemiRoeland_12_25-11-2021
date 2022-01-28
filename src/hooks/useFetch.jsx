import { useState, useEffect } from "react"
import { getMockData } from "../data/getMockData"
import { getDataFromAPI } from "../data/getDataFromAPI"
import formatData from "../data/formatData"

//Set to false to use mock data
const api = true;
api ? console.log('Fetch from API') : console.log('Mock Data');

/**
 * Hook to get data
 * @param {Number} userId 
 * @param {String} type type of requested data. Available so far: "averageSessions" | "performance" | "activity" | "keyData" | "userInfos" | "score"
 * @return {Object} 
 */
export const useFetch = (userId, type) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!api) setData(formatData(getMockData(userId, type), type))
    getDataFromAPI(userId, type)
      .then((res) => {
        const formatedData = formatData(res, type);
        setData(formatedData)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message ? err.message : 'Error')
        setLoading(false)
      })
  }, [userId, type])

  return { loading, error, data }
}