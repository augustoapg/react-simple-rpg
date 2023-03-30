import { createSlice } from '@reduxjs/toolkit';
import { Position } from '../types';

export interface Monster {
  id: string;
  name: string;
}
// export interface Monster {
//   id: string;
//   name: string;
//   position: Position;
// }

export const monstersInitialState: Monster[] = [
  { id: '1111', name: 'pigeon' },
  { id: '2222', name: 'pigeon' },
  { id: '3333', name: 'pigeon' },
];
// export const monstersInitialState: Monster[] = [
//   { id: randomUUID(), name: 'pigeon', position: { row: 0, column: 4 } },
//   { id: randomUUID(), name: 'pigeon', position: { row: 3, column: 0 } },
//   { id: randomUUID(), name: 'pigeon', position: { row: 2, column: 8 } },
// ];

interface MonstersPosition {
  [key: number]: { [column: number]: Monster };
}

export const initialMonstersPositions: MonstersPosition = {
  0: {
    4: { id: '1111', name: 'pigeon' },
  },
  2: {
    8: { id: '2222', name: 'pigeon' },
  },
  3: {
    0: { id: '3333', name: 'pigeon' },
  },
};

export const monstersSlice = createSlice({
  name: 'monsters',
  initialState: monstersInitialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = monstersSlice.actions;

export default monstersSlice.reducer;
