import './App.css';
import {useRef} from 'react';
// 이 기능을 위해서는 npm install react-router-dom 을 설치해야함함

function App() {
  
  // Ref 개념설명 단계
  // const inputRef = useRef(null);
  // document.querySelector('.w-20');

  // const handleInputFocus = ()=>{
  //   inputRef.current.focus();
  //   inputRef.current.value = "클릭했어요!";
  //   inputRef.someValue = "123";
  //   // 새로 만들수도 있음
  //   console.log(inputRef);
  // }


  // Ref 를 배열로 관리
  const inputRef = [useRef(null), useRef(null), useRef(null)];


  const handleInputFocus = (index)=>{
    inputRef[index].current.focus();
    if(index === 0){
      inputRef[index].current.value = "Mike!";
    }else if(index === 1){
      inputRef[index].current.value = "Alice!";
    }else{
      inputRef[index].current.value = "Tom!";
    }
  }


  return (
    <>
      {/* Ref 개념 설명 단계 */}
      {/* <label name={`text`}>내용을 입력:</label>
      <input ref={inputRef} type={`text`} name={`text`} className={`w-20 bg-gray-300`}></input>
      <button onClick={handleInputFocus} className={`w-20 h-10 bg-blue-500 hover:bg-gray-400 rounded-xl text-white font-bold cursor-pointer`}>입력하기</button> */}


      {/* Ref 를 배열로 관리 */}
      <div className={`flex flex-col`}>
        {inputRef.map((ref,index)=>{
          return(
            <input key={`input${index}`} ref={ref} type={`text`} placeholder={`Input${index + 1}`}></input>
          )
        })}
        <div>
          {inputRef.map((_,index)=>{
            return(
              <button className={`mx-2 p-1 bg-blue-500 rounded-xl font-bold text-white`} key={`button${index}`} onClick={()=>handleInputFocus(index)}>Focus{index + 1}</button>
            )
          })}
        </div>

      </div>
    </>
  );
}

export default App;