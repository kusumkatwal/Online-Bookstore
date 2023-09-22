import {React, Link} from 'react-router-dom';
import './admin.css';
export function Admin()
{
    return(
       
            <div className="admin">
                <div className='admin-header'>
                    <i className='material-icons'>account_cirlce</i>
                    <h2>Admin Dashboard</h2>
                </div>
                <div className='admin-section'>
                    <Link to='/' className='orange'>View Product Details</Link>
                    <Link to='/add_product' className='blue'>Add Product</Link>
                    <Link to='/' className='green'>Update Product</Link>
                    <Link to='/' className='yellow'>View Order Details</Link>
                </div>
            </div>
    
    );
}