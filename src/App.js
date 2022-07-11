import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' /> {/* here will go a Home component */}
          {/* <Route exact path='/contact' component={<ContactContainer />} />
          <Route exact path='/cart' component={<CartContainer />} /> */}
          <Route path='category' element={<ItemListContainer />} >
            <Route path=':categoryName' element={<ItemListContainer />} />
          </Route>
          <Route path='item/:itemId' element={<ItemDetailContainer />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Esta pagina no existe!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
