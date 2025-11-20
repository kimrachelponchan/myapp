import { Link } from "react-router-dom"
import {A,B,C} from "./App";

export const Home = ()=>{

    const link = ['other','A','B','C'];
    const color = ['bg-blue-300','bg-red-300','bg-yellow-300','bg-gray-300'] 


    return(
      <>
        <div className="w-full h-20 flex items-center bg-blue-400 justify-center text-white text-2xl">Home</div>
            <div className="flex w-full">
        {link.map((link, index)=> {
            return(
                <Link to={`/${link}`}><div className={`${color[index]} w-[200px] h-[100px]`}>{link}</div></Link>
            )
        })}
        </div>
      </>
    )
  }