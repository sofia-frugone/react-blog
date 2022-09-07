React Notes 

How does the React router work for multi-page websites?

React applications delegate all the rotuing and changing of page content to the browser only. We make an initial request in the browser, the server responds by sending back the html page and the compiled js files.

If the user visits another page, react intercepts this request to stop it from going to the server. React will look at the new page request and injects this content on the screen. This whole process means we make less requests to the server and the whole process feels faster and smoother. 

// npx json-server --watch data/db.json --port 8000 command explanation 
// json-server: runs the json server
// --watch : flag to watch the file 
// data/db.json : path 
// --port 8000 : another flag for speciying the port number, it will automatically go to port 3000 if it's not specififed 