import './App.css';

// 1. 함수 선언 방법
// 컴포넌트 선언시 대문자 Age
function Age(props){

  const {numbers, others} = props;
  console.log(props);

  return (
    <>
      {others.map((color, index)=>{
        return(
          <div className={`bg-${color}-300 h-20 w-20`}><p className={""}>{numbers[index]}</p></div>
        )
      })}
    </>

  )
}


function App() {
  const others = ['blue', 'gray', 'red', 'yellow','red'];
  const numbers = [1,2,3,4,5];
  return (
    <>
      <div className={`h-full w-full`}>
        <Age numbers = {numbers} others={others}/>
        
      </div>
      
    </>
  );
}

export default App;
