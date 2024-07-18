import { AnimatePresence } from "framer-motion";
import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components";
// import toast, { Toaster } from 'react-hot-toast';
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import { setProductItem } from "./redux/productSlice";
import { getAllProductItems } from "./utils/firebaseFunctions";

const App = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {

    (async () => {
      try {
     
      const data = await getAllProductItems();
      dispatch(setProductItem(data));
       
    } catch (error) {
      
       console.log(error) 
    }
    })();

  }, []);

  return (
   
    <>
      <AnimatePresence onExitComplete>
        <Toaster />
        <div className="w-full h-auto flex flex-col box-border overflow-hidden">
          <Header />
          <main className="my-10  w-full h-full box-border relative min-h-[calc(100vh-120px)]">
            {/* page render here  */}
            <Outlet />
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </AnimatePresence>
    </>
    
  );
};

export default App;