import './Nav.css';
import logo from "./logo.png"

function Nav (props) {
    return (
        <div className="nav-bar">
            <div className="wayoflife">
                <img src={logo}/>
                <a className="wayoflife-text">Way of Life</a>
            </div>
            <div className="right-nav-bar">
                <a>About</a>
                <a>Contact</a>
                <a>Services</a>
                <a id="book-now">Book Now</a>
            </div>
        </div>

    );
}
export default Nav;