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
import Elegance from './Elegance/Elegance';
import RoseList from './Rose/Rose';
import Pastry from './Pastry/Pastry';
import Artboard from './Artboard/Artboard';

class ChatListIndex extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Switch>
                <Route exact path='/ChatLists/Elegent' component={Elegance}></Route>
                <Route exact path='/ChatLists/Rose' component={RoseList}></Route>
                <Route exact path='/ChatLists/Pastry' component={Pastry}></Route>
                <Route exact path='/ChatLists/Artboard' component={Artboard}></Route>
            </Switch>
        );
    }
}

export default ChatListIndex;