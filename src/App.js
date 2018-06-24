import React, { Component } from "react";
import './App.css';
import SlideBanner from './SlideBanner/SlideBanner';
import Header from './Header/Header';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
    render() {
        const bannerRawDatas = [{
            id: '1',
            img: 'https://i.pinimg.com/564x/90/e4/e9/90e4e9cae6ded1516d2fae45a25fe9ee.jpg'
        }, {
            id: '2',
            img: 'https://i.pinimg.com/564x/47/ac/4c/47ac4c983d4d73f9b4461424566683de.jpg'
        }, {
            id: '3',
            img: 'https://i.pinimg.com/564x/14/a3/04/14a3043235ee1243d52e34c7f8db5b2c.jpg'
        }, {
            id: '4',
            img: 'https://i.pinimg.com/564x/a7/6a/9c/a76a9cc95f5c4240ec4761f18b465082.jpg'
        }];

        const slideControls = {
            left: (<span className="fa fa-arrow-left fa-lg"></span>),
            right: (<span className="fa fa-arrow-right fa-lg"></span>)
        };

        return (
            <div>
                <Header></Header>
                <SlideBanner
                    controls={slideControls}
                    showIndicator={true}>
                    {
                        bannerRawDatas.map((data) => {
                            return (
                                <div key={data.id}>
                                    <img className="food-img" src={data.img} alt="food"/>
                                </div>
                            );
                        })
                    }
                </SlideBanner>
                {/* <SlideBanner
                    controls={slideControls}
                    showIndicator={true}>
                    {
                        bannerRawDatas.map((data) => {
                            return (
                                <div key={data.id}>
                                    <img className="food-img" src={data.img} alt="food"/>
                                </div>
                            );
                        })
                    }
                </SlideBanner> */}
            </div>
        );
    }
}

export default App;
