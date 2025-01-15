import './AllCats.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats } from "../../slice/cats";
import CardList from "../../components/CardList/CardList";
import Spinner from "../../components/Spinner/Spinner"

function AllCats() {

    const data = useSelector((state) => state.cat)
    const dispatch = useDispatch();
    console.log(data.cats)

    useEffect(() => {
        dispatch(getCats())
    }, [])

    return ( <>
        <section className='all-cats'>
            <div className='container'>
                {data.cats.length === 0 ? <Spinner/> : <CardList cats={data.cats}></CardList>}
            </div>
        </section>
    </> );
}

export default AllCats;