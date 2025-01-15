import { useSelector } from 'react-redux';
import './Card.css';

function Card({cat, addToFavorites}) {

    const data = useSelector((state) => state.cat);
    console.log(data.cats)

    function getFavoriteIcon() {
        let index = -1;
        for (let i = 0; i < data.favorites.length; i++ ) {
            if (data.favorites[i].id === cat.id) {
                index = i;
            }
        }
        if (index > -1) {
            return <i className={`fa-solid fa-heart my-icon`}></i>
        } else {
            return <i className={`fa-regular fa-heart my-icon`}></i>
        }
    }

    return ( <>
        <div className='card__wrap'>
            <img className='card__image' alt='image' src={cat.url}/>
            <div className='card__about-block-icon' onClick={() => {addToFavorites(cat)}}>
                {getFavoriteIcon()}
            </div>
        </div>
    </> );
}

export default Card;