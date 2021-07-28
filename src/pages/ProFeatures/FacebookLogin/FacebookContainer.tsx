/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { Plugins } from '@capacitor/core';
import FaceView from './FaceView';
const INITIAL_STATE = {
    loggedIn: false,
};
interface props {
    history: any
}
class FacebookContainer extends Component<props> {
    state: any = {};
    constructor(props: any) {
        super(props);
        this.state = {
            ...INITIAL_STATE,
            login: false,
            token: null,
            userId: null,
            user: null
        };
    }
    async getCurrentState(): Promise<boolean> {
        const result = await Plugins.FacebookLogin.getCurrentAccessToken();

        try {
            console.log(result);
            return result && result.accessToken;
        } catch (e) {
            return false;
        }
    }

    signIn = async () => {
        // const { history } = this.props;
        const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];

        const result = await Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
        console.info('result', result);
        if (result && result.accessToken) {
            this.setState({
                token: result.accessToken.token,
                userId: result.accessToken.userId
            });
            console.info('token', result.accessToken);
            this.getUserInfo();
        }

    }
    getUserInfo = async () => {
        const { userId, token } = this.state
        const response = await fetch(`https://graph.facebook.com/${userId}?fields=id,name,gender,link,picture&type=large&access_token=${token}`);
        const myJson = await response.json();
        console.log(myJson);
        this.setState({
            user: myJson,
            loggedIn: true
        })
    }
    signOut = async () => {
        // const { history } = this.props;
        await Plugins.FacebookLogin.logout();
        this.setState({
            token: null,
            userId: null,
            user: null,
            loggedIn: false
        })
    }
    render() {
        const { loggedIn, user } = this.state
        return (
            <FaceView
                signIn={this.signIn}
                loggedIn={loggedIn}
                signOut={this.signOut}
                user={user}
            />
        );
    }
}

export default FacebookContainer;