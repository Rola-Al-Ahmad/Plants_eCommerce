import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Navbar as BsNavbar, Nav } from "react-bootstrap";
import { useWishListContext } from "../wishlist/hooks/useWishListContext";
import useCartContext from "../cart/hooks/useCartContext";

import NavLink from "./components/NavLink";
import ModalTriggerLink from "./components/ModalTriggerLink";

import "./components/Navbar.css";
import { useModalContext } from "../modals/shared/hooks/useModalContext";

function Navbar() {
  const { items: wishListItem } = useWishListContext();
  const { cartItem } = useCartContext();
  const { showModal } = useModalContext();

  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Shop", path: "/shop" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  const handleClose = useCallback(() => setExpanded(false), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById("navbarNav");
      if (
        navbar &&
        navbar.classList.contains("show") &&
        !navbar.contains(event.target)
      ) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClose]);

  return (
    <div className="nav w-100 fixed-top top-0 start-0 bg-light shadow-sm">
      <BsNavbar expand="lg" className="w-100" expanded={expanded}>
        <div className="logo navbar-brand">
          <Link to="/" className="text-decoration-none">
            Leaf<span>Craft</span>
          </Link>
        </div>

        <BsNavbar.Toggle
          id="navbar-toggler"
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
        />

        <BsNavbar.Collapse id="navbarNav">
          <ul className="menu navbar-nav d-flex justify-content-center align-items-center gap-3">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                path={link.path}
                title={link.title}
                handleClose={handleClose}
              />
            ))}
            <li className="nav-item ms-lg-4 menu-nav-icon">
              <div className="nav-icons d-flex justify-content-center align-items-center gap-3">
                <ModalTriggerLink
                  iconClass="bi bi-search"
                  onOpen={() => {
                    handleClose();
                    showModal("search");
                  }}
                />

                <ModalTriggerLink
                  iconClass="bi bi-person"
                  onOpen={() => {
                    handleClose();
                    showModal("signup");
                  }}
                />

                <Nav.Link
                  as={Link}
                  to="/wishlist"
                  className="position-relative"
                  onClick={handleClose}
                >
                  <i className="bi bi-heart"></i>
                  <span className="wishlist-count position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    {wishListItem.length}
                  </span>
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/cart"
                  className="position-relative"
                  onClick={handleClose}
                >
                  <i className="bi bi-cart"></i>
                  <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    {cartItem.length}
                  </span>
                </Nav.Link>
              </div>
            </li>
          </ul>
        </BsNavbar.Collapse>
      </BsNavbar>
    </div>
  );
}

export default React.memo(Navbar);
