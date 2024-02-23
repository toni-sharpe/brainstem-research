import DragGraphOutcomeCircle from 'components/DragGraphOutcomeCircle/DragGraphOutcomeCircle'
import SvgCircle from 'components/SvgCircle/SvgCircle'

function severityCircleMapper({
  data,
  zoom,
}) {
  return ([x, y], i) => {
    const { nonSevere, severe } = data[i][1]
    const commonCircleProps = { c: { x, y }, zoom: zoom / 10 }

    return (
      <g key={`g-${i}`}>
        { severe > 0 && (
          <DragGraphOutcomeCircle {...commonCircleProps} fill='#b22' r={severe + 20} />
        ) }
        { nonSevere > 0 && (
          <DragGraphOutcomeCircle {...commonCircleProps} fill='#13a' r={nonSevere + 20} />
        ) }
        { (<SvgCircle {...commonCircleProps} r={4} fill='#13a' /> ) }
      </g>
    )
  }
}

export default severityCircleMapper
