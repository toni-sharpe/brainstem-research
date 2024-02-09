import { API_DOMAIN } from 'util/Constant/SiteConstantList'

import RealAntiBiasJudgementSimData from 'real-data/RealAntiBiasJudgementSim.data'
import RealFullData from 'real-data/RealFull.data'
import RealPrimeSymptomListData from 'real-data/RealPrimeSymptomList.data'
import RealScatterData from 'real-data/RealScatter.data'

const USE_API = false

function baseApiCall ({
  endPoint,
  setData,
}) {
  return () => {
    async function getData() {
      if (USE_API) {
        const data = await fetch(`${API_DOMAIN}${endPoint}`)
        const dataJson = await data.json()
        setData(dataJson)
      } else {
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
    }
    getData()
  }
}

export default baseApiCall
