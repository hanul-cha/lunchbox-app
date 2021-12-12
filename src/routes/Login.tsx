import Loading from "../components/Login/Loading";
import { useState } from "react";
import LoginMain from "../components/Login/LoginMain";

const Login = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  },3000);

  return <>{loading ? <Loading /> : <LoginMain />}</>;
};

export default Login;
