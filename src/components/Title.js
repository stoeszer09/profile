import { useEffect, useState } from 'react';
import css from '../assets/css.png'
import github from '../assets/Github.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import mongodb from '../assets/mongodb.webp'
import nextjs from '../assets/nextjs.png'
import node from '../assets/node.png'
import postgres from '../assets/postgres.webp'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import typescript from '../assets/typescript.png'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let message = 'THE STOESZER';
const finalMessage = 'THE STOESZER';

function Title() {
  const [printName, setPrintName] = useState('');
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      message = message
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return finalMessage[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');
      setPrintName(message);
      if (iteration >= message.length) {
        clearInterval(interval);
      } else if (iteration < message.length) {
        setIteration((c) => c + 1 / 3);
      }
    }, 30);
  return () => clearInterval(interval);
  }, [iteration]);

  return (
    <div className='m-6 p-6 bg-green-50 rounded-3xl shadow-lg '>
      <h1 className='font-bold text-6xl'
      onMouseOver={() => setIteration(0)} onMouseOut={() => setIteration(0)}>
        {printName}
        </h1>
      <div>{/* Computer immage */}</div>
      <div>
        <p>Hi, I'm Phillip Splettstoeszer, an expert Full Stack Developer.</p>
        {/* TO DO: Add linkedIn and github icons that link to my sites */}
      </div>
      <div className='flex'>
        <h3>My Skills:</h3>
        <img className='w-10 h-10' src={html} alt='html image'/>
        <img className='w-10 h-10' src={css} alt='css image'/>
        <img className='ml-5 w-10 h-10' src={javascript} alt='javascript image'/>
        <img className='w-10 h-10' src={typescript} alt='typescript image'/>
        <img className='ml-5 w-10 h-10' src={tailwind} alt='tailwind image'/>
        <img className='w-10 h-10' src={react} alt='react image'/>
        <img className='ml-5 w-10 h-10' src={node} alt='node image'/>
        <img className='w-10 h-10' src={nextjs} alt='nextjs image'/>
        <img className='ml-5 w-10 h-10' src={postgres} alt='postgres image'/>
        <img className='w-10 h-10' src={mongodb} alt='mongodb image'/>
        <img className='w-10 h-10' src={github} alt='github image'/>
      </div>
    </div>
  );
}

export default Title;
