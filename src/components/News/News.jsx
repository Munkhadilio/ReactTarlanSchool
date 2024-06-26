import React from 'react';
import styles from './News.module.scss';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import './../../i18next';
import { format } from 'date-fns';
import { useInView } from 'react-intersection-observer';
import { fetchPosts, fetchRemovePost } from './../../redux/slices/posts';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../config';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userDetails } from '../../redux/slices/auth';
import { GrEdit } from 'react-icons/gr';
import { ReactComponent as EyeIcon } from '../../images/icons/eye.svg';
import { BsFillTrashFill } from 'react-icons/bs';

export const News = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const userData = useSelector(userDetails);
  const { t } = useTranslation();

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const onClickRemove = (id) => {
    if (window.confirm('Вы действительно хотите удалить статью?')) {
      dispatch(fetchRemovePost(id));
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd.MM.yyyy');
  };

  const { posts } = useSelector((state) => state.posts);

  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <h1 className={styles.title}> {t('news.title')}</h1>
        {/* posts.items.length */}
        {posts.items.length > 0 ? (
          <>
            <div className={styles.items}>
              {posts.items.slice(0, 4).map((obj, index) => {
                const isEditable = userData?._id === obj.user._id;
                return (
                  <div className={styles.item} key={index}>
                    <img
                      className={styles.news__img}
                      src={`${config.API_BASE_URL}${obj.imageURL}`}
                      alt=""
                    />
                    <Link to={`/news/${obj._id}`}>
                      <div className={styles.news__info}>
                        <h4 className={styles.news__info__date}>{formatDate(obj.createdAt)}</h4>
                        <div className={styles.news__info__viewsCount}>
                          <EyeIcon />
                          <span>{obj.viewsCount}</span>
                        </div>
                      </div>
                      <h2 className={styles.news__title}>{obj.title} </h2>
                    </Link>
                    {isEditable && (
                      <div className={styles.editButtons}>
                        <Link to={`/news/${obj._id}/edit`}>
                          <GrEdit />
                        </Link>
                        <BsFillTrashFill onClick={() => onClickRemove(obj._id)} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {location.pathname === '/' && (
              <button className={styles.button} onClick={() => navigate('/news')}>
                {t('news.button_news')}
              </button>
            )}
          </>
        ) : (
          <>
            <div className={styles.items}>
              {[...Array(4)].map((obj, index) => {
                return (
                  <Stack spacing={1} key={index}>
                    <Skeleton variant="rectangular" width="100%" height={195} />
                    <Skeleton variant="rounded" width={80} height={12} />
                    <Skeleton variant="rounded" width={160} height={20} />
                  </Stack>
                );
              })}
            </div>
            {location.pathname === '/' && (
              <button className={styles.button} onClick={() => navigate('/news')}>
                {t('news.button_news')}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
