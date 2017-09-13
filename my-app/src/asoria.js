//'use strict';

import React from 'react';

export default class Andres extends React.Component {

    static displayName = 'Andres'

    _renderImage() {

        const size = 50;

/*      
        const imageStyle = this.props.unstyled ? null : {
            maxWidth: '100%',
            width: size,
            height: size
        };
*/

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
            /></div>
        );
    }

    render() {
        const size = this.props.size;

        return (
            <div className="chin">{ this._renderImage() }</div>
        );
    }
}