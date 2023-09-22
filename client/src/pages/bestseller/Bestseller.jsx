import {product} from '../../components/product';
import {BookSec} from '../../components/mid-section';
import {Footer} from '../../components/footer';
import './bestseller.css';
export function Bestseller (props)
{
    return(
        <>
        <h2>Our Bestselling Novels</h2>
       <div className='bestselling-list'>
       {product.map((product) => {
           return( <BookSec data={product} />);
        })}
       </div>
        <Footer/>
        </>
    );
}