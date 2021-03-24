import './App.css';
import Home from './pages/Home';
import User from './pages/User';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
         {/* <Home/> */}
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/view-profile" component={User} />
       </Switch>   
         
       </div>
    </Router>
   
  );
}

export default App;
