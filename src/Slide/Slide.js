import React, { Component } from 'react';
import './Slide.css';

const getSlideCard = (CustomCard) => {
    return (props) => {
        console.log('props is ', {...props});
        return (
            <div {...props}>
                <CustomCard {...props} />
            </div>
        )
    }
}

export class Slide extends Component {
    constructor(props) {
        super(props);
    }

    left() {
        console.log('left click');
    }

    right() {
        console.log('right click');
    }

    render(){
        const slideData = this.props.slideData;
        const SlideController = this.props.hasControlButton ?
            (<div className="slide-ctrl">
                <button className="slide-ctrl-button" onClick={() => this.left()}>Left</button>
                <button className="slide-ctrl-button" onClick={() => this.right()}>Right</button>
            </div>) : null;
        const SlideCard = getSlideCard(this.props.card);
        const SlideCardList = slideData.map(data => {
            return (
                <SlideCard 
                    className="slide-card"
                    key={data.id}
                    // title...
                    title={data.title} 
                    style={{
                        height: this.props.style.height,
                        width: this.props.style.width
                    }}>
                </SlideCard>
            )
        })

        return(
            <div
                className="slide-container"
                style={this.props.style}
            >
                {SlideCardList}
                {SlideController}
            </div>
        )
    }
}