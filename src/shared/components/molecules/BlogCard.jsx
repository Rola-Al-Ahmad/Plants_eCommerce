import React from "react";

import { Link } from "react-router";

const BlogCard = ({ blog, category }) => {
  const title = <h1 className="blog-title mt-2 mb-3">{blog.title}</h1>;
  const dot = (
    <h5 className="blog-meta">
      {blog.date} <span className="dot">•</span> <span>by Editor</span>
    </h5>
  );
  return (
    <div className={`blog-card overflow-hidden ${category && "mb-4"}`}>
      <div className="blog-img overflow-hidden rounded">
        <img
          src={blog.image}
          alt={`Blog-${blog.title}-Image`}
          className="img-fluid rounded"
        />
      </div>
      <div className="blog-content mt-3">
        {category && (
          <h6 className="blog-category">
            {blog.categories.map((category, index) => (
              <span key={index}>
                {category}
                <span className="dash">
                  {index < blog.categories.length - 1 && " | "}
                </span>
              </span>
            ))}
          </h6>
        )}
        {category ? (
          <>
            {title}
            {dot}
          </>
        ) : (
          <>
            {dot}
            {title}
          </>
        )}
        <p className="blog-desc">{blog.description}</p>
        <Link to="" className="blog-btn">
          Read More <i className="ri-arrow-right-long-line"></i>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(BlogCard);
