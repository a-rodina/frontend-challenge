import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AllCats from './pages/AllCats/AllCats';
import FavoriteCats from './pages/FavoriteCats/FavoriteCats';

function App() {
  return (
      <BrowserRouter basename='/frontend-challenge'>
        <Provider store={store}>
          <Header/>
          <Routes>
            <Route path='/' element={<AllCats/>}/>
            <Route path='/favorite' element={<FavoriteCats/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
