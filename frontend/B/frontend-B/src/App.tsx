import './App.css';
import { InputWordForm } from './components/InputWordForm';
import { useInputWordForm } from './components/useInputWordForm';
import { WordList } from './components/WordList';

export const App = () => {
  const { addedWords, addedWordRef, handleSubmit, onClickDelete } =
    useInputWordForm();

  return (
    <div className="App">
      <div className="contents">
        <InputWordForm
          addedWordRef={addedWordRef}
          handleSubmit={handleSubmit}
        />
        {addedWords.length > 0 && (
          <WordList wordList={addedWords} onClickDelete={onClickDelete} />
        )}
      </div>
    </div>
  );
};
