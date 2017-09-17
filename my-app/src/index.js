// tuto url: https://facebook.github.io/react/tutorial/tutorial.html#getting-started

// Instructions: do 'npm start' to test this.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Andres1 from './asoria.v1.js';
import Andres2 from './asoria.v2.js';
import Andres3 from './asoria.v3.js';
import ReactStringAvatar from './react-string-avatar.js';

//import file from './file.js'; //In App.jsx

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

  /*

  handleClick(i) {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  */

  renderSquare(i) {

    /*
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
    */

    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );

  }

  render() {
    //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
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

/*
history = [
  {
    squares: [
      null, null, null,
      null, null, null,
      null, null, null,
    ]
  },
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, null,
    ]
  },
  // ...
]
*/

var cont = 0

class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  doStuff(){
    cont++;
    console.log("stuff done!! cont:", cont );
  }

  logHistory( h ){
    cont++;
    console.log("history:", h );
  }

  handleClick(i) {

    this.doStuff();
    //const history = this.state.history;
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    this.logHistory( history );

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {

    console.log("jumpTo step:", step);
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {

    const history = this.state.history;
    //const current = history[history.length - 1];
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li key={move}> 
          v1)<Andres1 myvalue="777"/> <br/>
          v3.a), (Render default values specified inside the component)<Andres3 /><br/>
          v3.b), (Show values set in html tags)<Andres3 name="Andres" age="38" /><br/>
          v2)<Andres2 myvalue="888" wrapper="true" /><br/>
          <ReactStringAvatar name="Andresxxx Soriaxxx" bgcolor="#ff0000" str="Andres Soria" pictureResolution="45" picture-resolution="45" />
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    }); //size={48} radius={5} 

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
        <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ----------------
// calculateWinner
// ----------------

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// -----------
// Init
// -----------

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
