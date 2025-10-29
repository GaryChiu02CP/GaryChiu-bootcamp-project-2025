import { Blog } from "@/app/blogData";
import blogs from "@/app/blogData";
import BlogPreview from "@/components/blogPreview";

export default function blogpage() {
  return (
    <div>
        <h1 className="page-title">Blog</h1>
        <div className="blog" id="blog-container">
          {blogs.map((blog) => 
          <BlogPreview // This is how we call the component  // These are the props we are passing in
          key={blog.key}
          title={blog.title}
          date={blog.date}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.imageAlt}/>)}
        </div>
    </div>
  )
}