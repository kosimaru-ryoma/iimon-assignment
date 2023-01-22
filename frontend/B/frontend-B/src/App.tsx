import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="contents">
        <form className="add-form" action="/" method="post">
          <div className="add-area">
            <input className="add-input"></input>
            <button className="add-button" value="送信">
              追加
            </button>
          </div>
        </form>
        <div className="contents-area">
          <div className="add-contents">
            <p className="delete-box">X</p>
            <p className="add-word">test</p>
          </div>
          <div className="add-contents">
            <p className="delete-box">X</p>
            <p className="add-word">strawberry</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
