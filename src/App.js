import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Checkout from './components/Checkout/Checkout';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Nav />
          <Route path='/' component={Home} exact/>
          <Route path='/checkout' component={Checkout} exact/>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
