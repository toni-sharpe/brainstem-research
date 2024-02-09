import { prop, sortBy } from 'ramda'
import i18next from 'util/i18next/i18next'
import React from 'react'

import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'

import './PathologicalEventList.scss'

function PathologicalEventList({ data }) {
  if (!data || data?.length === 0) { return null }
  const eventList = sortBy(prop('pathological_event_id'))(data)

  return (
    <SubPageWrapper heading={i18next.t('Home.eventPanelLabel')}>
      <table className='pathological-event-list' key='event-table'>
        <tbody>
          { eventList.map((event, i) => {

            return (
              [
                i % 30 === 0 && ([
                  <tr key={`${i}-br-1`}/>,
                  <tr key={`${i}-br-2`}/>,
                  <tr
                    className='heading'
                    key={`${i}-data-heading`}
                  >
                    <td>N.</td>
                    <td>ID</td>
                    <td>Pat.</td>
                    <td>PN</td>
                    <td>Doc.</td>
                    <td>Outcome</td>
                    <td>Et'ogy</td>
                    <td>C. E1</td>
                    <td>C. E4</td>
                    <td>Dr</td>
                    <td>C. T2</td>
                    <td>C. T3</td>
                    <td>1|2</td>
                    <td>Sums</td>
                    <td>Mild</td>
                    <td>Prime</td>
                    <td>Severe</td>
                    <td>Duration</td>
                  </tr>
                ]),
                <tr
                  className={`${event.outlier === 'DUB' ? 'not-so-' : ''}sure`}
                  key={`${i}-data-row`}
                >
                  <td className='num'>{i +1}</td>
                  <td className='num'>{event.pathological_event_id}</td>
                  <td className='num'>{event.patient_id}</td>
                  <td className='num'>{event.event_count}</td>
                  <td>{event.consultant_doctor}</td>
                  <td>{event.outcome} | {event.outcome_type}</td>
                  <td>{event.etiology}</td>
                  <td>{event.care_equipment_1}</td>
                  <td>{event.care_equipment_4}</td>
                  <td className='num'>{event.care_technique_1}</td>
                  <td>{event.care_technique_2}</td>
                  <td>{event.care_technique_3}</td>
                  <td className='center'>{event.observed_movement_response_1 ? 'S' : '-'}|{event.observed_movement_response_2 ? 'R' : '-'}</td>
                  <td className='num'>
                    <div className='list'>
                      <span className='third'>{Math.round(event.pathological_severity)}</span>|
                      <span className='third'>{Math.round(event.care_error_level)}</span>|
                      <span className='third'>{Math.round(event.overall_patient_rating)}</span>
                    </div>
                  </td>
                  <td className='num'>
                    <div className='list'>
                      <span className='quarter mild-1'>{event.mild_symptom_1}</span>|
                      <span className='quarter mild-1'>{event.mild_symptom_1_duration}</span>|
                      <span className='quarter mild-2'>{event.mild_symptom_2}</span>|
                      <span className='quarter mild-2'>{event.mild_symptom_2_duration}</span>
                    </div>
                  </td>
                  <td className='num'>
                    <div className='list'>
                      <span className='seventh prime-1'>{event.prime_symptom_1}</span>|
                      <span className='seventh prime-1'>{event.prime_symptom_1_duration}</span>|
                      <span className='seventh prime-2'>{event.prime_symptom_2}</span>|
                      <span className='seventh prime-2'>{event.prime_symptom_2_duration}</span>|
                      <span className='seventh prime-3'>{event.prime_symptom_3}</span>|
                      <span className='seventh prime-3'>{event.prime_symptom_3_duration}</span>|
                      <span className='seventh'>{event.first_prime_symptom_type}</span>
                    </div>
                  </td>
                  <td className='num'>
                    <div className='list'>
                      <span className='third'>{event.fatal_symptom_1}</span>|
                      <span className='third'>{event.fatal_symptom_2}</span>|
                      <span className='third'>{event.time_of_death}</span>
                    </div>
                  </td>
                  <td className='num'>
                    <div className='list'>
                      <span className='third'>{event.pathogenesis_duration}</span>|
                      <span className='third'>{event.recovery_duration}</span>|
                      <span className='third'>{event.pathological_event_duration}</span>
                    </div>
                  </td>
                </tr>
              ]
            )
          })}
        </tbody>
      </table>
    </SubPageWrapper>
  )
}

export default PathologicalEventList;
