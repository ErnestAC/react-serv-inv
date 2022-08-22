import './styles/main.css';

const NavBar = () => {
    return (
        <nav>
        <p className="special-text">l.gauge</p>
        <ul className='reg-text'>
                <li><a href="http://google.com">Models</a></li>
                <li><a href="http://google.com">Manuals</a></li>
                <li><a href="http://google.com">Cart</a></li>
                <li><a href="http://bing.com">About</a></li>
        </ul>
    </nav>
    );
};

export default NavBar;