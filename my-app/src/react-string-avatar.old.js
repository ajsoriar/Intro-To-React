//'use strict';

/*

    How to use this:

    <ReactStringAvatar 
    name="Andres Soria"
    size={48}
    radius={5}
    />

*/

//import React from 'react';

import React, { PropTypes, Component } from 'react'

const propTypes = {
    name: PropTypes.string,
    //size: PropTypes.number,
    //radius: PropTypes.number,
};
  
const defaultProps = {
    name: 'xxx',
   // size: 50,
   // radius: 0,
};

export default class ReactStringAvatar extends React.Component {

    static displayName = 'ReactStringAvatar'

    _renderImage() {

        const size = 50;

        const imageStyle = {
            maxWidth: '100%',
            width: size,
            height: size
        };

        return (
            <div className="hello"><img width={this.props.size}
                height={this.props.size}
                style={imageStyle}
                alt="andres"
            />-a-{ this.props.name }-a-</div>
        );
    }

    render() {
        //const size = this.props.size;

        let {name, size, radius} = this.props;
        let char = name.trim()[0].toUpperCase();

        let bgColor = "#f00";

        return (
            <div className="chin">{ this._renderImage() }</div>
        );
    }

}