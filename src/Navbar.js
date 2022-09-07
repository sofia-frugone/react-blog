import { Link } from 'react-router-dom';

// If we use 'Link' React will handle the routing in the browser and intercept requests for new pages

const Navbar = () => {
    return (  
      <nav className="navbar">
         <h1>Fia's Blog</h1>
         <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
         </div>
      </nav>
    );
}
 
export default Navbar;