import React, { Component } from 'react';
import { Slider } from './Slider/Slider';

const Card = (props) => (
    <h3>{props.title}</h3>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider
          style={{
            height: 200,
            width: 200
          }}
          cardComponent={Card}
          slideData={[
            {
              id: '0',
              title: 'first card'
            },
            {
              id: '1',
              title: 'second card'
            }
          ]}
          hasControlButton={true}
          hasInidicator={true}
        >
        </Slider>
      </div>
    );
  }
}

export default App;