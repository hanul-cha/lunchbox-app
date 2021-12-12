import { useEffect, useRef, useState } from "react";


const LoginMain = () => {

  const loginMainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if(loginMainRef !== null){
      console.log(loginMainRef.current)
      const { current } = loginMainRef
      if(current){
        current.style.transition = `opacity 3s 0s`;
        current.style.opacity = "1";
      }
    }
  },[])

  return (
    <>
      <div ref={loginMainRef} style={{opacity:0}}><h1>LoginMain</h1></div>
    </>
  );
};

export default LoginMain;
