import './App.css';
import {useState} from "react";


function App() {

  const [count, setCount] = useState(0);
  const color = ['bg-red-300','bg-blue-300','bg-green-300','bg-yellow-300','bg-gray-300'];

  return (
    <>
      <div onClick={()=>{setCount(count + 1)}} className={`w-20 h-20 ${color[count % color.length]}`}>you click me {count}</div>
    </>
  );
}

export default App;