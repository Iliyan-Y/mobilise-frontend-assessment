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

function App() {
  let [user, setUser] = useState();

  function renderShop() {
    if (user === 'test') {
      return <Shop />;
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
          <Route exact path="/shop">
            {renderShop()}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
