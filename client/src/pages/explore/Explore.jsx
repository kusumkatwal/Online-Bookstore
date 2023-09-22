import {product} from '../../components/product';
import { Product } from '../home/product';
import {Link} from 'react-router-dom';
import {bestsellers} from '../../components/book';
import {Footer} from '../../components/footer';
import {Bookcard} from '../home/Home'
import './explore.css';

export function Explore()
{
    return(
        <>
        <div className='new-arrivals'>
            <h2 className='new-title'>New Arrivals <i className='material-icons'>auto_awesome</i> <i className='material-icons'>auto_awesome</i></h2>
           

           <div className='section-cards'>
           {
                bestsellers.map((a) => {
                    return(<Bookcard data={a}/>);
                })
            }
           </div>

        </div>
        <div className='explore-banner'>
            <div className='button-pack'>
                <Link className='btn' to='/explore'>Fictions</Link>
                <span>|</span>
                <Link className='btn' to='/explore'>Non-Fictions</Link>
                <span>|</span>
                <Link className='btn' to='/explore'>Poems</Link>
                <span>|</span>
                <Link className='btn' to='/explore'>Teens and YA</Link>
                <span>|</span>
                <Link className='btn' to='/explore'>Biographies</Link>
                <span>|</span>
                <Link className='btn' to='/explore'>Child's classic</Link>
            </div>

        </div>
        <div className='book'>
        { product.map((a) => {
            return( <Product data ={a} />);
         })}
       </div>
       <Footer/></>
    );
}