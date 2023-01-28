import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { moveRight, moveLeft } from './redux/wordListSlice';

const App = () => {

  const leftSideWordList = useAppSelector(
    (state) => state.wordList.leftSideWordList,
  );
  const rightSideWordList = useAppSelector(
    (state) => state.wordList.rightSideWordList,
  );
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <ul>
        {leftSideWordList.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
        <button onClick={() =>  dispatch(moveRight())}>右へ</button>
      </ul>
      <ul>
        {rightSideWordList.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
        <button onClick={() => dispatch(moveLeft())}>左へ</button>
      </ul>
    </div>
  );
};

export default App;
