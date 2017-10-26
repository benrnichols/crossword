import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Grid extends Component {
	render() {
		return(
			<div>
				<table id = "puzzleGrid">
					<tbody>
						//loop that makes rows
					</tbody>
				</table>
		)
	}
}
class Row extends Component {
	render() {
		return (
			<tr>
				//loop that makes elements
			</tr>
		)
	}
}

export default App;
