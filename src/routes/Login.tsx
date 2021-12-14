import Loading from "../components/Login/Loading";
import { useState } from "react";
import LoginMain from "../components/Login/LoginMain";
import RunLogin from "../backend/RunLogin";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");
  const [runLogin , setRunLogin] = useState(false);
  const [ failedAlarm, setFailedAlarm ] = useState(false)
  const login = () => {
    setRunLogin(true)
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      {failedAlarm && <h1>로그인 실패</h1>}
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

      {runLogin && <RunLogin id={id} passwd={passwd} setRunLogin={setRunLogin} setFailedAlarm={setFailedAlarm} />}
    </>
  );
};

export default Login;
