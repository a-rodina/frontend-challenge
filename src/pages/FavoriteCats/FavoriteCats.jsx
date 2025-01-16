import './FavoriteCats.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats } from "../../slice/cats";
import CardList from "../../components/CardList/CardList";
import Spinner from "../../components/Spinner/Spinner"

function FavoriteCats() {

    const data = useSelector((state) => state.cat)
    const dispatch = useDispatch();
    console.log(data.cats)

    useEffect(() => {
        dispatch(getCats())
    }, [])

    return ( <>
        <section className='favorite-cats'>
            <div className='container'>
                {data.favorites.length === 0 ? <Spinner/> : <CardList cats={data.favorites}></CardList>}
            </div>
        </section>
    </> );
}

export default FavoriteCats;