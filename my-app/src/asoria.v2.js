//import React from 'react';

import React, { PropTypes, Component } from 'react'

const propTypes = {
    myvalue: PropTypes.string
};
  
const defaultProps = {
    myvalue: 'xxxDefaultValuexxx'
};

export default class Andres2 extends React.Component {

    static displayName = 'Andres2'

    _renderImage() {

//          const size = 50;

//          const imageStyle = {
//              maxWidth: '100%',
//              width: size,
//              height: size
//          };

        return (
            <div className="hello man">{ this.props.myvalue }</div>
        ); 
    }

    render() {
        const size = this.props.size;

        return (
            <div className="chin">{ this._renderImage() }</div>
        );
    }


}