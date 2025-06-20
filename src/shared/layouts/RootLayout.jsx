import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../features/navbar/Navbar";
import Footer from "../../features/footer/Footer";
import { useModalContext } from "../../features/modals/shared/hooks/useModalContext";

import { ToastContainer } from "react-toastify";

const RootLayout = ({ title }) => {
  const { ModalPortal } = useModalContext();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar />
      <main>
        <ToastContainer />
        <Outlet />
        <ModalPortal />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(RootLayout);
