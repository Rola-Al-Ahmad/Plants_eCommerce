import React from "react";

const Container = ({ children, className }) => {
  return (
    <section className={`container my-5 py-5 ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default React.memo(Container);
