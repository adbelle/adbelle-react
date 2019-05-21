import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-body">
        <div className="App-flex-row">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <div>
            Holy smokes, a genuine React app.
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
        <div className="App-flex-row">
          <div>
            <p>
              I decided I'd make a small proof of concept React application to prove
              that I do actually know a thing or two about working in React. What you
              see before you is that application. It's running in Node with Express
              serving the content.
            </p>
            <p>
              There's a lot more that you can do with React -- passing state and props
              between components, nesting, using React-Router and Redux with
              Sagas, and much more.
            </p>
            <p>
              Think of all the fun we could be having!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
