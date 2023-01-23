type Props = {
  wordList: String[];
  onClickDelete: (key: number) => void;
};

export const WordList = ({ wordList, onClickDelete }: Props) => {
  return (
    <div className="word-list">
      {wordList.map((word, index) => {
        return (
          <div key={index} className="word-area">
            <p
              word-id={index}
              className="delete-box"
              onClick={() => onClickDelete(index)}
            >
              X
            </p>
            <p className="word">{word}</p>
          </div>
        );
      })}
    </div>
  );
};
