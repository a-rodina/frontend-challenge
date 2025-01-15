import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

    // const data = useSelector((state) => state.book);

    return ( <>
        <header className={`header`}>
            <div className='container'>
                <div className='header__wrap'>
                    <Link to={`/all-cats`}>
                        <div className='header__links'>
                            <span className='header__links-text'>Все котики</span>
                        </div>
                    </Link>
                    <Link to={`/favorites`}>
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