import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'counter',
  initialState: {
    activePage: "",
  },
  reducers: {
    setActivePage: (state, {payload}) => {
      document.title = `${payload} | Fábio Borges Júnior`;

      state.activePage = payload;
    }
  },
});

export const getActivePage = state => state.main.activePage;

export const { setActivePage } = mainSlice.actions;

export default mainSlice.reducer;
