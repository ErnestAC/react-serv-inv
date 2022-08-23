import './styles/main.css';

const NavBar = () => {
    return (
        <nav>
        <div className='flex-container-articles'>
                <div className='flex-button'>
                    <a href="http://google.com">models</a>
                </div>
                <div className='flex-button'>
                    <a href="http://google.com">manuals</a>
                </div>
                <div className='flex-button'>
                    <a href="http://google.com">about</a>
                </div>
                <div className='flex-button'>
                    <a href="http://google.com">cart</a>
                </div>
        </div>
    </nav>
    );
};

export default NavBar;