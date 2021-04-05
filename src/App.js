import './App.css';
import LogIn from './components/auth/LogIn';
import Shop from './components/shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useState } from 'react';
import Basket from './components/shop/Basket';
import SignIn from './components/auth/SignIn';

function App() {
  let [user, setUser] = useState(window.sessionStorage.getItem('user'));
  let [basketState, setBasketState] = useState([]);

  function renderShop() {
    if (user) {
      return <Shop basketState={basketState} setBasketState={setBasketState} />;
    }
    return <Redirect to="/" />;
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LogIn setUser={setUser} />
          </Route>
          <Route exact path="/signup">
            <SignIn setUser={setUser} />
          </Route>
          <Route exact path="/shop">
            {renderShop()}
          </Route>
          <Route exact path="/basket">
            <Basket
              user={user}
              basketState={basketState}
              setBasketState={setBasketState}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
