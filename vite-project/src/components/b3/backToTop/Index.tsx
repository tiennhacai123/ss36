import React, { useEffect, useState } from 'react'
import './Index.css'
export default function BackToTop() {
    const [showBtn,setShowBtn]= useState<boolean>(false)

    const handleScroll =()=>{
         if(window.scrollY>500){
                setShowBtn(true);
            }else{
                setShowBtn(false);
            };
    };

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        } 
    },[]);

    const handleBackTop = ()=>{
        window.scrollTo({
             top:0,
             behavior:'smooth',
        })
    }

  return (
    <div>BackToTop
        {showBtn && <button onClick={handleBackTop} className='btn-back-top'>back</button>}
    </div>
  )
}
