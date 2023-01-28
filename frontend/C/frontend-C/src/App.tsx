import './App.css';

import { LeftSideWordList } from './components/LeftSideWordList';
import { RightSideWordList } from './components/RightSideWordList';

const App = () => {
  return (
    <div className="contents">
      <LeftSideWordList />
      <RightSideWordList />
    </div>
  );
};

export default App;
