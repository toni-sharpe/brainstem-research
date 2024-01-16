// import { API_DOMAIN } from 'util/Constant/SiteConstantList'

import RealAntiBiasJudgementSimData from 'real-data/RealAntiBiasJudgementSim.data'
import RealFullData from 'real-data/RealFull.data'
import RealPrimeSymptomListData from 'real-data/RealPrimeSymptomList.data'
import RealScatterData from 'real-data/RealScatter.data'

function baseApiCall ({
  endPoint,
  setData,
}) {
  return () => {
    async function getData() {
      // const data = await fetch(`${API_DOMAIN}${endPoint}`)
      // const dataJson = await data.json()
      // setData(dataJson)

      if (endPoint === 'HistogramMaker') {
        setData(RealFullData)
      }
      if (endPoint === 'Scatter') {
        setData(RealFullData)
      }
      if (endPoint === 'Gantt') {
        setData(RealFullData)
      }
      if (endPoint === 'TimeLine') {
        setData(RealFullData)
      }
      if (endPoint === 'PrimeSymptomList') {
        setData(RealPrimeSymptomListData)
      }
      if (endPoint === 'AntiBiasToolKit') {
        setData({
          biased_test_cases: RealAntiBiasJudgementSimData,
          prime_symptom_cases: RealPrimeSymptomListData,
          scatter_cases: RealScatterData,
        })
      }
    }
    getData()
  }
}

export default baseApiCall
