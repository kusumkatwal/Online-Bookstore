import {useState} from 'react';
import {Axios} from 'react';

export function AddProduct(){

    const[bookId, setBookId] = useState();
    const[title, setTitle] = useState('');
    const[author, setAuthor] = useState('');
    const[pages, setPages] = useState();
    const[price, setPrice] = useState();
    const[detail, setDetail] = useState("");

    const submitDetail = () => {
            // Axios.post("http://localhost:3001/api/insert", {
            //     id:bookId,
            //     title: title,
            //     author:author,
            //     price:price,
            //     details:detail,
            //     pages:pages
            // }).then(() => {
            //     alert("Sucessful Insert");
            // });

            alert("sucessful insert");
    };

    return(
        <>
        <h2>Enter book details:</h2>
        <div className="add-product-form">
            
            <form className="add-product-form">
                <div className="product-field">
                    <label >Book Id:</label>
                    <input type="number" 
                    name="id"
                    onChange={(e) =>{
                        setBookId(e.target.value)
                    }}/>
                </div>
                <div className="product-field">
                    <label >Book Title:</label>
                    <input type="text" 
                    name="title"
                    onChange={(e) =>{
                        setTitle(e.target.value)
                    }}/>
                </div>
                <div className="product-field">
                    <label>Author name:</label>
                    <input type="text" 
                    name="author"
                    onChange={(e) =>{
                        setAuthor(e.target.value)
                    }}/>
                </div>
                <div className="product-field">
                    <label>Number of pages:</label>
                    <input type="number" 
                    name="pages"
                    onChange={(e) =>{
                        setPages(e.target.value)
                    }}/>
                </div>
                <div className="product-field">
                    <label >Price:</label>
                    <input type="number" 
                    name="price"
                    onChange={(e) =>{
                        setPrice(e.target.value)
                    }}/>
                </div>
                <div className="product-field">
                    <label>Book Description:</label>
                    <input type="text-area" 
                    name="details"
                    onChange={(e) =>{
                        setDetail(e.target.value)
                    }}/>
                </div>
                <div className="product-field">
                    <button type="Submit" 
                   onClick={submitDetail}
                    >Add </button>
                </div>
            </form>
        </div>
        </>
    );
}