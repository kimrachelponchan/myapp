import './App.css';
import {useRef} from 'react';
// 이 기능을 위해서는 npm install react-router-dom 을 설치해야함함

function App() {
  
  const boxRef = useRef();

  const scrollToBottom = () => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  };

  return (
    <div>
      <div ref={boxRef} style={{ height: "100px", overflowY: "scroll", border: "1px solid black" }}>
        {Array.from({ length: 50 }, (_, i) => <p key={i}>Item {i+1}</p>)}
      </div>
      <button onClick={scrollToBottom}>맨 아래로</button>
    </div>
  );
}

export default App;