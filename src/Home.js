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

