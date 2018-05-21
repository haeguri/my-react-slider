import React, { Component } from 'react';
import { Slide } from './Slide/Slide';

const Card = (props) => {
    // console.log('test', props);
    return (
        <h3>{props.title}</h3>
    )
}

class App extends Component {
    render() {
        const sliderStyle = {
            height: 200,
            width: 200
        };

        const slideData = [{
            id: '0',
            title: 'first card'
        }, {
            id: '1',
            title: 'second card'
        }]

        return (
            <div className="App">
                <Slide
                    style={sliderStyle}
                    slideData={slideData}
                    card={Card}
                    hasControlButton={true}
                    hasInidicator={true}>
                </Slide>
            </div>
        );
    }
}

export default App;