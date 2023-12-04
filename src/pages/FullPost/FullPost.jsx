import React from 'react';
import styles from './FullPost.module.scss';
import { useParams } from 'react-router-dom';
import { ReactComponent as EyeIcon } from '../../images/icons/eye.svg';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Markdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, fetchFullPost } from './../../redux/slices/posts';
import config from '../../config';
import { format } from 'date-fns';

export const FullPost = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { id } = params;
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const [formattedDate, setFormattedDate] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dispatch(fetchFullPost(id));
        setData(res.payload);
        const date = new Date(res.payload.createdAt);
        const formatted = format(date, 'yyyy.MM.dd');
        setFormattedDate(formatted);
        setLoading(false);
      } catch (err) {
        console.warn(err);
        alert('Ошибка при получении статьи');
      }
    };
    fetchData();
  }, []);

  // Если данные еще не загрузились, вы можете отобразить индикатор загрузки
  // if (isLoading) {
  //   return <Post isLoading={isLoading} isFullPost />;
  // }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.fullPost}>
          {data ? (
            <>
              <div className={styles.fullPost__info}>
                <h4 className={styles.fullPost__info__createdAt}>{formattedDate}</h4>{' '}
                <div className={styles.fullPost__info__viewsCount}>
                  <EyeIcon />
                  <span>{data.viewsCount}</span>
                </div>
              </div>
              <h2 className={styles.fullPost__title}>{data.title}</h2>
              <img
                className={styles.fullPost__img}
                src={`${config.API_BASE_URL}${data.imageURL}`}
                alt="news-photo"
              />
              <Markdown className={`markdown_container ${styles.fullPost__text}`}>
                {data.text}
              </Markdown>
            </>
          ) : (
            <>
              <Stack spacing={1}>
                <Skeleton variant="rounded" width={80} height={12} />
                <Skeleton variant="rounded" width="80%" height={40} />
                <Skeleton variant="rectangular" width="100%" height={408} />
                <Skeleton variant="rounded" width="90%" height={20} />
                <Skeleton variant="rounded" width="80%" height={20} />
                <Skeleton variant="rounded" width="90%" height={20} />
              </Stack>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
