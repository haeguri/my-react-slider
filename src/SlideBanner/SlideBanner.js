import React from 'react';
import './SlideBanner.css';

const DEFAULT_VALUES = {
    VIEW_PORT_WIDTH: 300,
    VIEW_PORT_HEIGHT: 200
}

export default class SlideBanner extends React.Component {
    constructor(props) {
        super(props);

        const viewPortWidth = props.viewPortWidth || DEFAULT_VALUES.VIEW_PORT_WIDTH;
        const viewPortHeight = props.viewPortHeight || DEFAULT_VALUES.VIEW_PORT_HEIGHT;

        this.state = {
            currentIndex: 0,
            cardStyle: {
                height: viewPortHeight,
                width: viewPortWidth
            },
            cardListStyle: {
                height: viewPortHeight,
                width: viewPortWidth * this.props.children.length,
                transform: 'translate(0px, 0)',
                transition: 'transform 0.5s'
            },
            controlStyle: props.controlStyle || {},
        };

        this.pullFromLeft = this.pullFromLeft.bind(this);
        this.pullFromRight = this.pullFromRight.bind(this);
    }

    // 왼쪽의 슬라이드를 가져옴
    pullFromLeft() {
        if(this.state.currentIndex === 0) {
            return;
        }

        const nextIndex = this.state.currentIndex - 1;
        const nextPosX = -nextIndex * this.state.cardStyle.width;

        this.setState({
            currentIndex: nextIndex,
            cardListStyle: {
                ...this.state.cardListStyle,
                transform: 'translate(' + nextPosX + 'px, 0)'
            }
        });
    }

    // 오른쪽의 슬라이드를 가져옴
    pullFromRight() {
        if(this.state.currentIndex === this.props.children.length-1) {
            return;
        }

        const nextIndex = this.state.currentIndex + 1;
        const nextPosX = -nextIndex * this.state.cardStyle.width;

        this.setState({
            currentIndex: nextIndex,
            cardListStyle: {
                ...this.state.cardListStyle,
                transform: 'translate(' + nextPosX + 'px, 0)'
            }
        });
    }

    render() {
        const cardElements = this.props.children.map((card) => {
            return (
                <div 
                    className="slide-banner__card" 
                    key={'slide-card-'+(card.key)} 
                    style={{
                        width: this.state.cardStyle.width
                    }}>
                    {card}
                </div>
            );
        });

        return (
            <div className="slide-banner"
                 style={{
                     width: this.state.cardStyle.width,
                     height: this.state.cardStyle.height
                 }}>
                <div 
                    className="slide-banner__card-list"
                    style={this.state.cardListStyle}>
                    {cardElements}
                </div>
                {this.props.controls ?
                    <div 
                        className="slide-banner__ctrl"
                        style={this.state.controlStyle}>
                        <button 
                            className="slide-banner__btn slide-banner__btn--left" 
                            onClick={this.pullFromLeft}>
                            {this.props.controls.left || '<'}
                        </button>
                        <button 
                            className="slide-banner__btn slide-banner__btn--right"
                            onClick={this.pullFromRight}>
                            {this.props.controls.right || '>'}
                        </button>
                    </div>
                    : null}
                {this.props.showIndicator ?
                    <div 
                        className="slide-banner__indicator">
                        {
                            cardElements.map((elem, idx) => {
                                return (
                                    <span
                                        key={elem.key}
                                        className={
                                            'slide-banner__indicator-bullet' +
                                            (this.state.currentIndex === idx ? ' slide-banner__indicator-bullet--active' : '')}
                                        >
                                    </span>
                                )
                            })
                        }
                    </div> 
                    : null
                }
            </div>
        );
    }
}
