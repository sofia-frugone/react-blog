import { useState, useEffect } from "react";
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


// Use effect hook: fetching the data
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      // First we get the response object and use the JSON method
      .then(res => {
        if(!res.ok) {
          // when we throw an error it is caught in the catch error block
          throw Error('could not fetch the data for that resource')
        }
        return res.json();
      })
      // Then we use another then method where we get the data
      .then(data => {
        // taking the array of objects and updating the blog state with that array
        setBlogs(data);
        // as soon as the data appears, we set isPending to false and remove the loading message
        setIsPending(false);
        setError(null);
      })
      // catch block catches any netwrok error and fires a function 
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
    // empty dependency array only fires the function once on the initial render "[]"
  }, [])

  // Note: to use javascript inside the template we have to use curly braces
  return (
    <div className="home">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}

export default Home;