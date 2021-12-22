import React from "react";

interface IPDA_TypeProps {
  id: string;
  setId: (a: string) => void;
  password: string;
  setPassword: (a: string) => void;
  address: string;
  setAddress: (a: string) => void;
}

const IdAndPasswordDefaultAddress = ({
  id,
  setId,
  password,
  setPassword,
  address,
  setAddress,
}: IPDA_TypeProps) => {
  const setUser = () => {
    console.log(id, password, address);
  };

  const join = () => {
    setUser();
  };
  return (
    <>
      <div className="idAndPasswordDefaultAddress">
        <div className="id form-floating">
          <input
            type="text"
            className="form-control"
            id="idInJoinInput"
            placeholder="Id"
            onChange={(e) => setId(e.target.value)}
          />
          <label htmlFor="idInJoinInput">Id</label>
        </div>
        <div className="passwd form-floating">
          <input
            type="text"
            className="form-control"
            id="passwordInJoinInput"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="passwordInJoinInput">password</label>
        </div>
        <div className="address form-floating">
          <input
            type="text"
            className="form-control"
            id="addressInJoinInput"
            placeholder="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="addressInJoinInput">default aaddress</label>
        </div>
        <div className="buttonContainer">
          <div className="d-grid gap-2">
            <button
              className="joinButton btn btn-primary"
              type="button"
              onClick={join}
            >
              join
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdAndPasswordDefaultAddress;
