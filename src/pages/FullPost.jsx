import React from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../components/Post';
import { Index } from '../components/AddComment';
import { CommentsBlock } from '../components/CommentsBlock/CommentsBlock';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, fetchFullPost } from '../redux/slices/posts';
import { userDetails } from '../redux/slices/auth';

export const FullPost = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const { id } = params;

	const userData = useSelector(userDetails);
	const comments = useSelector(state => state.posts.comments.items);
	const commentsCount = useSelector(
		state => state.posts.post.item.commentsCount
	);
	const [data, setData] = React.useState();
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await dispatch(fetchFullPost(id));
				setData(res.payload);
				setLoading(false);
			} catch (err) {
				console.warn(err);
				alert('Ошибка при получении статьи');
			}
		};
		fetchData();
	}, []);

	React.useEffect(() => {
		dispatch(fetchComments(id));
	}, []);

	if (isLoading) {
		return <Post isLoading={isLoading} isFullPost />;
	}

	return (
		<div className='container'>
			<Post
				id={data._id}
				title={data.title}
				imageURL={data.imageURL ? data.imageURL : ''}
				user={data.user}
				createdAt={data.createdAt}
				viewsCount={data.viewsCount}
				commentsCount={commentsCount}
				tags={data.tags}
				isFullPost
			>
				<ReactMarkdown children={data.text} />
			</Post>
			<CommentsBlock items={comments} isLoading={false}>
				<Index urlId={data._id} id={id} userData={userData} />
			</CommentsBlock>
		</div>
	);
};
