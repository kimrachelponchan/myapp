import './App.css';
import {useState} from 'react';
import {Home} from "./home";
// 이 기능을 위해서는 npm install react-router-dom 을 설치해야함함
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

const Other = ()=>{
  return(
    <>
      <div>Other</div>
      <Back/>
    </>
  )
}

function A(){
  return(
    <>
      <div>A</div>
      <Back/>
    </>
  )
}


function B(){
  return(
    <>
      <div>B</div>
      <Back/>
    </>
  )
}


function C(){
  return(
    <>
      <div>C</div>
      <Back/>
    </>
  )
}

function Back(){
  return(
    <Link to={`/`}><button className={`button-style2`}>뒤로가기</button></Link>
  )
}


function App() {
  

  return (
    // 제일먼저 BrowserRouter로 감쌈
    <BrowserRouter>
      {/* 그 다음으로 Routes로 감싸기 */}
      <Routes>
        {/* 여기서 부터가 페이지를 나누는 공간 */}
        <Route path = "/" element={<Home/>}/>
        <Route path = "/other" element={<Other/>}/>
        <Route path = "/A" element={<A/>}/>
        <Route path = "/B" element={<B/>}/>
        <Route path = "/C" element={<C/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;