import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import config from '../config.js';

export const commentsApi = createApi({
	reducerPath: 'commentsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${config.API_BASE_URL}`,
		prepareHeaders: headers => {
			const accessToken = Cookies.get('accessToken');
			if (accessToken) {
				headers.set('Authorization', `Bearer ${accessToken}`);
			}
			return headers;
		}
	}),
	endpoints: builder => ({
		addComment: builder.mutation({
			query: ({ postId, text }) => ({
				url: `/posts/${postId}/comments`,
				method: 'POST',
				body: { text }
			})
		})
	})
});

export const { useAddCommentMutation } = commentsApi;
