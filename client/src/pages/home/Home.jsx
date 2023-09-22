import {Footer} from '../../components/footer';
import {Banner} from '../../components/banner';
import { MidSection } from '../../components/mid-section';
import {bestsellers} from '../../components/book'; 
import about from '../../assets/images/about.jpg';
import "./home.css";

export function Home(){
    return (
       <>
        <Banner />
        <h2>Popular Sections</h2>
        <div className='section-cards'>
            {
                bestsellers.map((a) => {
                    return(<Bookcard data={a}/>);
                })
            }
        </div>
        <MidSection/>

        <div className='about-section'>
            <div className='heading-section'>
                <h2>About Us</h2>
            </div>
            <div className='about-detail-section'>
            <div className='about-image'>
                <img src={about} alt='boks'></img>
            </div>
            <div className='about-text'>
                    <p className='about-para-text'>
                    Book House is a bookstore, physically based in Nepal, serving readers since 1984, 
                    providing books on various subjects. We specialize in books on everest, mountaineering and trekking,
                     himalayas, religion, buddhism, hinduism, philosophy, yoga,nepal, tibet, china, central asia, erotica,Fiction &
                      Non-fiction, Children books, health, cookery, flora and fauna,rare and out of print books.
                    </p>
            </div>
            </div>
        </div>
        <Footer />
        
       </>
    );
}

export function Bookcard(props)
{
    const{img,book_title,author_name,desc} = props.data;
    return(
        <div className='section'>
                <img src={img} alt='book cover'/>
                <div className='section-text'>
                    <p className='section-title'>{book_title}</p>
                    <p className='section-author'>{author_name}</p>
                    <p className='section-desc'>{desc}</p>
                    <p className='section-rate'>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            
                    </p>
                </div>
            </div>
    );
}


