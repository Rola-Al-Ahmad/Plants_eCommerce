import React, { useMemo } from "react";

const ContactInfo = () => {
  const contactItems = useMemo(
    () => [
      {
        text: "Street, City, Country",
        icon: "bi bi-geo-alt-fill",
      },
      {
        text: "76 555 555",
        icon: "bi bi-telephone-fill",
      },
      {
        text: "ex@ex.com",
        icon: "bi bi-envelope-fill",
      },
      {
        text: "Mon-Fri: 8:00 - 17:00",
        icon: "bi bi-clock-fill",
      },
    ],
    []
  );
  return (
    <div className="row mt-5 p-4 contact-info align-items-center">
      {contactItems.map((item, index) => (
        <div className="col-md-6 col-lg-3 contact-items" key={index}>
          <i className={`${item.icon} text-success`}></i>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ContactInfo);
