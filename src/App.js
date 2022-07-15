import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer/HeaderContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './containers/CartContainer/CartContainer.jsx';
import CartProvider from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <CartProvider defaultValue={[]}>
          <HeaderContainer />
          <Routes>
            <Route exact path='/' /> {/* here will go a Home component */}
            <Route exact path='category/:categoryName' element={<ItemListContainer />} />
            <Route exact path='item/:itemId' element={<ItemDetailContainer />} />
            <Route exact path='cart' element={<CartContainer />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404 Esta pagina no existe!</p>
                </main>
              }
              />
          </Routes>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
