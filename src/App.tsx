
/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup'
import Signin from './pages/SignIn/Signin'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import IndexView from './indexView'
import GridIndexView from './pages/Grids';
import ListSliderIndexView from './pages/ListAndSlider';
import * as ROUTES from './constants/routes';
import { compose } from 'recompose';
import { withFirebase } from './components/Firebase/index';
import LoginSignUpindexView from './pages/Loginsignup/Login1';
import LayoutIndex from './pages/Layouts/LayoutIndex';
import ChatListIndex from './pages/ChatList/ChatlistIndex';
import AddOnsIndex from './pages/AddOns/AddOnsIndex';
import ChatScreenListIndexView from './pages/ChatScreenList';
import ProFeaturesIndex from './pages/ProFeatures/ProFeaturesIndex';
import Menu from './components/Menu/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';

class App extends Component {
  props: any = {}
  state: any = {};
  constructor(props: any) {
    super(props);
    this.props = props
  }
  async componentDidMount() {
    const { firebase } = this.props;
    try {
      firebase.onAuthUserListener(
        (authUser: any) => {
          this.setState({
            logIn: true
          })
        },
        () => {
          this.setState({
            logIn: false
          })
        },
      );
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    const { logIn } = this.state;
    if (logIn === undefined) {
      return (
        <></>
      );
    }
    return (
      <IonApp>

        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route exact path={ROUTES.SIGN_UP} component={Signup} />
              <Route exact path={ROUTES.SIGN_IN} component={Signin} />
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route exact path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
              <Route path={ROUTES.GRIDS} component={GridIndexView} />
              <Route path={ROUTES.LISTANDSLIDER} component={ListSliderIndexView} />
              <Route path={ROUTES.LoginIndexView} component={LoginSignUpindexView} />
              <Route path={ROUTES.Layouts} component={LayoutIndex} />
              <Route path={ROUTES.ChatLists} component={ChatListIndex} />
              <Route path={ROUTES.AddOn} component={AddOnsIndex} />
              <Route path={ROUTES.CHATSCREENLIST} component={ChatScreenListIndexView} />
              <Route path={ROUTES.Pro} component={ProFeaturesIndex} />
              <Route exact path="/" component={IndexView} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    );
  }
}

export default compose(
  withFirebase,
)(App);