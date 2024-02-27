// ScatterChart.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import APIScatterData from 'example-data/APIScatter.example-data'

import ScatterChart from './ScatterChart';

export default {
  component: ScatterChart,
};

const commonScatterChartProps = {
  ariaLabel: "Scatter",
  keyPair: { x: 'prime_symptom_1', y: 'prime_symptom_3' },
  scatterData: APIScatterData,
  showStatData: false,
}

export const Primary = {
  render: () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '1100px' }}>
        <div style={{ height: '80%', width: '80%' }}>
          <ScatterChart {...commonScatterChartProps} />
        </div>
      </div>
    )
  }
};
