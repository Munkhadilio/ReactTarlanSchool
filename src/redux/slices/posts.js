import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

// Fetch постов
export const fetchPosts = createAsyncThunk('/posts/fetchPosts', async () => {
  const { data } = await axios.get('/posts');
  return data;
});

export const fetchSortedByPopularity = createAsyncThunk('/posts/fetchSortedByNew', async () => {
  const { data } = await axios.get('/posts/sorted-by-popularity');
  return data;
});

export const fetchFullPost = createAsyncThunk('/posts/:id', async (id) => {
  const { data } = await axios.get(`/posts/${id}`);
  return data;
});

export const fetchRemovePost = createAsyncThunk('/posts/fetchRemovePost', async (id) => {
  await axios.delete(`/posts/${id}`);
});

// Fetch тэгов
export const fetchTags = createAsyncThunk('/posts/fetchTags', async () => {
  const { data } = await axios.get('/tags');
  return data;
});

export const fetchTagByName = createAsyncThunk('/tags/:tag', async (tag) => {
  const { data } = await axios.get(`/tags/${tag}`);
  return data;
});

// Fetch комментариев
export const fetchComments = createAsyncThunk('/posts/:id/comments', async (id) => {
  const { data } = await axios.get(`/posts/${id}/comments`);
  return data;
});

export const fetchRemoveComment = createAsyncThunk(
  '/posts/:id/comments/:commentId',
  async ({ postId, commentId }) => {
    await axios.delete(`/posts/${postId}/comments/${commentId}`);
  },
);

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
  reducers: {
    localAddComment(state, action) {
      state.comments.items = state.comments.items.concat(action.payload);
      state.post.item.commentsCount++;
      state.comments.status = 'loaded';
    },
    localRemoveTag(state, action) {
      state.tags.items = state.tags.items.filter((item) => !action.payload.includes(item));
    },
  },

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

    //Получение тегов
    builder
      .addCase(fetchTags.pending, (state) => {
        state.tags.items = [];
        state.tags.status = 'loading';
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags.items = action.payload;
        state.tags.status = 'loaded';
      })
      .addCase(fetchTags.rejected, (state) => {
        state.tags.items = [];
        state.tags.status = 'error';
      });

    //Удаление статей
    builder.addCase(fetchRemovePost.pending, (state, action) => {
      state.posts.items = state.posts.items.filter((obj) => obj._id !== action.meta.arg);
    });

    // Сортировка по популярности
    builder
      .addCase(fetchSortedByPopularity.pending, (state) => {
        state.posts.items = [];
        state.posts.status = 'loading';
      })
      .addCase(fetchSortedByPopularity.fulfilled, (state, action) => {
        state.posts.items = action.payload;
        state.posts.status = 'loaded';
      })
      .addCase(fetchSortedByPopularity.rejected, (state) => {
        state.posts.items = [];
        state.posts.status = 'error';
      });

    // Посты по тегу
    builder
      .addCase(fetchTagByName.pending, (state) => {
        state.posts.items = [];
        state.posts.status = 'loading';
      })
      .addCase(fetchTagByName.fulfilled, (state, action) => {
        state.posts.items = action.payload;
        state.posts.status = 'loaded';
      })
      .addCase(fetchTagByName.rejected, (state) => {
        state.posts.items = [];
        state.posts.status = 'error';
      });

    // Все комментарии
    builder
      .addCase(fetchComments.pending, (state) => {
        state.comments.items = [];
        state.comments.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments.items = action.payload;
        state.comments.status = 'loaded';
      })
      .addCase(fetchComments.rejected, (state) => {
        state.comments.items = [];
        state.comments.status = 'error';
      });

    // Стереть комментарии
    builder.addCase(fetchRemoveComment.pending, (state, action) => {
      state.comments.items = state.comments.items.filter(
        (obj) => obj._id !== action.meta.arg.commentId,
      );
      state.post.item.commentsCount--;
    });
  },
});
export const { localAddComment, localRemoveTag } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
