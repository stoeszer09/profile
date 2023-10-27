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
import linkedin from '../assets/LinkedIn.png'
import computer from '../assets/computer.avif'

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
      <div className='flex'>
        <div className='flex flex-col w-3/5'>
          <h1 className='font-bold text-6xl p-10'
          onMouseOver={() => setIteration(0)} onMouseOut={() => setIteration(0)}>
          {printName}
        </h1>

        <div className='pl-10'>
          <p className='my-5 mx-5'>Hi, I'm Phillip Splettstoeszer, an expert Full Stack Developer.</p>
          <div className='flex'>
            <a href='https://github.com/stoeszer09'>
              <img className='w-6 h-6 m-3' src={github} alt='github image'/>
            </a>
            <a href='https://www.linkedin.com/in/phillip-splettstoeszer/'>
              <img className='w-6 h-6 m-3' src={linkedin} alt='linkedin image'/>
            </a>
          </div>
        </div>
        </div>


        <div className='max-w-xs'>
          <img className='scale-75 ml-10 rounded-xl' src={computer} alt='computer' />
        </div>
      </div>

      <div className='flex p-10'>
        <h3 className='font-bold pr-5'>My Skills:</h3>
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
        
      </div>
    </div>
  );
}

export default Title;
