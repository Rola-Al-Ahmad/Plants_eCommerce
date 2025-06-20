import React, { useMemo } from "react";
import { Link } from "react-router";

const PageSection = ({ pagetitle }) => {
  const title = useMemo(() => pagetitle, [pagetitle]);

  return (
    <section className="page-section page-section-bg mb-5 text-center">
      <p className="text-muted">
        <Link to="/">Home</Link> / {title}
      </p>
      <div className="mb-2 text-uppercase fw-bold">{title}</div>
    </section>
  );
};

export default React.memo(PageSection);
