import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { authReducer } from './slices/auth';
import { commentsApi } from './commentsApi';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
});

export default store;
