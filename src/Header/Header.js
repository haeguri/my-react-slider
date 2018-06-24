import React from 'react';
import './Header.css';
import ShrinkHeader from './ShrinkHeader/ShrinkHeader';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <ShrinkHeader
                className="header"
                height={50}>
                <h1 className="header__logo">
                    Hello World
                </h1>
                <ul className="header__menu">
                    <li>
                        <a>menu1</a>
                    </li>
                    <li>
                        <a>menu2</a>
                    </li>
                    <li>
                        <a>menu3</a>
                    </li>
                    <li>
                        <a>menu4</a>
                    </li>
                </ul>
            </ShrinkHeader>
        );
    }
}