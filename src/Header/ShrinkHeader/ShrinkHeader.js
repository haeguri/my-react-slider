import React from 'react';
import './ShrinkHeader.css';

export default class ShrinkHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const className = this.props.className + ' header--shrink';

        return (
            <div className={className}
                 style={{
                     height:this.props.height
                }}>
                {this.props.children}
            </div>
        );
    }
}