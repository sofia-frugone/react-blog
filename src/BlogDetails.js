import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
// allows us to wrap parameters from the route: still unsure on this
// useParams hook grabs the blog id
    const { id } = useParams();
// here we re-use the usefetch hook to grab the three properties
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();

    // this functions makes a fetch request to delete blogs
    const handleClick= () => {
      fetch('http://localhost:8000/blogs/' + blog.id, {
        // here we ask JSON server to delete the blog with that id
        method: 'DELETE'
        // redirecting the user to the home page using the useHistory hook
      }).then(() => {
        history.push('/')

      })
    }

    return (
        <div className="blog-details">
          { isPending && <div>Loading...</div> }

          { error && <div>{ error } </div> }

          { blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={handleClick}>Delete</button>
            </article>
          )}

        </div>
    );
}

export default BlogDetails;