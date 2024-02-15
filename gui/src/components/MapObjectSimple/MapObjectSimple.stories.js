// MapObjectSimple.story.js
import MapObjectSimple from './MapObjectSimple';

export default {
  component: MapObjectSimple,
};

const baseMapObjectSimpleProps = {
  k: 'zoom',
  stateFn: () => {}
}

export const Primary = {
  render: () => {
    return (
      <MapObjectSimple
        {...baseMapObjectSimpleProps}
      />
    )
  }
};
