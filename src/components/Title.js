import { useEffect, useState } from 'react';

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
    <div>
      <h1 className='font-bold text-6xl'
      onMouseOver={() => setIteration(0)} onMouseOut={() => setIteration(0)}>
        {printName}
        </h1>
      <div>{/* Computer immage */}</div>
      <div>
        <p>Hi, I'm Phillip Splettstoeszer, an expert Full Stack Developer.</p>
        {/* TO DO: Add linkedIn and github icons that link to my sites */}
      </div>
      <div>
        <h3>My Skills:</h3>
        {/* Add images of html, css, js, tsx, tailwind, react, nextjs, express, mango, postgres, etc. */}
      </div>
    </div>
  );
}

export default Title;
