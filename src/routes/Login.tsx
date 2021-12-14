import Loading from "../components/Login/Loading";
import { useState } from "react";
import LoginMain from "../components/Login/LoginMain";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [ id, setId ] = useState("");
  const [ passwd, setPasswd ] = useState("");
  const login = () => {
    console.log(id, passwd)
  }

  setTimeout(() => {
    setLoading(false);
  },3000);

  return <>{loading ? <Loading /> : <LoginMain id={id} passwd={passwd} setId={setId} setPasswd={setPasswd} login={login} />}</>;
};

export default Login;
