// do npm start

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();



class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

//Example usage: <ShoppingList name="Mark" />

ReactDOM.render(<ShoppingList name="Mark" />, document.getElementById('root'));
