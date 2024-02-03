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

      if (endPoint === 'PrimeSymptomList') {
        setData(RealPrimeSymptomListData)
      }
      else if (endPoint === 'AntiBiasToolKit') {
        setData({
          biased_test_cases: RealAntiBiasJudgementSimData,
          prime_symptom_cases: RealPrimeSymptomListData,
          scatter_cases: RealScatterData,
        })
      }
      else {
        setData(RealFullData)
      }
    }
    getData()
  }
}

export default baseApiCall
