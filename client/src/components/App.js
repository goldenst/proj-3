import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import React from 'react';
import React, { useEffect } from 'react';
import VideoPage from '../components/pages/VideoPage';
import Navbar from '../components/layout/Navbar';
import Landing from '../components/layout/Landing';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Alert from '../components/layout/Alert';
import Profile from "./pages/Profile";
import CreateProfile from '../components/profile-forms/CreateProfile';
//import SignUpForm from '../components/profile-forms/SignUpForm';
import MyArt from "../components/pages/MyArt";
import ArtTips from "../components/pages/ArtTips";
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import Profiles from '../components/Profiles';
import PrivateRoute from '../components/Routing/PrivateRoutes';

//import Wrapper from "./components/Wrapper";
// redux 
import { Provider } from 'react-redux';
import store from '../store';
import setAuthToken from '../utils/setAuthToken';
import { loadUser } from '../actions/auth';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>


      <Router>
        <div className="container">
          <Navbar />
        </div>
        <section className='container'>

          <Alert />
          <Switch>
            {/* pages go here */}
            <Route exact path="/landing" component={Landing} />
            <Route exact path="create-profile" component={CreateProfile} />
            <Route exact path='/' component={Slideshow} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/myart" component={MyArt} />
            <PrivateRoute exact path="/arttips" component={ArtTips} />
            <PrivateRoute exact path='/Video' component={VideoPage} />
            

          </Switch>
        </section>
        <Footer />
      </Router>
      
    </Provider>
  )
}

export default App;