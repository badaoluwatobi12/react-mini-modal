import React from "react";

import Modal from "./modal/Modal";
import Sidebar from "./modal/Sidebar";
import Home from "./modal/Home";

function modal() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default modal;
