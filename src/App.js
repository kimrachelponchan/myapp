import './App.css';
import {useState} from 'react';

function Box(props){

  const {color, number,count, setCount} = props;
  let {index} = props;

  return(
    // 개별 count 
    <div onClick={()=> {setCount((prev) => {
      const newCounts = [...prev];
      newCounts[index] = newCounts[index] + 1;
      return newCounts;
    })}} 
    // count 1 -> color[0] > color[1](1%3=1)   count 2 -> color[1] > color[2](2%3=2)   count 3 -> color[2] > color[3](3%3=0) count%color.length
    className={`${color[count%color.length]} h-20 w-20 mx-1`}>나는{number}번째 클릭 수: {count}</div>
  )
}

function App() {
  const [count, setCount] = useState([0,0,0]);
  const color = ['bg-red-300','bg-blue-300','bg-yellow-300'];

  return (
    <div className='flex'>
      {color.map((_, index)=>{
        return(
        <Box color={color} number={index + 1} setCount={setCount} count={count[index]} index={index} />
      )
      })}
    </div>
  );
}

export default App;