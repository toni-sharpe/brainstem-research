export function calcMapFillDataFromSparse({
  data,
  dataEnd,
  dataStart,
  end,
  hue = 240,
  start,
  step,
}) {
  const calced = {}

  data.map(countryRow => {
    let countryCode = countryRow[0]

    for (let x = (start - dataStart); x < (countryRow.length - (dataEnd - end)); x++) {
      if (!calced[dataStart+x]) {
        calced[dataStart+x] = []
      }

      let fill
      if (countryRow[x] > -1) {
        const l = 100 - countryRow[x] * 0.5
        fill = `hsl(${hue}, 80%, ${l}%)`
      } else {
        fill = 'url(#star)'
      }

      calced[dataStart+x][countryCode]
        ? calced[dataStart+x][countryCode].push([countryCode, { fill }])
        : calced[dataStart+x][countryCode] = [countryCode, { fill }]
    }
  })

  return calced
}
