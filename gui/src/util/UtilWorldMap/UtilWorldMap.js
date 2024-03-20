export function calcMapStyle({
  data,
  dataEnd,
  dataStart,
  end,
  hue = 140,
  start,
  step,
}) {
  const calced = {}

  data.forEach(countryRow => {
    let countryCode = countryRow[0]

    for (let x = (start - dataStart); x < (countryRow.length - (dataEnd - end)); x++) {
      if (!calced[dataStart+x]) {
        calced[dataStart+x] = []
      }

      let fill, stroke
      if (countryRow[x] > -1) {
        const fl = 100 - countryRow[x] * 0.35
        const sl = 60 - countryRow[x] * 0.4
        fill = `hsl(${hue}, 80%, ${fl}%)`
        stroke = `hsl(${hue}, 10%, ${sl}%)`
      } else {
        fill = 'url(#star)'
      }

      calced[dataStart+x][countryCode]
        ? calced[dataStart+x][countryCode].push([countryCode, { fill, stroke }])
        : calced[dataStart+x][countryCode] = [countryCode, { fill, stroke }]
    }
  })

  return calced
}

export function calcFirstScreenLoadYear({
  currentYear,
  startYear,
  endYear,
}) {
  let firstLoadYear = currentYear || startYear
  if (firstLoadYear < startYear) {
    firstLoadYear = startYear
  }
  if (firstLoadYear > endYear) {
    firstLoadYear = endYear
  }
  return firstLoadYear
}
