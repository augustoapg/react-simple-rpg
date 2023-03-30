import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DIRECTION, Position } from '../types';
import { initialMap } from '../components/Map/map.constants';

export interface HeroState {
  position: Position;
}

const isValidMove = (newRow: number, newCol: number) => {
  return (
    newRow >= 0 &&
    newRow < Object.keys(initialMap).length &&
    newCol >= 0 &&
    newCol < initialMap[0].length &&
    initialMap[newRow][newCol].style !== 'wall'
  );
};

const initialState: HeroState = {
  position: { row: 0, column: 0 },
};

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    move: (state, action: PayloadAction<DIRECTION>) => {
      let newRow = state.position.row;
      let newCol = state.position.column;

      switch (action.payload) {
        case DIRECTION.UP:
          newRow -= 1;
          break;
        case DIRECTION.DOWN:
          newRow += 1;
          break;
        case DIRECTION.LEFT:
          newCol -= 1;
          break;
        case DIRECTION.RIGHT:
          newCol += 1;
          break;
      }

      if (isValidMove(newRow, newCol)) {
        state.position = { row: newRow, column: newCol };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { move } = heroSlice.actions;

export default heroSlice.reducer;
