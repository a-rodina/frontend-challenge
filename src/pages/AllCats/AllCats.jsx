import './AllCats.css';
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats, incrementPage } from "../../slice/cats";
import CardList from "../../components/CardList/CardList";
import Spinner from "../../components/Spinner/Spinner"

function AllCats() {

    const data = useSelector((state) => state.cat)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCats(data.page));
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [data.page]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return;
        }
        dispatch(incrementPage())
        dispatch(getCats(data.page));
    };

    return ( <>
        <section className='all-cats'>
            <div className='container'>
                {data.cats.length === 0 ? <Spinner/> : <CardList cats={data.cats}></CardList>}
            </div>
        </section>
    </> );
}

export default AllCats;