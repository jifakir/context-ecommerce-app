import './App.scss';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Nav />
        <Home />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
