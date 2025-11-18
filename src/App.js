import './App.css';

function Circle(props){

  const {color, number} = props;

  return(
    <div className={`rounded-full h-20 w-20 ${color} flex items-center justify-center`}>{number}</div>
  )
}

function Box(props){

  const {color, number} = props;

  return(
    <div className={`h-20 w-20 ${color} flex justify-center items-center`}>{number}</div>
  )
}


function App() {

  const colors = ['bg-red-100','bg-red-200','bg-red-300','bg-red-400','bg-red-500'];

  return(
    <>
    {colors.map((color, index) =>{

      const circleNumber = index * 2 + 1;
      const boxNumber = index * 2 + 2;

      return(
        <>
        <Circle color={color} number={circleNumber}/>
        <Box color={color} number={boxNumber} />
        </>
      )
    }
  )}
    </>
  )
}

export default App;
