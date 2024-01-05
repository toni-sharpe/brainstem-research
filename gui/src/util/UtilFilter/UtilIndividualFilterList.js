export function confirmedActorFilter({ currentFilterList }) {
  return ({ consultant_doctor }) => {
    if (!currentFilterList.confirmedActors) return true
    return [
      'FIR',
      'CRW',
      'AGG',
      'NEM',
      'RPV',
      'GAL',
      'BOD',
      'DEE',
    ].includes(consultant_doctor)
  }
}

export function removeDubiousFilter({ currentFilterList }) {
  return ({ outlier }) => {
    if (!currentFilterList?.rmDubious) return true
    return outlier === false
  }
}

export function fatalFilter({ currentFilterList }) {
  return ({ outcome }) => {
    if (!currentFilterList.fatal && !currentFilterList.nonFatal) { return true }
    if (currentFilterList.fatal && outcome === 'FAT') { return true }
    if (currentFilterList.nonFatal && outcome === 'NFT') { return true }
    return false
  }
}

export function fjpFilter({ currentFilterList }) {
  return ({ consultant_doctor }) => {
    if (!currentFilterList.fjp) return true
    return consultant_doctor === 'FIR'
  }
}

export function pathologicalEventDurationFilter({ currentFilterList }) {
  return ({ pathological_event_duration }) => {
    const totHangTime = parseInt(pathological_event_duration, 10)
    if (totHangTime >= 60 || (!currentFilterList.longTime && !currentFilterList.moderateTime)) return true
    return (
      currentFilterList.longTime
      && 
      totHangTime >= 60
    ) || (
      currentFilterList.moderateTime
      && 
      totHangTime >= 30
    )
  }
}

export function hardEventOnlyFilter({ currentFilterList }) {
  return ({
    fatal_symptom_1,
    fatal_symptom_2,
    first_prime_symptom,
    mild_symptom_1_2,
    mild_symptom_2,
    prime_symptom_1,
    prime_symptom_2,
    prime_symptom_3,
    mild_symptom_1_duration,
  }) => {
    if (!currentFilterList?.hardEventOnly) return true
    if (
      !fatal_symptom_1
      &&
      !fatal_symptom_2
      &&
      !first_prime_symptom
      &&
      !prime_symptom_1
      &&
      !prime_symptom_2
      &&
      !prime_symptom_3
      &&
      (
        mild_symptom_1_duration <= 15
        ||
        !mild_symptom_1_duration
      )
    ) return false

    return true
  }
}

export function hardPrimeSymptomFilter({ currentFilterList }) {
  return ({ prime_symptom_level }) => {
    if (!currentFilterList.hardPrimeSymptom) return true
    return parseInt(prime_symptom_level, 10) >= 4
  }
}

export function primeSymptomFilter({ currentFilterList }) {
  return ({ first_prime_symptom_type }) => {
    if (!currentFilterList.primeSymptomType) return true
    return first_prime_symptom_type !== null
  }
}

export function secondOrMore({ currentFilterList }) {
  return ({ event_number }) => {
    if (!currentFilterList.secondOrMore) return true
    return parseInt(event_number, 10) >= 2
  }
}

export function thirdOrMore({ currentFilterList }) {
  return ({ event_number }) => {
    if (!currentFilterList.thirdOrMore) return true
    return parseInt(event_number, 10) >= 3
  }
}
