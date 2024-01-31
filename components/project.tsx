'use client';

import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';

type ProjectType = {
  id: number;
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  githubLink: string;
  liveLink: string;
};

export default function Project({
  id,
  title,
  description,
  tags,
  imageUrl,
  liveLink,
  githubLink,
}: ProjectType) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'], //bottom of viewport crosse top, stop after bottom of viewport has gone 33% beyond the project
  });
  useTransform(scrollYProgress,[0,1],[0.5,1]);

const scaleProgress = useTransform(scrollYProgress, [0,1],[0.8,1]);
const opacityProgress = useTransform(scrollYProgress, [0,1],[0.5,1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group mb-3 sm:mb-8 last:mb:0'
    >
      <section className='bg-gray-100 w-[50rem] max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] even:pl-3 hover:bg-gray-200 transition rounded-lg'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pe-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 mr-10 mb-5'>
            {description}
          </p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag) => (
              <li
                className='bg-black/[0.5] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className='mt-8 flex flex-row gap-4'>
            <a
              href={liveLink}
              target='_blank'
              rel='nofollow'
              className='bg-black/[0.7] border text-gray-50 border-gray-950 px-10 py-3 rounded-full focus:scale-105 hover:bg-black/[0.9] hover:scale-105 active:scale-100 transition'
            >
              <AiOutlineExport size='1.2rem' />
            </a>
            <a
              href={githubLink}
              target='_blank'
              rel='nofollow'
              className='bg-black/[0.7] border text-gray-50 border-gray-950 px-10 py-3 rounded-full focus:scale-105 hover:bg-black/[0.9] hover:scale-105 active:scale-100 transition'
            >
              <AiFillGithub size='1.2rem' />
            </a>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-105
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2'
        />
      </section>
    </motion.div>
  );
}
