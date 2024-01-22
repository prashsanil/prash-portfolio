'use client';
import React from 'react';
import Image from 'next/image';
import { motion, spring } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

import prashphotu from '@/lib/data';
import Link from 'next/link';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.3,
            }}
          >
            <Image
              src={prashphotu}
              alt={'Prash Photo'}
              width={210}
              height={2100}
              priority={true}
              className='h-30 w-30 rounded-full object-cover border-[0.45rem] border-solid border-white shadow-xl'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: spring,
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <span className='absolute bottom-0 right-0 text-4xl'>👋</span>
          </motion.div>
        </div>
      </div>

      <motion.p
        className='mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello! I&apos;m{' '}
        <span className='text-pink-500 font-semibold'>Prashwitha Sanil</span>, a{' '}
        <span className='text-pink-500 font-semibold'>Fullstack Developer</span>{' '}
        with <span className='text-pink-500 font-semibold'>2 years</span> of
        experience and I build things for the web. 😎
      </motion.p>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 transition border border-black-1/10'
        >
          Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a
          href='/Prashwitha_Sanil_Resume.pdf' download
          className='group bg-pink-500 text-white px-7 py-3 gap-2 rounded-full flex items-center focus:scale-110 hover:scale-110 hover:bg-pink-600 active:scale-105 transition cursor-pointer border border-black-1/10'
        >
          Download CV <HiDownload className='opacity-70 group-hover:translate-y-1 transition'/>
        </a>
        <a
          href='https://www.linkedin.com/in/prashwitha-sanil/' target="_blank"
          className='bg-white text-gray-800 p-4 gap-2 rounded-full flex items-center focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-50 hover:text-gray-950 active:scale-105 transition border border-black-1/10'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://github.com/prashsanil' target="_blank"
          className='bg-white text-gray-800 p-4 gap-2 rounded-full flex items-center focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-50 active:scale-105 hover:text-gray-950 transition border border-black-1/10'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
