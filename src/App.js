import './App.css';
import {useState} from "react";

function Button({color, name, index, setClicked}) {
  return(
    <>
      <button
        onClick={()=>{setClicked(index)}}
        className={`${color} button-style`}>나는 {name}색
      </button>
    </>
  )
}



function App() {
  const [clicked, setClicked] = useState(5);

  const color = ['bg-blue-400', 'bg-gray-400', 'bg-red-400', 'bg-green-400', 'bg-yellow-400'];
  const name = ['파랑', '회색', '빨강', '초록', '노랑', '기본'];
  return(
    <>
      <div className={`h-[20vh] w-full`}>
        <div className={`flex`}>
          {color.map((colors, index) => {
            return(
              <Button color={colors} name={name[index]} index={index} setClicked={setClicked}/>
            )
          })}
        </div>
        {clicked === 5 ?
          <div>기본창입니다. 여기는 기본적인 설명이 포함되어 있습니다</div> :
          <div>{name[clicked]}색을 설명하는 글입니다 여기에는 {name[clicked]}색이 포함되어 있습니다. </div>  
        }

        {/* {clicked === 1 ?
          <div>기본창입니다. 여기는 기본적인 설명이 포함되어 있습니다</div> :
          clicked === 2 ?
          <div>파랑색을 설명하는 글입니다 여기에는 파랑색이 포함되어 있습니다. </div>:
          clicked === 3 ?
          <div>회색색을 설명하는 글입니다 여기에는 회색색이 포함되어 있습니다. </div>:
          null 
        } */}
      </div>
    </>
  )
}

export default App;
