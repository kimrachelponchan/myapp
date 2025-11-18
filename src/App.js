import './App.css';

// 1. 함수 선언 방법
// 컴포넌트 선언시 대문자 Age
function Age(props){

  const {a, style} = props;
  console.log(props);

  return (
    <>
      <div className={`${style} h-20 w-20`}><p className={"spinner-reverse"}>{a}</p></div>
    </>

  )
}


function App() {
  return (
    <>
      <div className={`h-full w-full`}>
        <Age a = '10' style = "bg-blue-300"/>
        <Age a = '20' style = "bg-gray-300"/>
        <Age a = '30' style = "custom-box-spin"/>
        <Age a = '40' style = "custom-box-red"/>
      </div>
      
    </>
  );
}

export default App;
