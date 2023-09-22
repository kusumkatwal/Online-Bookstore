import './cartitems.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../context/shop_context';
// import {product} from '../../components/product';
export function CartItem(props)
 {

    const{id,img,book_title,author_name,price}= props.data;
    const {removeFromcart} = useContext(ShopContext);

    return(
        <div className="cart-card">
            <div className="cart-image">
                <img src={img} alt="bookcover" />
            </div>
            <div className='row'>
                <div className="cart-data">
                    <div className='cart-detail'>
                        <p className='cart-title'>{book_title}</p>
                        <p className='cart-author'>by {author_name}</p>
                    </div>    
                    <div className='cart-detail-price'><p className='cart-price'>Rs{price}</p>
                    </div>
                </div>
           
                <div className='cart-remove'>
                <div className='wishlist'>
        
                <Link to=''><i className='material-icons'>favorite_outlined</i></Link>
                 <p className='cart-text'>add to wishlist</p>
                 </div>
                 <div className='remove'>
                
                 <button className='remove-cart' onClick={() =>
                    removeFromcart(id)}><i className='material-icons'>delete_outlined</i></button>
                 <p className='cart-text'>Remove</p>
                 
                 </div>
                 
            </div>
            </div>
    
         </div>
        
    );
}