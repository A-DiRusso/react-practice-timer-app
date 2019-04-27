import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer />
        </header>
      </div>
    );
  }
}


export default App;
