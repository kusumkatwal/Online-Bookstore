import './Navbar.css' ;
import {NavLink,Link} from 'react-router-dom';



export function Navbar()
{
    return(
        <div className='Navbar'>
            <div className='search'>
                <h1>Booksy</h1>
                <div className='wrapper'>
                <form className='form'>
                    <i className="material-icons">search</i>
                     <input
                        className='input'
                        type="text"
                        placeholder="Search by Author or Title"
                        /* value={searchQuery}
                         onChange={handleInputChange}*/
                    /> 
                  
                </form>
                </div>
                    
               <div> <Link to='/cart'><i className="material-icons">shopping_cart</i> </Link>
                <Link to = '/account'><i className="material-icons">account_circle</i></Link></div>
            </div>
            <div className='links'>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/bestseller">Bestseller</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/about">About</NavLink>
            </div>
        </div>
    );
}

