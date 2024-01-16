import React from 'react'
import { filter, length, pipe, pluck, map } from 'ramda'
import { sampleCorrelation } from 'simple-statistics'

import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import { CORRELATION_HEATMAP_FIELD_LIST } from 'util/Constant/BaseConstantList'

function CorrelationHeatmap({ data }) {
  const resultGrid = []

  const squareSize = CORRELATION_HEATMAP_FIELD_LIST.length * 20

  function boolMap(val) {
    return val === true
      ? 30
      : val === false
        ? 15
        : 0
  }

  const mappings = {
    consultant_doctor: val => {
      if (val === 'GAL') return 3;
      if (val === 'NEM') return 6;
      if (val === 'AMT') return 9;
      if (val === 'BOD') return 12;
      if (val === 'AGG') return 15;
      if (val === 'FIR') return 18;
      if (val === 'COC') return 21;
      if (val === 'CRW') return 24;
      if (val === 'RPV') return 27;
      if (val === 'HPR') return 30;
      return 0
    },
    care_site: val => {
      if (val === 'RPV') return 7;
      if (val === 'THM') return 15;
      if (val === 'BPF') return 22;
      if (val === 'FIR') return 30;
      return 0
    },
    care_equipment_1: val => {
      if (val === 'THO') return 3;
      if (val === 'THH') return 6;
      if (val === 'TIP') return 9;
      if (val === 'SCW') return 12;
      if (val === 'INH') return 15;
      if (val === 'HIC') return 18;
      if (val === 'STR') return 21;
      if (val === 'IHO') return 24;
      if (val === 'UNK') return 27;
      if (val === 'ELC') return 30;
      return 0
    },
    care_equipment_2: boolMap,
    care_equipment_3: boolMap,
    care_equipment_4: val => {
      if (val === 'FRO') return 3;
      if (val === 'FRL') return 6;
      if (val === 'LFT') return 9;
      if (val === 'BKL') return 12;
      if (val === 'BCK') return 15;
      if (val === 'BKR') return 18;
      if (val === 'RGH') return 21;
      if (val === 'FRR') return 24;
      if (val === 'UNK') return 27;
      if (val === 'MLT') return 30;
      return 0
    },
    care_technique_2: val => {
      if (val === 'TIP') return 3;
      if (val === 'STD') return 6;
      if (val === 'KNE') return 9;
      if (val === 'UNK') return 12;
      if (val === 'CMP') return 15;
      if (val === 'CHD') return 18;
      if (val === 'FFT') return 21;
      if (val === 'CTP') return 24;
      if (val === 'LIE') return 27;
      if (val === 'SIT') return 30;
      return 0
    },
    care_technique_3: val => {
      if (val ==='NLF') return 2;
      if (val ==='WIN') return 4;
      if (val ==='NAF') return 6;
      if (val ==='LWD') return 8;
      if (val ==='TID') return 10;
      if (val ==='UNK') return 12;
      if (val ==='DRP') return 14;
      if (val ==='LFT') return 16;
      if (val ==='NLT') return 18;
      if (val ==='')    return 0;
      if (val ==='KNR') return 22;
      if (val ==='LPV') return 24;
      if (val ==='NTS') return 26;
      if (val ==='LWA') return 28;
      if (val ==='RPH') return 30;
      return 0
    },
    care_technique_4: boolMap,
    care_technique_5: boolMap,
    care_technique_6: boolMap,
    care_technique_7: boolMap,
    etiology: val => {
      if (val === 'UNK') return 5;
      if (val === 'LWD') return 10;
      if (val === 'STO') return 15;
      if (val === 'FAN') return 20;
      if (val === 'WIN') return 25;
      if (val === 'SIT') return 30;
      return 0
    },
    event_record_is_complete: boolMap,
    first_prime_symptom_type: val => {
      if (val === 'DCB') return 30;
      if (val === 'DCT') return 15;
      return 0
    },
    outcome: val => {
      if (val === 'SEV') return 30;
      if (val === 'NSV') return 15;
      return 0
    },
    outcome_type: val => {
      if (val === 'CID') return 5;
      if (val === 'HOM') return 10;
      if (val === 'DNT') return 15;
      if (val === 'PID') return 20;
      if (val === 'AMT') return 25;
      if (val === 'FSN') return 30;
      return 0
    },
    outlier: boolMap,
    presented_gender: val => {
      if (val === 'M') return 0;
      if (val === 'F') return 15;
      return 0
    },
    prime_symptom_any: boolMap,
    source_country: val => {
      if (val === 'US') return 10;
      if (val === 'RU') return 20;
      if (val === 'TW') return 30;
      return 0
    },
  }

  function prepPipe({ field }) {
    return pipe(
      pluck(field),
      map(v => {
        return mappings[field]
          ? mappings[field](v)
          : !v
            ? 0
            : v
      }),
    )
  }

  const nPipe = pipe(
    filter(dy => !!dy),
    length
  )

  function outputEmpty({ i }) {
    return (
      <div
        style={{
          display: 'inline-flex',
          height: '20px',
          width: '20px',
          backgroundColor: '#ddd'
        }}
      > </div>
    )
  }

  function outputHigherCorrelation({ atomAbs }) {
    const uiVal = (atomAbs * 10).toFixed(0)

    return (
      <span
        style={{
          color: `#ff${(Math.abs(uiVal * 2 - 8)).toString(16)}`,
          fontSize: '14px',
          fontWeight: atomAbs >= 0.7
            ? 'bold'
            : 'normal'
        }}
      >
        {uiVal}
      </span>
    )
  }

  function rgb({ atom, atomAbs }) {
    return [
      0,
      atom > 0
        ? 256 - (256 * atom)
        : 0,
      atom < 0
        ? 256 - (256 * atomAbs)
        : 0
    ].join(',')
  }

  function opc({ atomAbs }) {
    return atomAbs >= 0.3
      ? '1'
      : `${(1 - (1 - atomAbs * 1.6))}`
  }

  CORRELATION_HEATMAP_FIELD_LIST.forEach(function (fieldX, x) {
    resultGrid[x] = []
    const dataX = prepPipe({ field: fieldX })(data)
    if (dataX.length < 2) {
      return
    }
    const nx = nPipe(dataX)
    CORRELATION_HEATMAP_FIELD_LIST.forEach(function(fieldY, y) {
      if (fieldX === fieldY) {
        resultGrid[x][y] = ''
        return
      }
      const dataY = prepPipe({ field: fieldY })(data)

      if (dataY.length < 2) {
        return
      }

      resultGrid[x][y] = {
        x: fieldX,
        nx,
        y: fieldY,
        ny: nPipe(dataY),
        atom: sampleCorrelation(dataX, dataY).toFixed(2)
      }
    })
  })

  const outerDivStyle = { width: `${squareSize}px`, height: `${squareSize}px`, display: 'inline-block' }
  const innerDivStyle = { width: `${squareSize}px`, height: '20px', display: 'flex' }

  const markIndices = [
    0,
    11,
    17,
    26,
    35,
    48,
    50,
    57,
  ]

  const segments = [null, 217, 15, 270, 115, 325, 170, 60]

  let counter = 0
  function keyedBGColor({ i, cx }) {
    if (markIndices.includes(cx) && i === 0) {
      counter ++
    }
    return i === 0
      ? { width: '20px', backgroundColor: `hsla(${segments[counter]}, 100%, 50%, 0.8)` }
      : { width: '2px', backgroundColor: '#555' }
  }

  function liStyles({ i }) {
    return ({
      borderBottom: `8px solid hsla(${segments[i]}, 100%, 50%, 0.8)`,
      marginRight: '20px',
      padding: '6px 10px 3px 10px',
      textAlign: 'right',
    })
  }

  return (
    <PageDetailWrapper
      count={data?.length}
      i18nBase='CorrelationHeatmap'
    >
      <div className='row-layout space-children--wide'>
        <ul key='list' className='column-layout space-children--column'>
          <li key={'k-1'} style={{ ...liStyles({ i: 1 }), marginBottom: '12px' }}>Technique/equipment</li>
          <li key={'k-2'} style={{ ...liStyles({ i: 2 }), marginBottom: '12px' }}>Doctor/patient</li>
          <li key={'k-3'} style={{ ...liStyles({ i: 3 }), marginBottom: '12px' }}>Disease overall</li>
          <li key={'k-4'} style={{ ...liStyles({ i: 4 }), marginBottom: '12px' }}>Mild pathogenesis</li>
          <li key={'k-5'} style={{ ...liStyles({ i: 5 }), marginBottom: '12px' }}>Prime pathogenesis</li>
          <li key={'k-6'} style={{ ...liStyles({ i: 6 }), marginBottom: '12px' }}>Recovery</li>
          <li key={'k-7'} style={{ ...liStyles({ i: 7 }) }}>Agonal pathogenesis</li>
        </ul>
        <div key='data' style={outerDivStyle}>
          { resultGrid.map(function(resultX, cx) {
            return (
              <div key={cx}>
                { markIndices.includes(cx) && (
                  <div
                    style={{ width: `${squareSize}px`, height: '2px', display: 'flex', backgroundColor: '#555' }}
                  />
                ) }
                <div style={innerDivStyle}>
                  {
                    resultX.map(function({ nx, ny, x, y, atom }, cy) {
                      const atomAbs = Math.abs(atom)
                      const title = !isNaN(atom) && `${x} (N=${nx}) & ${y} (N=${ny}) | cor: ${atom}`
                      return (
                          <div key={`${cx}-${cy}`}>
                            { markIndices.includes(cy) && (
                              <div
                                style={{ height: '20px', display: 'inline-flex', ...keyedBGColor({ i: cy, cx }) }}
                              />
                            ) }
                            { isNaN(atom)
                              ? outputEmpty({ i: cy, k: `${cx}-${cy}` })
                              : (
                                  <div
                                    title={title}
                                    style={{
                                      alignItems: 'center',
                                      backgroundColor: `rgba(${rgb({ atom, atomAbs })}, 1)`,
                                      display: 'inline-flex',
                                      height: '20px',
                                      justifyContent: 'center',
                                      opacity: opc({ atomAbs }),
                                      width: '20px',
                                    }}
                                  >
                                    {
                                      atomAbs >= 0.05
                                        ? outputHigherCorrelation({ atomAbs })
                                        : ''
                                    }
                                  </div>
                              )
                            }
                            { cy === resultX.length -1 && (<div style={{ width: '2px', height: '20px', display: 'inline-flex', backgroundColor: '#555' }} />) }
                          </div>
                        )
                    })
                  }
                </div>
                { cx === resultX.length -1 && (<div style={{ width: `${squareSize}px`, height: '2px', display: 'flex', backgroundColor: '#555' }} />) }
              </div>
            )
          })}
        </div>
      </div>
    </PageDetailWrapper>
  );
}

export default CorrelationHeatmap;
