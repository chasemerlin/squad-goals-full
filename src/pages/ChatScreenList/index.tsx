/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ChatList1 from './ChatList1';
import BlockChatList from './BlockChatList';

class ChatScreenListIndexView extends Component {
    // constructor(props: any) {
    //     super(props)
    // }
    render() {
        return (
            <Switch>
                <Route exact path='/chatScreenlist/chatlist1' component={ChatList1} />
                <Route exact path='/chatScreenlist/blockChatList' component={BlockChatList} />
            </Switch>
        )
    }
}

export default ChatScreenListIndexView;