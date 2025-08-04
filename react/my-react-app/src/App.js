//If most of the html code in function App() is commented out, then these imports are no longer needed:
//import logo from './logo.svg';
//import './App.css';

function App() {
	/* 
	This is what was between the header tag, with my new code right after the p tag and before the a tag:
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Make a change here, save the file, <br/>
        and the change can* show up immediately with no need to reload the browser! <br />
        (*Usually)
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
	*/
  return (
    <div className="App">
      <header className="App-header">
    	<h1>Test</h1>
      </header>
    </div>     
  );
}

export default App;
