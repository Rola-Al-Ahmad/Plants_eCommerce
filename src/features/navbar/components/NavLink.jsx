import React from "react";
import { Nav } from "react-bootstrap";

import { NavLink as Link } from "react-router-dom";

const NavLink = ({ path, title, handleClose }) => {
  return (
    <li className="nav-item">
      <Nav.Link as={Link} className="nav-link" to={path} onClick={handleClose}>
        {title}
      </Nav.Link>
    </li>
  );
};

export default React.memo(NavLink);
