import './banner.css';
// import hp from '../assets/images/ksjdfh.jpg';

export function Banner()
{
 return (
 <div className="container">
    <div className="text">
        <h1>Build Your</h1>
        <h2>Own Library</h2>
        <p>Buy two selected books and get one for free</p>
        <button className='view'>View all</button>
    </div>
    <div className="image">
    {/* <img src={hp} alt='harry potter' /> */}

    </div>
 </div>
 );
}