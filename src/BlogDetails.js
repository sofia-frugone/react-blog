import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
// allows us to wrap parameters from the route: still unsure on this
// useParams hook grabs the blog id
    const { id } = useParams();
// here we re-use the usefetch hook to grab the three properties
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)

    return (
        <div className="blog-details">
          { isPending && <div>Loading...</div> }

          { error && <div>{ error } </div> }

          { blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
            </article>
          )}

        </div>
    );
}

export default BlogDetails;