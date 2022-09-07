import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  // here we're invoking the react router dom 'use history' 
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    // POST request is made to the endpoint: localhost:8000 to add a new blog
    // method argument defines the type of request we are sending
    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        // we use the stringify method to turn the JSON object into a string
        body: JSON.stringify(blog)

    // since the post request is asynchronous and delivers a promise we can add a then method which fires a function when the request is complete
    }).then(() => {
        console.log('new blog added')
        setIsPending(false);
        // using the push method to redirect the user to the home page 
        history.push('/');

    })

    
  }

  return (


    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />


        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>



        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>



       { !isPending && <button>Add Blog</button> }
       { isPending && <button disabled>Adding blog...</button> }


      </form>
    </div>
  );
}
 
export default Create;