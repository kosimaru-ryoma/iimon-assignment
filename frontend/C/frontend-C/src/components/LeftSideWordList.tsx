import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { moveRight } from '../redux/wordListSlice';

export const LeftSideWordList = () => {
  const leftSideWordList = useAppSelector(
    (state) => state.wordList.leftSideWordList,
  );
  const dispatch = useAppDispatch();

  return (
    <div className="word-contents">
      <ul className="word-list border-box">
        {leftSideWordList.length > 0 &&
          leftSideWordList.map((v, k) => {
            return (
              <li key={k} className="word">
                {v}
              </li>
            );
          })}
      </ul>
      <div className="button-area">
        <button className="move-button" onClick={() => dispatch(moveRight())}>
          右へ移動
        </button>
      </div>
    </div>
  );
};
