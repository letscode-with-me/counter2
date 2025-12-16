"use client"

import { useState } from "react";

// export const  function UI(){
//         return(
//             <div className="w-[32px] h-[32px] bg-lime-300">
//                     <p>0</p>
//             </div>
//         );
// }



export default function UI() {
  const [score, newscore] = useState(0);
  function increasebtn() {
    newscore(score + 1)
  }

  function decreasebtn() {
    if (score > 0) {
      newscore(score - 1);
    }
  }
  function reset() {
    newscore(0)
  }
  function setscorebtn() {
    const score_temp = prompt("");
    if (!score_temp) return null;
    newscore(Number(score_temp))

    localStorage.setItem("valuescore", score_temp);
  }
  return (
    <div className="flex justify-center items-center h-screen  ">
      <div className="w-[20rem] h-[30rem] bg-red-300 flex flex-col 
         rounded-xl shadow-black shadow-md items-center gap-y-[20px]  ">
        <div className="w-[150px] h-[150px] bg-white rounded-[50%] flex flex-col
     justify-center  items-center m-[20px]">
          <p className="flex  justify-center items-center text-lg">{score}</p>
        </div>
        <button className="border-white  rounded-lg  w-[200px] h-[2rem] 
      active:scale-95 bg-white  text-lg " onClick={increasebtn}>Increase</button>
        <button className="border-white  rounded-lg  w-[200px] h-[2rem]
       active:scale-95 bg-white text-lg" onClick={decreasebtn}>Decrease</button>
        <button className="border-white  rounded-lg  w-[200px] h-[2rem]
       active:scale-95 bg-white text-lg " onClick={reset}>Reset</button>
        <button className="border-white  rounded-lg  w-[200px] h-[2rem]
       active:scale-95 bg-white text-lg " onClick={setscorebtn}>Set Score</button>
      </div>
    </div>
  );
}