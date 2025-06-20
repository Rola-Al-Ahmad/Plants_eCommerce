import React from "react";
import { Link } from "react-router-dom";

const ModalTriggerLink = ({ iconClass, onOpen }) => {
  return (
    <Link to="#" onClick={onOpen}>
      <i className={iconClass}></i>
    </Link>
  );
};

export default React.memo(ModalTriggerLink);
