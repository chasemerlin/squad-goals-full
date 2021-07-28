/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import LoginFristView from './Login';
import LoginViewSecond from '../Login2/LoginViewSecond';
import LoginThird from '../Login3/LoginThird';
import LoginFour from '../Login4/LoginFour';
class LoginSignUpindexView extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Switch>
                <Route exact path='/LoginSignUp/loginFirst' component={LoginFristView}></Route>
                <Route exact path='/LoginSignUp/loginSecond' component={LoginViewSecond}></Route>
                <Route exact path='/LoginSignUp/loginThird' component={LoginThird}></Route>
                <Route exact path='/LoginSignUp/loginFourth' component={LoginFour}></Route>
            </Switch>
        );
    }
}

export default LoginSignUpindexView;