/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import React from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from './components/Firebase/index';

const IndexView = (props: any) => {
    let redirectUrl = ''
    const { firebase } = props;
    if (firebase.authUser) {
        redirectUrl = '/home'
    } else {
        redirectUrl = '/signin'
    }
    return (
        <Redirect to={redirectUrl} />
    );
};

export default compose(
    withRouter,
    withFirebase,
)(IndexView);