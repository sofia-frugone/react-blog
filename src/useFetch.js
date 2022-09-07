import { useState, useEffect } from 'react';

// custom hooks in react need to start with "use"
// we pass the "url" as a dependency 
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
// useEffect hook: fetching the data
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
      // here we get the response object and use the JSON method
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      //here we use a then method to get the data
      .then(data => {
        //taking the array of objects and updating the blog state with that array
        setData(data);
        // as soon as the data appears we set isPending to false and remove the loading message
        setIsPending(false);
        setError(null);
      })
      // catch block catches any network error and fires a function
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);

        }
        
      })
    }, 1000);
    return () => abortCont.abort();
  }, [url])


  return { data, isPending, error };
}
 
export default useFetch;