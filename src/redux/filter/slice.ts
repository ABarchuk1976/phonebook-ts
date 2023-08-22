import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: "" as string,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => 
			state = action.payload,
		},
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
