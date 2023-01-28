import { createSlice } from '@reduxjs/toolkit';

interface wordListState {
  leftSideWordList: String[];
  rightSideWordList: String[];
}

const initialState: wordListState = {
  leftSideWordList: ['Apple', 'Grape', 'Strawberry', 'Cherry', 'Plum'],
  rightSideWordList: ['watermelon', 'Banana', 'Peach'],
};

export const wordListSlice = createSlice({
  name: 'move word',
  initialState,
  reducers: {
    moveRight: (state) => {
      const index = state.leftSideWordList.length;
      if (index < 1) {
        return;
      }
      const moveWord = state.leftSideWordList[index - 1];
      state.leftSideWordList = state.leftSideWordList.slice(0, index - 1);
      state.rightSideWordList = [...state.rightSideWordList, moveWord];
    },
    moveLeft: (state) => {
      const index = state.rightSideWordList.length;
      if (index < 1) {
        return;
      }
      const moveWord = state.rightSideWordList[index - 1];
      state.rightSideWordList = state.rightSideWordList.slice(0, index - 1);
      state.leftSideWordList = [...state.leftSideWordList, moveWord];
    },
  },
});

export const { moveRight, moveLeft } = wordListSlice.actions;
export default wordListSlice.reducer;
