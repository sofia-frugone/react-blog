import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // here we destructure the three properties we get back (data, isPending, error)- i am confused on destructuring 
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs') // we need to pass through the endpoint because of the URL property
  

  // Note: to use javascript inside the template we have to use curly braces
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}

export default Home;

// npx json-server --watch data/db.json --port 8000 command explanation 
// json-server: runs the json server
// --watch : flag to watch the file 
// data/db.json : path 
// --port 8000 : another flag for speciying the port number, it will automatically go to port 3000 if it's not specififed 