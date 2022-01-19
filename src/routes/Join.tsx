import { useState } from "react";
import Footer from "../components/Footer";
import IdAndPasswordDefaultAddress from "../components/join/IdAndPasswordDefaultAddress";
import "./Join.css";

const Join = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const alarmOn = () => {
    console.log("로그인 실패")
  }
  //회원가입 실패하면 알람이 1초간 켜졌다가 꺼짐

  return (
    <>
      <div className="joinMain fullsize">
        <IdAndPasswordDefaultAddress
          id={id}
          setId={setId}
          password={password}
          setPassword={setPassword}
          address={address}
          setAddress={setAddress}
          alarmOn={alarmOn}
        />
        <Footer />
      </div>
    </>
  );
};

export default Join;
