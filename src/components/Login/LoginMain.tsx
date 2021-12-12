import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./LoginMain.css"

const LoginMain = () => {
  const loginMainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (loginMainRef !== null) {
      console.log(loginMainRef.current);
      const { current } = loginMainRef;
      if (current) {
        current.style.opacity = "0";
        current.style.transition = `opacity 3s 0s`;
        current.style.opacity = "1";
      }
    }
  }, []);

  return (
    <>
      <div ref={loginMainRef} style={{ opacity: 0 }}>
        <div className="loginMain">
          <section className="idAndPasswd">
            <div className="id">id</div>
            <div className="passwd">passwd</div>
            <div className="buttonContainer">buttonContainer</div>
          </section>
          <section className="wannaJoin">
            <span>혹시 한울도시락이 처음이신가요?</span>
            <Link to="./join">회원가입</Link>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LoginMain;
