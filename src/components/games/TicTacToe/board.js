import React from 'react';
import Square from './square';

class Board extends React.Component {

   state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      isDone: false
   };

   calculateWinner(squares) {
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
            return squares[c];
         }
      }
      return null;
   }

   allIsFilled(squares) {
      this.setState({
         isDone: true
      })
      for (let index = 0; index < squares.length; index++) {
         if (!squares[index]) {
            this.setState({
               // isDone: false
            })
         }
      }
   }

   handleClick(i) {
      if (this.state.isDone) {
         return
      }
      const squares = this.state.squares.slice();
      squares[i] = (this.state.xIsNext ? "X" : "O");
      if (this.calculateWinner(squares)) {
         this.setState({
            isDone: true
         })
      }
      this.setState({
         squares: squares,
         xIsNext: !this.state.xIsNext
      })
   }

   renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick={() => { this.handleClick(i) }} />;
   }

   render() {
      const winner = this.calculateWinner(this.state.squares);
      let status;
      if (winner) {
         status = "Winner is " + winner
      } else {
         status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");
      }
      return (
         <div className="center tictactoe">
            <div className="tictactoe-status">
               {status}
            </div>
            <div>
               {this.renderSquare(0)}
               {this.renderSquare(1)}
               {this.renderSquare(2)}
            </div>
            <div>
               {this.renderSquare(3)}
               {this.renderSquare(4)}
               {this.renderSquare(5)}
            </div>
            <div>
               {this.renderSquare(6)}
               {this.renderSquare(7)}
               {this.renderSquare(8)}
            </div>
         </div>
      );
   }
}

export default Board