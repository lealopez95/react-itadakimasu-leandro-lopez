import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting={'ItemListContainer example'} />
    </div>
  );
}

export default App;
