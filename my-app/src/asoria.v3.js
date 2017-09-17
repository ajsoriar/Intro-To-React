import React, { PropTypes, Component } from 'react'

class Andres3 extends React.Component {

    _renderImage() {
        return (
            <div className="hello man">{ this.props.name } { this.props.age }</div>
        ); 
    }

    render() {

      let {name,age} = this.props;
      if(name === undefined || age === undefined){
        console.log('undefined props')
      } else {
        console.log('defined props')
      }
   
      const size = this.props.size;
      
        return (
            <div className="chin">{ this._renderImage() }</div>
        );
    }
  }

  Andres3.contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  
  Andres3.defaultProps = {
      name: "Andrew123",
      age: 13
    //cityList: [],
    //provinceList: [],
  };
  
  Andres3.propTypes = {
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
    //cityList: React.PropTypes.array.isRequired,
    //provinceList: React.PropTypes.array.isRequired,
  }

  export default Andres3;