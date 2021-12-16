import Loading from "../components/Login/Loading";
import { useEffect, useState } from "react";
import LoginMain from "../components/Login/LoginMain";
import RunLogin from "../backend/RunLogin";
import LoginFailAlert from "../components/Login/LoginFailAlert";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");
  const [runLogin, setRunLogin] = useState(false);
  const [failedAlarm, setFailedAlarm] = useState(false);

  useEffect(() => {
    if(failedAlarm){
      setTimeout(() => {
        setFailedAlarm(false);
      }, 1000);
    }
  })

  const login = () => {
    setRunLogin(true);
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
        />
      )}
    </>
  );
};

export default Login;
