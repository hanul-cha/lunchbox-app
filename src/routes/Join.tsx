import Footer from "../components/Footer";

const Join = () => {
  return (
    <>
      <div className="joinMain fullsize">
        <div className="idAndPasswordDefaultAddress">
          <div className="id form-floating">
            <input
              type="text"
              className="form-control"
              id="idInJoinInput"
              placeholder="Id"
            />
            <label htmlFor="idInJoinInput">Id</label>
          </div>
          <div className="passwd form-floating">
            <input
              type="text"
              className="form-control"
              id="passwordInJoinInput"
              placeholder="Id"
            />
            <label htmlFor="passwordInJoinInput">password</label>
          </div>
          <div className="id form-floating">
            <input
              type="text"
              className="form-control"
              id="addressInJoinInput"
              placeholder="Id"
            />
            <label htmlFor="addressInJoinInput">default aaddress</label>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Join;
