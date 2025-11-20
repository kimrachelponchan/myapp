import './App.css';
import {useRef} from 'react';
// 이 기능을 위해서는 npm install react-router-dom 을 설치해야함함

function App() {
  
  const inputRef = useRef(null);
  // document.querySelector('.w-20');


  const handleInputFocus = ()=>{
    inputRef.current.focus();
    inputRef.current.value = "클릭했어요!";
    inputRef.someValue = "123";
    // 새로 만들수도 있음
    console.log(inputRef);
  }

  return (
    <>
      <label name={`text`}>내용을 입력:</label>
      <input ref={inputRef} type={`text`} name={`text`} className={`w-20 bg-gray-300`}></input>
      <button onClick={handleInputFocus} className={`w-20 h-10 bg-blue-500 hover:bg-gray-400 rounded-xl text-white font-bold cursor-pointer`}>입력하기</button>
    </>
  );
}

export default App;