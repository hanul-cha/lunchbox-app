import Header from "../components/Main/Header";
import Content from "../components/Main/Content";
import OrderComplete from "../components/Main/OrderComplete";
import OrderCanceled from "../components/Main/OrderCanceled";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Main = () => {
  const {
    state: { id },
  } = useLocation();
  console.log(id);
  return (
    <>
      <h2>Main</h2>
    </>
  );
};

export default Main;
