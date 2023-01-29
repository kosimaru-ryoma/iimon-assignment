import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { moveLeft } from '../redux/wordListSlice';

export const RightSideWordList = () => {
  const rightSideWordList = useAppSelector(
    (state) => state.wordList.rightSideWordList,
  );
  const dispatch = useAppDispatch();

  return (
    <div className="word-contents">
      <ul className="word-list border-box">
        {rightSideWordList.length > 0 &&
          rightSideWordList.map((v, k) => {
            return (
              <li key={k} className="word">
                {v}
              </li>
            );
          })}
      </ul>
      <div className="button-area">
        <button className="move-button" onClick={() => dispatch(moveLeft())}>
          左へ移動
        </button>
      </div>
    </div>
  );
};
