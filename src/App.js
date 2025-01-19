import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AllCats from './pages/AllCats/AllCats';
import FavoriteCats from './pages/FavoriteCats/FavoriteCats';

function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <Header/>
          <Routes>
            <Route path='frontend-challenge/' element={<AllCats/>}/>
            <Route path='frontend-challenge/favorite' element={<FavoriteCats/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
