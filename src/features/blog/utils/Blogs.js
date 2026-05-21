import blogsData from "./Blogs.json";
import blog1 from "../../../assets/blog-1.jpeg";
import blog2 from "../../../assets/blog-2.jpeg";
import blog3 from "../../../assets/blog-3.jpeg";
import blog4 from "../../../assets/blog-4.jpeg";
import blog5 from "../../../assets/blog-5.jpeg";
import blog6 from "../../../assets/blog-6.jpeg";
import blog7 from "../../../assets/blog-7.jpeg";
import blog8 from "../../../assets/blog-8.jpeg";
import blog9 from "../../../assets/blog-9.jpeg";
import blog10 from "../../../assets/blog-10.jpeg";

const blogImages = [
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  blog9,
  blog10,
];

export default blogsData.map((blog, index) => ({
  ...blog,
  image: blogImages[index],
}));
