
function Title() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const finalMessage = 'THE STOESZER'
  let message = 'THE STOESZER'

  let interval = null;
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    message = message
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return finalMessage[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= message.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);

  return (
    <div>
      {message}
    </div>
  );
}

export default Title;
