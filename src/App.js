import './App.css';
import { useRef } from "react";

function App() {
  const boxRef = useRef();

  const scrollToBottom = () => {
    boxRef.current.scrollTo({
      top: boxRef.current.scrollHeight, // 맨 아래
      behavior: "smooth"                // 부드럽게 스크롤
    });
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          height: "100px",
          overflowY: "scroll",
          border: "1px solid black"
        }}
      >
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>
      <button
        onClick={scrollToBottom}
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-400"
      >
        맨 아래로
      </button>
    </div>
  );
}

export default App;
