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
import Instagram from './insta/instagram';
import Netflix from './netflix/netflix';
import Whatsapp from './Whatsapp/Whatsapp';
class LayoutIndex extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Switch>
                <Route exact path='/Layouts/instagram' component={Instagram}></Route>
                <Route exact path='/Layouts/Netflix' component={Netflix}></Route>
                <Route exact path='/Layouts/Whatsapp' component={Whatsapp}></Route>
            </Switch>
        );
    }
}

export default LayoutIndex;