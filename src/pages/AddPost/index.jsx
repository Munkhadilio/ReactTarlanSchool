import React from 'react';
import Cookies from 'js-cookie';
import styles from './AddPost.module.scss';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { userDetails, userDetailsBoolean } from '../../redux/slices/auth';
import { useSelector } from 'react-redux';
import { useNavigate, Navigate, useParams } from 'react-router-dom';

import axios from '../../axios';
import config from '../../config.js';

export const AddPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector(userDetailsBoolean);
  const userData = useSelector(userDetails);
  const [isLoading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [imageURL, setImageURL] = React.useState('');
  const inputFileRef = React.useRef(null);
  const isEditing = Boolean(id);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData);
      setImageURL(data.url);
    } catch (error) {
      console.warn(error);
      alert('Ошибка при загрузке файла');
    }
  };

  const onClickRemoveImage = async () => {
    try {
      const removedImage = await axios.delete('/uploads', {
        data: { imageURL },
      });
      setImageURL('');
    } catch (error) {
      alert('Не удалось удалить картинку');
    }
  };

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const fields = {
        title,
        imageURL,
        text,
        userRole: userData.role,
      };
      const { data } = isEditing
        ? axios.patch(`/posts/${id}`, fields)
        : await axios.post('/posts', fields);
      const _id = isEditing ? id : data._id;
      navigate(`/news/${_id}`);
    } catch (error) {
      console.warn(error);
      alert('Ошибка при создание статьи');
    }
  };
  React.useEffect(() => {
    if (id) {
      axios
        .get(`/posts/${id}`)
        .then(({ data }) => {
          setTitle(data.title);
          setImageURL(data.imageURL);
          setText(data.text);
        })
        .catch((e) => {
          console.warn(e);
        });
    }
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  if (!Cookies.get('accessToken') && !isAuth) {
    return <Navigate to="/" />;
  }

  return userData?.role !== 'admin' ? (
    <></>
  ) : (
    <div className="container">
      <div className={styles.root}>
        <div className={styles.root__wrapper}>
          <div className={`${styles.buttons}`}>
            <button className={styles.button} onClick={() => inputFileRef.current.click()}>
              Загрузить превью
            </button>
            {imageURL && (
              <>
                <button
                  className={`${styles.button} ${styles.removeButton}`}
                  onClick={onClickRemoveImage}>
                  Удалить
                </button>
                <img
                  className={styles.image}
                  src={`${config.API_BASE_URL}${imageURL}`}
                  alt="Uploaded"
                />
              </>
            )}
          </div>
          <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
          <div className={styles.inputs}>
            <input
              className={styles.title}
              type="text"
              placeholder="Заголовок статьи..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <SimpleMDE className={styles.editor} value={text} onChange={onChange} options={options} />
          <div className={styles.buttons}>
            <button className={`${styles.button}   ${styles.submitButton}`} onClick={onSubmit}>
              {isEditing ? 'Сохранить' : 'Опубликовать'}
            </button>
            <a href="/">
              <button className={styles.button}>Отмена</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
