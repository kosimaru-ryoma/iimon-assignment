type Props = {
  wordList: String[];
  onClickDelete: (key: number) => void;
};

export const WordList = ({ wordList, onClickDelete }: Props) => {
  return (
    <div className="contents-area">
      {wordList.map((word, index) => {
        return (
          <div key={index} className="add-contents">
            <p
              word-id={index}
              className="delete-box"
              onClick={() => onClickDelete(index)}
            >
              X
            </p>
            <p className="add-word">{word}</p>
          </div>
        );
      })}
    </div>
  );
};
