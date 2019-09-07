import React from 'react';
import logo from './logo.svg';
import TitleBar from './components/TitleBar'
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TitleBar title={"SpaceX App"} logo={logo}/>
        </header>
        <body className="App-body">
          <p>Content coming soon!</p>
        </body>
        <footer className="App-footer">
          <div>
            <a
              className="App-link"
              href="https://github.com/KieranWynn/spacex-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>

        </footer>
      </div>
    );
  }
}

export default App;
