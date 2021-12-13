import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./LoginMain.css";

const LoginMain = () => {
  const [ id, setId ] = useState("");
  const [ passwd, setPasswd ] = useState("");
  const printIdAndPasswd = () => {
    console.log(id, passwd)
  }

  const loginMainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (loginMainRef !== null) {
      console.log(loginMainRef.current);
      const { current } = loginMainRef;
      if (current) {
        current.style.opacity = "0";
        current.style.transition = `opacity 3s 0.1s`;
        current.style.opacity = "1";
      }
    }
  }, []);

  return (
    <>
      <div ref={loginMainRef} style={{ opacity: 0 }}>
        <div className="loginMain fullsize">
          <section className="idAndPasswd">
            <div className="id form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingId"
                placeholder="Id"
                onChange={e => setId(e.target.value)}
              />
              <label htmlFor="floatingId">Id</label>
            </div>

            <div className="passwd form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={e => setPasswd(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="buttonContainer">
              <div className="d-grid gap-2">
                <button onClick={printIdAndPasswd} className="loginButton btn btn-primary" type="button">
                  Login
                </button>
              </div>
            </div>
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
