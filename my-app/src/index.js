// tuto url: https://facebook.github.io/react/tutorial/tutorial.html#getting-started

// Instructions: do 'npm start' to test this.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*

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

*/

// -----------
// Square
// -----------

/*
class Square extends React.Component {

  constructor() {
    super(); // In JavaScript classes, you need to explicitly call super(); when defining the constructor of a subclass.
    this.state = {
      value: null,
    };
  }

  render() {

//    return (
//      <button className="square">
//        {this.props.value}
//      </button>
//    );

//    return (
//      <button className="square" onClick={() => this.setState({value: 'X'})}>
//        {this.state.value}
//      </button>
//    );

    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );

  }
}
*/

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


// -----------
// Board
// -----------

/*
class Board extends React.Component {

  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  
  handleClick(i) {
    const squares = this.state.squares.slice(); //We call .slice() to copy the squares array instead of mutating the existing array
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    //return <Square value={i} />;
    return <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
     />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
*/

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// -----------
// Game
// -----------

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


// -----------
// Init
// -----------

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
