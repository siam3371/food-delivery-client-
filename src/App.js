 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './component/Context/AuthProvider';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import ServiceDetail from './component/Home/ServiceDetail/ServiceDetail';
 import HomePage from './component/HomePage/HomePage';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
              </Route>
            <Route path="/home">
              <HomePage></HomePage>
              </Route>
              <PrivateRoute  path="/services/:detail">
                <ServiceDetail></ServiceDetail>
               </PrivateRoute>
               <Route path="/login">
                   <Login></Login>
                 </Route>
              <Route exact path="*">
                 <NotFound></NotFound>
              </Route> 
          </Switch>
          <Footer></Footer>

        </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
