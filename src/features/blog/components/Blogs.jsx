import React from "react";

import BlogCard from "../../../shared/components/molecules/BlogCard";
import Container from "../../../shared/components/atoms/Container";

import blogs from "../utils/Blogs";

import "./Blog.css";
import RecentPosts from "./RecentPosts";
import RecentComments from "./RecentComments";
import Categories from "./Categories";
import Tags from "./Tags";

const Blogs = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-lg-9 blog-wrapper">
          <div className="row">
            {blogs.map((blog) => (
              <div className="col-lg-6" key={blog.id}>
                <BlogCard blog={blog} category={true} />
              </div>
            ))}
          </div>
        </div>
        <aside className="col-lg-3 blog-sidbar">
          <RecentPosts />
          <RecentComments />
          <Categories />
          <Tags />
        </aside>
      </div>
    </Container>
  );
};

export default React.memo(Blogs);
