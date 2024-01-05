// XAxisLineNumber.story.js
import XAxisLineNumber from './XAxisLineNumber';

export default {
  component: XAxisLineNumber,
};

export const Primary = {
  render: () => {
    return (
      <div style={{
        backgroundColor: '#eee',
        height: '300px',
        left: '100px',
        padding: '30px',
        position: 'absolute',
        width: '200px',
      }}>
        <XAxisLineNumber lineNumber={123} top={25} />
        <XAxisLineNumber lineNumber={213} top={75} />
        <XAxisLineNumber lineNumber={437} top={125} />
        <XAxisLineNumber lineNumber={685} top={175} />
        <XAxisLineNumber lineNumber={854} top={225} />
        Several numbers are shown
      </div>
    )
  }
};
