import React from 'react';
import BlazeSlider from 'blaze-slider';
import 'blaze-slider/dist/blaze.css';
import { useInView } from 'react-intersection-observer';
import styles from './GallerySliderV2.module.scss';

import img1 from './../../images/slickdemo/2061261.jpg';
import img2 from './../../images/slickdemo/DemoImg.png';
import img3 from './../../images/slickdemo/high-up-3840×2160.jpg';
import img4 from './../../images/slickdemo/macos-big-sur-stock-night-lone-tree-sedimentary-rocks-1920x1080-3776.jpg';
import img5 from './../../images/slickdemo/ugdnffnc61m61.png';
import img6 from './../../images/slickdemo/wallpapersden.com_windows-11-hd-gradient_3072x1728.jpg';

function useBlazeSlider(config) {
  const sliderRef = React.useRef();
  const elRef = React.useRef();

  React.useEffect(() => {
    // if not already initialized
    if (!sliderRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current, config);
    }
  }, []);

  return elRef;
}

export const GallerySliderV2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  const images = [img2, img2, img2, img2, img2];

  const elRef = useBlazeSlider({
    all: {
      loop: true,
      enableAutoplay: true,
      slidesToShow: 1,
      stopAutoplayOnInteraction: true,
      slidesToScroll: 1,
      draggable: true,
    },
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className={styles.container}>
        <div className="blaze-slider" ref={elRef}>
          <div className="blaze-container">
            <div className="blaze-track-container">
              <div className="blaze-track">
                {images.map((img, index) => (
                  <div key={index} className={styles.slider__item}>
                    <img src={img} alt={`Slide ${index}`} className={styles.slider__img} />
                  </div>
                ))}
              </div>
            </div>
            <div className="my-structure">
              {/* <button className="blaze-prev" aria-label="Go to previous slide"></button> */}
              <div className="blaze-pagination"></div>
              {/* <button className="blaze-next" aria-label="Go to next slide"></button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
