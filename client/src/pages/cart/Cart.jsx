import { useContext } from "react";
import {Link} from "react-router-dom";
import {Footer} from '../../components/footer';
import {product} from "../../components/product";
import { ShopContext } from "../../context/shop_context";
import {CartItem} from './CartItems';
import './cartitems.css';
export const Cart = (props) =>
{
    const {cartItems} = useContext(ShopContext);
    
    // const {id} = props.data;
    
    return(
        <>
        <div className="cart-items">
            <h3 className="cart-heading"> Your items in cart</h3>
            { product.map((product) => {
                if(cartItems[product.id] !== 0){
                    return ( <CartItem data={product} />
                    );
                }
            })}

           <div className="cart-bottom">
                <div className='back'><Link to='/'><i className="material-icons">arrow_back</i>Continue Shopping</Link></div>
                <div className="check-out"><Link className="cart-button" to="/checkout">Proceed to checkout</Link></div>
           </div>
        </div>

        <Footer />
        </>
    );
}

