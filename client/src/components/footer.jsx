import '../components/footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export function Footer()
{
    return(<>
        <div className="footer">
            <div className="footertop">
                <h2>Stay Updated</h2>
                <ul>
                <li><input type="email" placeholder="Enter your email"/><button className="subscribe">Subscribe</button></li>
                </ul>
            </div>
            <div className="footer-mid">
                <div className="quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <li>Book request</li>
                    <li>Bestsellers</li>
                    <li>Used books</li>
                    <li>New arrivals</li>
                </ul>
            </div>
            <div className="about">
                <h3>About</h3>
                <ul>
                    <li>FAQs</li>
                    <li>Careers</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="popular-genres">
                <h3>Popular Genres</h3>
                <ul>
                    <li>Fiction</li>
                    <li>Self-help</li>
                    <li>Business</li>
                    <li>Literature</li>
                </ul>
            </div>
            </div>
            <div className="socials">
                <i className="fa fa-instagram"></i>
                <i className="material-icons">facebook</i>
                <i className="material-icons">instagram</i>
                <i className="material-icons">pinterest</i>

            </div>
            <div className="pay">

            </div>
            <p className="copyright">copyright 2023, protected by Booksy</p>
        </div>
        </>
    );
}