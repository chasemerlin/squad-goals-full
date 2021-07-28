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
import ContentLoaders from './ContentLoader/ContentLoader';
import PullToRefresh from './PullToRefresh/PullToRefresh';
import ContentLoaderSecond from './ContentLoaderSecond/ContentLoaderSecond';
class AddOnsIndex extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Switch>
                <Route exact path='/AddOn/ContentLoader' component={ContentLoaders}></Route>
                <Route exact path='/AddOn/pullToRefresh' component={PullToRefresh}></Route>
                <Route exact path='/AddOn/contentLoaderSecond' component={ContentLoaderSecond}></Route>
            </Switch>
        );
    }
}

export default AddOnsIndex;

