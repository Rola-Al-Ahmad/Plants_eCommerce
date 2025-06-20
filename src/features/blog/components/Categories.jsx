import React, { useMemo } from "react";

const Categories = () => {
  const blogCategories = useMemo(
    () => [
      "Business",
      "Productivity",
      "Work From Home",
      "Lifestyle",
      "Design",
      "Fitness",
      "Health",
      "Environment",
      "Sustainability",
      "SEO",
    ],
    []
  );
  return (
    <div className="blog-aside-box border rounded p-2 mt-4">
      <h2 className="border-bottom pb-2 text-center">Categories</h2>
      {blogCategories.map((category, index) => (
        <div
          className={`blog-post-link ${index === 0 ? "mt-3" : "mt-1"}`}
          key={index}
        >
          <a href="#">{category}</a>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Categories);
