import './App.css';
import { InputWordForm } from './components/InputWordForm';
import { useInputWordForm } from './components/useInputWordForm';
import { WordList } from './components/WordList';

export const App = () => {
  const { inputWordList, inputWordRef, handleSubmit, onClickDelete } =
    useInputWordForm();

  return (
    <div className="App">
      <div className="contents">
        <InputWordForm
          inputWordRef={inputWordRef}
          handleSubmit={handleSubmit}
        />
        {inputWordList.length > 0 && (
          <WordList wordList={inputWordList} onClickDelete={onClickDelete} />
        )}
      </div>
    </div>
  );
};
