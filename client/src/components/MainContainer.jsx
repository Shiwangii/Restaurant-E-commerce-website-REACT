import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../page/Home";
import Feature from "./Feature";
import Menu from "./Menu";

const MainContainer = () => {
  const dispatch = useDispatch()
  const productItem = useSelector((state)=>state.productItem)
  // console.log(productItem)
  return (
   <>
    <div className="w-full ">
      <Home/>
      <Feature/>
      <Menu/>
    </div>
   </>
  );
  
};

export default MainContainer;
