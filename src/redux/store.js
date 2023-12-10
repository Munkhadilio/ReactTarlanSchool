import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { authReducer } from './slices/auth';
import { headerReducer } from './slices/headerSlice';
import { languageReducer } from './slices/language';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    header: headerReducer,
    language: languageReducer,
  },
});

export default store;
