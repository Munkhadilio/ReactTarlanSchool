import React from 'react';
import { AboutSchool } from './../components/AboutSchool/AboutSchool';
import { Director } from './../components/Director/Director';
import { News } from './../components/News/News';
export const About = () => {
  return (
    <div>
      <Director />
      <AboutSchool />
      <News />
    </div>
  );
};
