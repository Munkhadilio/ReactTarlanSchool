import React from 'react';
import Cookies from 'js-cookie';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import styles from './Login.module.scss';
import { fetchAuth, userDetailsBoolean } from '../../redux/slices/auth';

export const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(userDetailsBoolean);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      alert('Не удалось авторизоваться');
    }

    if ('accessToken' in data.payload) {
      const accessToken = data.payload.accessToken;
      Cookies.set('accessToken', accessToken, { expires: 7 });
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <div className={styles.root}>
        <h5 className={styles.title}>Вход в аккаунт</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.fields}>
            <input
              className={`${styles.fields__input} ${errors.email && styles.fields__input__error}`}
              type="email"
              placeholder="E-Mail"
              {...register('email', { required: 'Укажите почту' })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className={styles.fields}>
            <input
              className={`${styles.fields__input} ${
                errors.password && styles.fields__input__error
              }`}
              type="password"
              placeholder="Пароль"
              {...register('password', { required: 'Укажите пароль' })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button
            disabled={!isValid}
            type="submit"
            className={`${styles.button__log__in} ${isValid && styles.button__log__in__isValid}`}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};
