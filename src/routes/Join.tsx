import { useState } from "react";
import Footer from "../components/Footer";
import IdAndPasswordDefaultAddress from "../components/join/IdAndPasswordDefaultAddress";
import "./Join.css";

const Join = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const alarmOn = () => {

  }

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
