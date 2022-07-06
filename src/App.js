import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


//just for now, declared here
const products = [
  {
    id: 1,
    name: 'product 1',
    price: 10,
    stock: 10, 
  },
  {
    id: 2,
    name: 'product 2',
    price: 20,
    stock: 5, 
  },
  {
    id: 3,
    name: 'product 3',
    price: 30,
    stock: 2, 
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer items={products} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
