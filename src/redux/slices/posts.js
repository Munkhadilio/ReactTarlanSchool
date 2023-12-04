import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

// Fetch постов
export const fetchPosts = createAsyncThunk('/posts/fetchPosts', async () => {
  const { data } = await axios.get('/posts');
  return data;
});

export const fetchFullPost = createAsyncThunk('/posts/:id', async (id) => {
  const { data } = await axios.get(`/posts/${id}`);
  return data;
});

export const fetchRemovePost = createAsyncThunk('/posts/fetchRemovePost', async (id) => {
  await axios.delete(`/posts/${id}`);
});

const initialState = {
  posts: {
    items: [],
    status: 'loading',
  },
  post: {
    item: [],
    status: 'loading',
  },
  tags: {
    items: [],
    status: 'loading',
  },
  comments: {
    items: [],
    status: 'loading',
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //Получение статей сортировка по новым
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.posts.items = [];
        state.posts.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts.items = action.payload;
        state.posts.status = 'loaded';
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.posts.items = [];
        state.posts.status = 'error';
      });

    // Получение FullPost
    builder
      .addCase(fetchFullPost.pending, (state) => {
        state.post.item = [];
        state.posts.status = 'loading';
      })
      .addCase(fetchFullPost.fulfilled, (state, action) => {
        state.post.item = action.payload;
        state.posts.status = 'loaded';
      })
      .addCase(fetchFullPost.rejected, (state) => {
        state.post.item = [];
        state.posts.status = 'error';
      });

    //Удаление статей
    builder.addCase(fetchRemovePost.pending, (state, action) => {
      state.posts.items = state.posts.items.filter((obj) => obj._id !== action.meta.arg);
    });
  },
});
export const { localAddComment, localRemoveTag } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
