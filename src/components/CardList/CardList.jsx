import Card from '../Card/Card';
import './CardList.css';
import { useDispatch } from 'react-redux';
import { addToFavoriteRedux } from '../../slice/cats';

function CardList({cats}) {

    const dispatch = useDispatch();

    function addToFavorites(cat) {
        dispatch(addToFavoriteRedux(cat))
    }

    return ( <>
        <ul className='card-list'>
            {cats.map((item) => <li key={item.id} className='card-list__item'><Card cat={item} addToFavorites={addToFavorites}/></li>)}
        </ul>
    </> );
}

export default CardList;