import Loading from "../components/Login/Loading";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginMain from "../components/Login/LoginMain";
import RunLogin from "../backend/RunLogin";
import LoginFailAlert from "../components/Login/LoginFailAlert";


const Login = () => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");
  const [runLogin, setRunLogin] = useState(false);
  const [failedAlarm, setFailedAlarm] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if(failedAlarm){
      setTimeout(() => {
        setFailedAlarm(false);
      }, 1000);
    }
  })
  /* 
  여기서 useEffect를 쓰는 이유:
  failedAlarm은 런로딩 컴포넌트에서 버튼을 누를때마다
  true로 바뀌어 리랜더가 발생하고 거기에 반응해서 한번씩 실행해 주기 위해 작성함
  저거 없으면 내생각엔 무한루프나 여러번 실행될것이다. 
  */

  //clean-up
  useEffect(() => {
    return () => {
      setRunLogin(false)
    }
  },[])
  /* 
  route를 떠나기 전에 전부 꺼주는 클린업 공식같은 느낌이 강하다
  */

  const login = () => {
    setRunLogin(true);
  };

  const goMain = () => {
    clearTimeout()
    navigate("/main",{
      state: {
        id
      }
    })
    
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      {failedAlarm && <LoginFailAlert />}
      {loading ? (
        <Loading />
      ) : (
        <LoginMain
          id={id}
          passwd={passwd}
          setId={setId}
          setPasswd={setPasswd}
          login={login}
        />
      )}

      {runLogin && (
        <RunLogin
          id={id}
          passwd={passwd}
          setRunLogin={setRunLogin}
          setFailedAlarm={setFailedAlarm}
          goMain={goMain}
        />
      )}
    </>
  );
};

export default Login;
