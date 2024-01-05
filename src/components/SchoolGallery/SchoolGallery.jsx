import React from 'react';
import styles from './SchoolGallery.module.scss';

import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useInView } from 'react-intersection-observer';

export const SchoolGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <div className={styles.title}>Галерея</div>
        <div className={styles.wrapper}>
          <LightGallery
            speed={250}
            plugins={[lgThumbnail, lgZoom]}
            showCloseIcon={true}
            download={true}
            rotateRight={true}
            rotateLeft={true}
            rotate={true}>
            <a href="https://avatars.mds.yandex.net/get-altay/10175550/2a0000018a5f3cee9ea649186526dac0d112/XXXL">
              <img
                alt="Линейка"
                src="https://avatars.mds.yandex.net/get-altay/10175550/2a0000018a5f3cee9ea649186526dac0d112/XXXL"
              />
            </a>
            <a href="https://avatars.mds.yandex.net/get-altay/911432/2a0000018a5f3f94713a8169472e2953af81/XXXL">
              <img
                alt="Линейка"
                src="https://avatars.mds.yandex.net/get-altay/911432/2a0000018a5f3f94713a8169472e2953af81/XXXL"
              />
            </a>
            <a href="https://avatars.mds.yandex.net/get-altay/9709783/2a0000018a5f2f38b441da63d053f3d8c42d/XXXL">
              <img
                alt="Линейка"
                src="https://avatars.mds.yandex.net/get-altay/9709783/2a0000018a5f2f38b441da63d053f3d8c42d/XXXL"
              />
            </a>
            <a href="https://avatars.mds.yandex.net/get-altay/4336915/2a00000178fe162b4a27afc930a10e0f5780/XXXL">
              <img
                alt="Уроки"
                src="https://avatars.mds.yandex.net/get-altay/4336915/2a00000178fe162b4a27afc930a10e0f5780/XXXL"
              />
            </a>
            <a href="https://avatars.mds.yandex.net/get-altay/4304228/2a00000178fe17736faad710cbae250708aa/XXXL">
              <img
                alt="Уроки"
                src="https://avatars.mds.yandex.net/get-altay/4304228/2a00000178fe17736faad710cbae250708aa/XXXL"
              />
            </a>
            <a href="https://avatars.mds.yandex.net/get-altay/4633583/2a00000178fe159fc97a100298e5bbc246f3/XXXL">
              <img
                alt="Уроки"
                src="https://avatars.mds.yandex.net/get-altay/4633583/2a00000178fe159fc97a100298e5bbc246f3/XXXL"
              />
            </a>
            <a href="https://avatars.mds.yandex.net/get-altay/4265086/2a00000178fe1a1abf6635001961df03374a/XXXL">
              <img
                alt="Работы учеников"
                src="https://avatars.mds.yandex.net/get-altay/4265086/2a00000178fe1a1abf6635001961df03374a/XXXL"
              />
            </a>
            <a href="https://avatars.mds.yandex.net/get-altay/10456159/2a0000018a5f3c0809eb6280af7664c80eda/XXXL">
              <img
                alt="Линейка"
                src="https://avatars.mds.yandex.net/get-altay/10456159/2a0000018a5f3c0809eb6280af7664c80eda/XXXL"
              />
            </a>
            <a href="https://avatars.mds.yandex.net/get-altay/467660/2a000001878ddfd4d2c5847a71263709d0e0/XXXL">
              <img
                alt="Класс"
                src="https://avatars.mds.yandex.net/get-altay/467660/2a000001878ddfd4d2c5847a71263709d0e0/XXXL"
              />
            </a>
            <a href="https://avatars.mds.yandex.net/get-altay/10175550/2a0000018a5f5ea006fc2d940d48da7d819e/XXXL">
              <img
                alt="Английский"
                src="https://avatars.mds.yandex.net/get-altay/10175550/2a0000018a5f5ea006fc2d940d48da7d819e/XXXL"
              />
            </a>
            <a href="https://avatars.mds.yandex.net/get-altay/4530524/2a00000178fe19171bfc26ae2c8dba63e3a6/XXXL">
              <img
                alt="Столовая"
                src="https://avatars.mds.yandex.net/get-altay/4530524/2a00000178fe19171bfc26ae2c8dba63e3a6/XXXL"
              />
            </a>
            <a href="https://avatars.mds.yandex.net/get-altay/10156117/2a0000018a5f962a2b3677423c766ba6b615/XXXL">
              <img
                alt=""
                src="https://avatars.mds.yandex.net/get-altay/10156117/2a0000018a5f962a2b3677423c766ba6b615/XXXL"
              />
            </a>
          </LightGallery>
        </div>
      </div>
    </div>
  );
};
