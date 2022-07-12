import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer/HeaderContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <HeaderContainer />
        <Routes>
          <Route exact path='/' /> {/* here will go a Home component */}
          <Route path='category/:categoryName' element={<ItemListContainer />} />
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
