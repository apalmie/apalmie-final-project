import '../css/App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Homepage from './Homepage';
import Berries from './Berries/Berries';
import BerryDetails from './Berries/BerryDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/berries' component={Berries} />
          <Route path='/berry/:id' component={BerryDetails}/>
          <Route path='/creatures' />
          <Route path='/creature/:id' />
          <Route path='/items' />
          <Route path='/item/:id' />
          <Route path='/evolutions' />
          <Route path='/evolution/:id' />
          <Route path='/moves' />
          <Route path='/move/:id' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
