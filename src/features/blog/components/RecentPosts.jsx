import React, { useMemo } from "react";

import blog1 from "../../../../public/assets/Blog1.jpg";
import blog2 from "../../../../public/assets/Blog2.jpg";
import blog3 from "../../../../public/assets/Blog3.jpg";
import blog4 from "../../../../public/assets/Blog4.jpg";
import blog5 from "../../../../public/assets/Blog5.jpg";

const RecentPosts = () => {
  const asideBlogs = useMemo(
    () => [
      {
        id: 1,
        image: blog1,
        title: "The Future of Digital Creativity: Trends to Watch in 2025",
      },
      {
        id: 2,
        image: blog2,
        title: "How to Stay Productive Without Burning Out",
      },
      {
        id: 3,
        image: blog3,
        title: "From Ideas to Impact: Turning Passion Projects into Reality",
      },
      {
        id: 4,
        image: blog4,
        title: "Why Simplicity Wins: The Power of Minimal Design",
      },
      {
        id: 5,
        image: blog5,
        title: "Mastering the Art of Focus in a Distracted World",
      },
    ],
    []
  );
  return (
    <div className="blog-aside-box border rounded p-2 post-hide">
      <h2 className="border-bottom pb-2 text-center">Recent Posts</h2>
      {asideBlogs.map((blog) => (
        <div
          className={`blog-post-box d-flex gap-2 ${
            blog.id === 5 ? "mb-3" : "mb-2"
          }`}
          key={blog.id}
        >
          <div className="blog-post-img">
            <img src={blog.image} alt={blog.title} className="img-fluid" />
          </div>
          <div className="blog-post-text">
            <p>{blog.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(RecentPosts);
