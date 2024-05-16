import React, { useEffect, useState } from 'react'


const Cursor = () => {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const [bx,setbX]=useState(0)
    const [by,setbY]=useState(0)
    const cusr=()=>{
        document.addEventListener("mousemove",(e)=>{
           setX(e.x);
           setY(e.y);
           setbX(e.x-70);
           setbY(e.y-70);
        })
    }
    useEffect(()=>{
        cusr();
    },[])
  return (
   <>
    <div className="hidden md:block h-[25px] w-[25px] bg-brandDark rounded-[50%] fixed z-[1000]" style={{top:y, left:x}}></div>
    <div className="h-[200px] w-[200px] bg-blurlight rounded-[50%] fixed blur-[30px]" style={{top:by, left:bx}}></div>
   </>
  )
}

export default Cursor