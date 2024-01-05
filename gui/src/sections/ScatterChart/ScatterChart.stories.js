// ScatterChart.story.js
import APIScatterData from 'example-data/APIScatter.example-data'

import ScatterChart from './ScatterChart';

export default {
  component: ScatterChart,
};

const commonScatterChartProps = {
  ariaLabel: "Scatter",
  domain: [0, 65],
  keyPair: { x: 'prime_symptom_1', y: 'prime_symptom_3' },
  scatterData: APIScatterData,
  showStatData: false,
}

export const Primary = {
  render: () => <ScatterChart {...commonScatterChartProps} />,
};
