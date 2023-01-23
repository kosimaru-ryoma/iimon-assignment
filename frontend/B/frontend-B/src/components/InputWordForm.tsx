type Props = {
  handleSubmit: (e: { preventDefault: () => void }) => void;
  addedWordRef: React.RefObject<HTMLInputElement>;
};

export const InputWordForm = ({ addedWordRef, handleSubmit }: Props) => {
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="add-area">
        <input className="add-input" required ref={addedWordRef}></input>
        <button className="add-button" value="送信">
          追加
        </button>
      </div>
    </form>
  );
};
