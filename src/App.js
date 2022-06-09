
// PAGE COMPONENTS
import Main from './pages/Main';
import Currencies from './pages/Currencies'
import Price from './pages/Price'

// UI COMPONENTS
import Nav from './components/Nav';

// Component Libraries
import { Route } from 'react-router-dom';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">

      <Nav />

      <Route exact path='/'>
        <Main />
      </Route>

      <Route exact path='/currencies'>
        <Currencies />
      </Route>

      <Route exact path='/price/:symbol'>
        <Price />
      </Route>
      
    </div>
  );
}

export default App;
