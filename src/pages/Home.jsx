import React, { useRef } from 'react';
import { AboutSchool } from './../components/AboutSchool/AboutSchool';
import { Benefits } from './../components/Benefits/Benefits';
import { EduConcept } from './../components/EduConcept/EduConcept';
import { GallerySliderV2 } from './../components/GallerySliderV2/GallerySliderV2';
import { News } from './../components/News/News';
import { QwForm } from './../components/QwForm/QwForm';
import { SendRequest } from './../components/SendRequest/SendRequest';
import { CompositionOfTeachers } from './../components/CompositionOfTeachers/CompositionOfTeachers';
import { SchoolEnglish } from './../components/SchoolEnglish/SchoolEnglish';

export const Home = () => {
  const scrollRef = useRef();
  // вкладывается в переменную о местоположение DOM
  return (
    <div>
      <SendRequest scrollRef={scrollRef} />
      <GallerySliderV2 />
      <AboutSchool />
      <News />
      <SchoolEnglish />
      <Benefits />
      <EduConcept />
      <CompositionOfTeachers />
      <QwForm scrollRef={scrollRef} />
    </div>
  );
};
