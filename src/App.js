import './App.scss';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
