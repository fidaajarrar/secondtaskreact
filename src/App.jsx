import { useState } from 'react';


function App() {
  let [count, setCount] = useState(0);
  const changeCounter= ()=>{
    setCount(count+1);
    
  }

  return (
    <>
<button onClick={changeCounter}>Fidaa Jarrar clicks {count}</button>
    </>
  );
}

export default App;
