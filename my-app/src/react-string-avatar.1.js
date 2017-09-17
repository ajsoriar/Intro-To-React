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
    //name: PropTypes.string,
    
    initials:: PropTypes.string,
    width: PropTypes.string,
    bgcolor: PropTypes.string,
    textColor: PropTypes.string,
    wrapper: PropTypes.string,
    pictureResolution: PropTypes.string,
    pixelated: PropTypes.string,
    roundShape: PropTypes.string,
    class: PropTypes.string,
    imgClass: PropTypes.string,
    style: PropTypes.string,
    string: PropTypes.string,
    cornerRadius: PropTypes.string,
    pictureFormat: PropTypes.string,
    colorsPalette: PropTypes.string,
    autoColor: PropTypes.string,
    fontWeight: PropTypes.string,
    fontScale: PropTypes.string,
    textShadow: PropTypes.string,
    bind: PropTypes.string,
    maxLength: PropTypes.string,
    upperCase: PropTypes.string,
};
  
const defaultProps = {
    //name: 'xxx',

    picture_resolution: 256,
    wrapper: true,
    str: "", //scope.initials || "",
    bgcolor: "#000",
    textcolor: "#fff",
    pixelated: false,
    img_styling: "vertical-align:top;",
    roundShape: false,
    wrapper_styling: "border-radius:0; display:block; overflow:hidden;",
    extra_classes: "",
    extra_img_classes: "",
    extra_styles: "",
    corner_radius: "0",
    picture_format: "png",
    colors_palette: ["#bdc3c7","#6f7b87","#2c3e50","#2f3193","#662d91","#922790","#ec2176","#ed1c24","#f36622","#f8941e","#fab70f","#fdde00","#d1d219","#8ec73f","#00a650","#00aa9c","#00adef","#0081cd","#005bab"],
    autoColor: false,
    font_weight: 100,
    font_scale: 100,
    text_shadow: false,
    bind: false,
    img_width: "100%",
    upperCase: false,
};

export default class ReactStringAvatar extends React.Component {

    static displayName = 'ReactStringAvatar'

    function generateAvatar(name, w, h, bgcolor, textcolor, bgImage) {
        
        var WIDTH = 256, HEIGHT = 256, canvas, ctx, _font_size;

        if (w != undefined && w > 0) {
            if (h != undefined && h > 0) {
                WIDTH = w;
                HEIGHT = h;
            }
        }

        canvas = document.createElement('canvas');
        canvas.id = "ngAvatar-" + Date.now();
        canvas.width = WIDTH;
        canvas.height = HEIGHT;

        ctx = canvas.getContext('2d');
        ctx.fillStyle = bgcolor;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        _font_size = WIDTH / (2 / ( _font_scale / 100 ));     
        ctx.font = _font_weight +" "+ _font_size +"px sans-serif";

        if ( _text_shadow === true ) {
            ctx.shadowColor = "black";
            ctx.shadowOffsetX = 0; 
            ctx.shadowOffsetY = 0; 
            ctx.shadowBlur = 5;                        
        }

        ctx.textAlign = "center";
        ctx.fillStyle = textcolor;
        //ctx.fillText(_str, WIDTH / 2, HEIGHT - (HEIGHT / 2) + ( _font_size / 3) + 5 );
        ctx.fillText( _str, WIDTH / 2, HEIGHT - (HEIGHT / 2) + ( _font_size / 3) );

        return canvas.toDataURL("image/"+ _picture_format );
    }

    function getInitialsFromString(str){

        var output = "", 
            i = 0, 
            str = str.split(" "),
            len = str.length;
        
        for ( i; i < len; i++ ) if ( str[i] != "" ) output += str[i][0]; //.toUpperCase();
        return output;
    }


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
/*
    _renderImage() {
      


        return (
            <div className="hello"><img width={this.props.size}
                height={this.props.size}
                style={imageStyle}
                alt="andres"
            />-a-{ this.props.name }-a-</div>
        );
    }
*/

    render() {
        //const size = this.props.size;

        //let {name, size, radius} = this.props;
        //let char = name.trim()[0].toUpperCase();
        //let bgColor = "#f00";

        return (
            <div className="chin">{ this._renderImage() }</div>
        );
    }

}


    /*

    var imgData = generateAvatar( _str, _picture_resolution, _picture_resolution, _bgcolor, _textcolor, null);
    
    var html = '';
    if (_wrapper) html += '<div class="avatar-wrapper '+ _extra_classes +'" style="'+ _wrapper_styling +' width:' + _long + 'px; height:' + _long + 'px; '+ _extra_styles +'">';
    html += '<img src="' + imgData + '" class="avatar-picture '+ _extra_img_classes +'" style="'+ _img_styling +'" width="'+ _img_width +'" height="" />';
    if (_wrapper) html += '</div>';

    var replacementElement = angular.element(html);
    currentElement.replaceWith(replacementElement);
    currentElement = replacementElement;
    */

    /*
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
    */