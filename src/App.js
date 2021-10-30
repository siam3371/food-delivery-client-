 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import ServiceDetail from './component/Home/ServiceDetail/ServiceDetail';
 import HomePage from './component/HomePage/HomePage';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
              </Route>
            <Route path="/home">
              <HomePage></HomePage>
              </Route>
              <Route path="/services/:detail">
                <ServiceDetail></ServiceDetail>
               </Route>
              <Route exact path="*">
                 <NotFound></NotFound>
              </Route>

          </Switch>
          <Footer></Footer>

        </Router>
    </div>
  );
}

export default App;
