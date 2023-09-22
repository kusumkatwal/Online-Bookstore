// import {Cart} from "../cart/Cart";
import { ShopContext } from "../../context/shop_context";
import { useContext } from "react";


export function Product(props)
{
    const{addTocart } = useContext(ShopContext);
   
    const{id,book_title,author_name,img}= props.data;

    // const cartITemsAmount = cartItems[id];
    return (
        <div className="bookCard">
         <div className="img">
            <img src={img} alt="bookcover" />
         </div>
         <div className="descrip">
          <p className="book-title"> {book_title}</p>
          <p className="book-author"> by {author_name}</p> 
         </div>
         <div className="wish">
            <i className="material-icons">favorite_border</i>
            <button className="cart" onClick={() => 
                {
                    addTocart(id)
                }} >
            Add to cart</button>
            </div>
         
        </div>
    );

}
//  {cartITemsAmount>0 && <>|{cartITemsAmount}|</>}