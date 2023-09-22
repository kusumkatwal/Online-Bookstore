import jk from "../assets/images/authors/jk.gif";
import p from "../assets/images/authors/paulo.jpg";
import s from "../assets/images/authors/sarah.gif";
import childrenbook from '../assets/images/book-card/childrenbook.png';
import fiction from '../assets/images/book-card/fiction.jpg';
import romance from '../assets/images/book-card/romance.jpg';
import {Link} from 'react-router-dom';
import './mid-section.css';
import {bestsellers} from '../components/book';
// import { useContext } from "react";

export function MidSection(props)
{
    // const{id,book_title,author_name,img,date} = props.data;
   

    return (
        <div className="content-holder">
            <div className="Author">
                <h2 className="title">Authors</h2>
                <div className="content-card">
                    <img src={jk} alt="jk" />
                    <div id="content">
                    <p className="name">JK Rowling</p>
                    <p className="desc">Joanne Rowling,best known for her pen name JK Rowling, is a British author and philanthropist. </p>
                    <Link to='./explore' >Books</Link>
                    </div>
                </div>
                <div className="content-card">
                    <img src={p} alt="portrait of Paulo Coelho" />
                    <div id="content">
                    <p className="name">Paulo Coelho</p>
                    <p className="desc">Paulo Coelho de Spuza is a Brazilian lyricist and novelisst an a member of the Brazilian Academy of Letters since 2002. </p>
                    <Link to='./explore' >Books</Link>
                    </div>
                </div>
                <div className="content-card">
                    <img src={s} alt="portrait of Sarah J Mass" />
                   <div id="content"> <p className="name">Sarah J. Maas</p>
                    <p className="desc">Sarah Janet Mass is an American fantasy author know for her fantasy series Throne of Glass and A court of Throns. </p>
                    <Link to='./explore' >Books</Link>
                    </div>               
                 </div>
            </div>

            <div className="Genre">
                <h2 className="title">Genre</h2>
                <div className="box">
                <div className="content">
                    <img src={childrenbook} alt="illustrations"/>
                    <p className="description">Children's Book</p>
                </div>
                <div className="content">
                    <img src={fiction} alt="illustrations"/>
                    <p className="description">Fiction</p>
                </div>
                <div className="content">
                    <img src={romance} alt="illustrations"/>
                    <p className="description">Romance</p>
                </div>
                <div className="content">
                    <img src={childrenbook} alt="illustrations"/>
                    <p className="description">Children's Book</p>
                </div>
                </div>
            </div>
             

            <div className="bestsellers">
                <div className="title-div">
                    <h2 className="title">Bestsellers</h2>
                    {/* <Link to='./explore' >see more</Link> */}
                </div>
                <div className="booklist">
                    {bestsellers.map((a) =>{
                       
                            return(<BookSec data={a} />);
                       
                        })}
                </div>
            </div>

            
        </div>
    );
}
export function BookSec(props)
{
      const{book_title,img,date}= props.data;
    return(
        <div className="book-sec">
                        <div className="image">
                            <img src={img} alt="bookcover"/>
                        </div>
                        <div className="info-sec">
                            <p className="book-title">{book_title}</p>
                            <p className="date">{date}</p>
                            <p className="rate">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            </p>
                        </div>
                    </div>

    );
}