import { symmetricDifference } from 'ramda'
import React from 'react'

import DragGraph from 'sections/DragGraph/DragGraph'
import Histogram from 'sections/Histogram/Histogram'
import MapObjectDetailed from 'components/MapObjectDetailed/MapObjectDetailed'
import WorldBorderList from 'util/Constant/WorldBorderList'
import { calcAccessibleHue } from 'util/UtilHue/UtilHue'
import { calcZoomC } from 'util/UtilMapCountry/UtilMapCountry'


function tempTestMapperFn({
  currentCountryIdList,
  currentYear,
  mapDetailData,
  setCurrentCountryList,
  zoom,
}) {
  return function(currentCountryId) {
    const data = mapDetailData[currentCountryId]

    const {
      countryCenter,
      labelCenter,
      countryName,
    } = WorldBorderList[currentYear][currentCountryId]

    const mapDetailElement = data.dragData
      ? DragGraph
      : Histogram

    let mapDetailProps
    let h
    let w

    if (data && data?.histogramBarGroupList?.length) {
      const { length } = data.histogramBarGroupList
      const totalBars = length * data.barCountPerBlock
      const barWidth = 120 / totalBars

      h = 165
      w = barWidth * totalBars + ((barWidth - 1) * data.barMargin / 100)

      mapDetailProps = {
        hueFn: calcAccessibleHue(),
        isPopulated: true,
        translationSet: { barList: [], groupBy: 'ty' },
        histogramHeight: 12,
        widthOverride: w,
      }
    }

    if (data && data?.dragData?.length) {
      h = 140
      w = 125

      mapDetailProps = {
        buttonSize: 'small-tiny',
        dragGraphLabelSize: 20,
        dragGraphZoomList: [0.2, 0.5, 1, 2],
        graphKey: currentCountryId,
        includeExtreme: true,
        isPopulated: true,
        isOnMap: true,
        labelValList: data.dragData,
        pointButtonLabel: 'map',
        scale: w,
        scaleToLabelRatio: 2.5,
        scaleR: w / 2,
        showZoomLabel: false,
        showExtremeButton: false,
        zDefault: 0.2,
      }
    }

    const mapDetailC = calcZoomC({
      c: countryCenter || labelCenter || {},
      zoom
    })

    return (
      <MapObjectDetailed
        c={mapDetailC}
        closeOnClick={() => {
          setCurrentCountryList(symmetricDifference(
            currentCountryIdList,
            [currentCountryId],
          ))
        }}
        countryId={currentCountryId}
        countryName={countryName}
        isPopulated={mapDetailProps?.isPopulated}
        h={h}
        w={w}
      >
        {data && React.createElement(mapDetailElement, {
          ...mapDetailProps,
          ...data,
        })}
      </MapObjectDetailed>
    )
  }
}

export default tempTestMapperFn
