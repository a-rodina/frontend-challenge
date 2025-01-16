import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

    return ( <>
        <header className='header'>
            <div className='container'>
                <div className='header__wrap'>
                    <Link to={`/`}>
                        <div className='header__links'>
                            <span className='header__links-text'>Все котики</span>
                        </div>
                    </Link>
                    <Link to={`/favorite`}>
                        <div className='header__links'>
                            <span className='header__links-text'>Любимые котики</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    </> );
}

export default Header;