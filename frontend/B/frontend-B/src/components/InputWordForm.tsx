type Props = {
  handleSubmit: (e: { preventDefault: () => void }) => void;
  inputWordRef: React.RefObject<HTMLInputElement>;
};

export const InputWordForm = ({ inputWordRef, handleSubmit }: Props) => {
  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="input-area">
        <input className="input-field" required ref={inputWordRef}></input>
        <button className="input-button" value="送信">
          追加
        </button>
      </div>
    </form>
  );
};
