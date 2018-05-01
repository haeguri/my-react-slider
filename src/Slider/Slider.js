import React, { Component } from 'react';
import './Slider.css';

const withCardComponent = (CardComponent) => {
    return (props) => (
        <div 
            className={props.className}
            style={{
                height: props.style.height,
                width: props.style.width
            }}
        >
            <CardComponent {...props} />
        </div>
    )
}

export class Slider extends Component {
    render(){
        const SlideWithCard = withCardComponent(this.props.cardComponent);

        return(
            <div 
                className="slider-container"
                style={this.props.style}
            >
            {this.props.slideData.map(data => (
                <SlideWithCard 
                    key={data.id}
                    title={data.title}
                    style={{
                        height: this.props.style.height,
                        width: this.props.style.width
                    }}
                    className="slide-card"
                >
                </SlideWithCard>
            ))}
            </div>
        )
    }
}