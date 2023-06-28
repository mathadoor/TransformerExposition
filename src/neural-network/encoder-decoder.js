import React from 'react';

class EncoderDecoder extends React.Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    return (
      <svg>
        <rect {...this.props} style={{ transition: 'width 0.5s, height 0.5s' }}/>
      </svg>

    );
  }
}

export default EncoderDecoder;
