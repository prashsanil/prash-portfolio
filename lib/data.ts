import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import wikiPrompts from '@/public/wikiprompts.png';
import pumpItUp from '@/public/pumpitup.png';
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  //   {
  //     title: "Bachelors of Engineering, Computer Science",
  //     location: "Bengaluru, India",
  //     description:
  //       "",
  //     icon: React.createElement(LuGraduationCap),
  //     date: "2019",
  //   },
  {
    title: 'Software Engineer',
    location: 'Bengaluru, India',
    description:
      'I have 2 years of experience in front-end. I am upskilling to full stack. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. ',
    icon: React.createElement(CgWorkAlt),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Wiki Prompts',
    description:
      'Find and share helpful prompts to elevate your GPT results!',
    tags: ['React', 'Next.js', 'JavaScript', 'MongoDB', 'Tailwind'],
    imageUrl: wikiPrompts,
  },
  { 
    title: 'Pump It Up',
    description: 'Website to help you with your fitness journey.',
    tags: ['React', 'JavaScript', 'Tailwind', 'Material UI'],
    imageUrl: pumpItUp,
  },
] as const;

export const skillsData = [
  'Java',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'SQL',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Python',
] as const;
