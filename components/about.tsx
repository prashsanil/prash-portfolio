'use client';
import React from 'react';
import { motion } from 'framer-motion';

import SectionHeading from './section-heading';

export default function About() {
  return (
    <motion.section
      className='mb-28 max-w-[46rem] text-left leading-7 sm:leading-10 sm:mb-0 text-lg'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay: 0.75}}
    >
      <SectionHeading>About Me</SectionHeading>
      <p>
        &emsp;&emsp;I'm a <span className='font-semibold'>Developer</span> with
        a <span className='font-semibold'>Bachelor's Degree</span> in{' '}
        <span className='font-semibold'>Computer Science Engineering</span>.
        <br />
        I'm currently working in NTT Data IPS as a{' '}
        <span className='font-semibold'>Software Engineer</span>. My life in
        tech involves designing and implementing responsive user interfaces via
        React and TypeScript, collaborating with diverse teams, ensuring code
        integrity, and analyzing & improving the page performance. My core stack
        is{' '}
        <span className='font-semibold text-blue-500'>
          Java, ReactJS, NextJS
        </span>{' '}
        and <span className='font-semibold text-blue-500'>MongoDB</span>. I am
        also familiar with{' '}
        <span className='font-semibold text-blue-500'>
          TypeScript, Javascript
        </span>{' '}
        and <span className='font-semibold text-blue-500'>SQL</span>.
      </p>
      <p className=''>
        &emsp;&emsp;Apart from work, I enjoy playing video games, listening to
        music and learning new things. I'm currently learning video editing and
        glass painting. I'm also learning how to play the ukulele.
      </p>
    </motion.section>
  );
}
