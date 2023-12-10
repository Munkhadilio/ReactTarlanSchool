import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'ru',
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const nowLanguage = (state) => state.language.language;
export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
