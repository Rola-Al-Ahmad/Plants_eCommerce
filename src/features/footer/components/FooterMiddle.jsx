import React, { useCallback, useMemo } from "react";
import { Link } from "react-router";

const FooterMiddle = () => {
  const footer_social = useMemo(
    () => [
      { icon: "ri-facebook-fill", link: "#" },
      { icon: "ri-twitter-x-fill", link: "#" },
      { icon: "ri-instagram-line", link: "#" },
      { icon: "ri-linkedin-fill", link: "#" },
      { icon: "ri-pinterest-fill", link: "#" },
    ],
    []
  );

  const footer_menu = useMemo(
    () => [
      { title: "Information", link: "#" },
      { title: "Contact Us", link: "#" },
      { title: "Privacy Policy", link: "#" },
      { title: "Terms & Condition", link: "#" },
      { title: "FAQs", link: "#" },
    ],
    []
  );

  const SocialLinks = useCallback(
    () =>
      footer_social.map((social, index) => (
        <Link to={social.link} key={index}>
          <i className={social.icon}></i>
        </Link>
      )),
    [footer_social]
  );

  const FooterMenu = useCallback(
    () =>
      footer_menu.map((menu, index) => (
        <Link
          to={menu.link}
          key={index}
          className="text-decoration-none text-white"
        >
          {menu.title}
        </Link>
      )),
    [footer_menu]
  );
  return (
    <div className="col-lg-6">
      <div className="logo navbar-brand footer-logo">
        <Link to="/" className="text-decoration-none">
          Leaf<span>Craft</span>
        </Link>
      </div>
      <p className="text-white">
        We bring nature closer to your home with a curated selection of indoor
        plants that elevate your space, purify the air, and brighten your day —
        naturally.
      </p>
      <div className="d-flex justify-content-start justify-content-md-center gap-2 footer-social">
        {SocialLinks()}
      </div>
      <div className="footer-menu mt-5 d-flex align-items-center justify-content-center gap-2">
        {FooterMenu()}
      </div>
    </div>
  );
};

export default React.memo(FooterMiddle);
