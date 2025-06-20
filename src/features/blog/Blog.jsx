import React from "react";

import PageSection from "../../shared/components/molecules/PageSection";
import Blogs from "./components/Blogs";

const Blog = () => {
  return (
    <>
      <PageSection pagetitle="Blog" />
      <Blogs />
    </>
  );
};

export default React.memo(Blog);
