import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <Header/>
          <Routes>
              {/* <Route path='/' element={<AllBooks/>}/>
              <Route path='/:isbn13' element={<SelectedPage/>}/>
              <Route path='/search' element={<SearchPage/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/favorite' element={<FavoritePage/>}/> */}
          </Routes>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
