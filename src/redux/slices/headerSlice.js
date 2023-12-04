import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    activeLink: 'home',
    styleContent: false,
  },
  reducers: {
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
    setDropdownStyle: (state, action) => {
      state.styleContent = action.payload;
    },
  },
});

export const { setActiveLink, setDropdownStyle } = headerSlice.actions;
export const headerReducer = headerSlice.reducer;
