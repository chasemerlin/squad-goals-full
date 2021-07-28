/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/



import React, { Component } from 'react';
import {
    IonPage,
    IonContent,
    IonButton,
    IonCol,
    IonRow,
    IonInput,
    IonText,
    IonCheckbox,

} from '@ionic/react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../components/Firebase/index';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import { Roles } from '../../types/index'
import { NavLink } from 'react-router-dom';
import './Signup.css';
import FirebaseImage from '../../assets/imgs/fire.png'


const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    passwordTwo: '',
    isAdmin: false,
    error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
    An account with this E-Mail address already exists.
    Try to login with this account instead. If you think the
    account is already used from one of the social logins, try
    to sign in with one of them. Afterward, associate your accounts
    on your personal account page.
  `;


class Signup extends Component {
    state: any = {};
    props: any = {};
    constructor(props: any) {
        super(props);
        this.props = props
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = (event: any) => {
        const { username, email, password, isAdmin } = this.state;
        const { firebase, history } = this.props;
        const roles: Roles = {
            ADMIN: ''
        };

        if (isAdmin) {
            roles[ROLES.ADMIN] = ROLES.ADMIN;
        }

        firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then((authUser: any) => {
                // Create a user in your Firebase realtime database
                return firebase.user(authUser.user.uid).set({
                    username,
                    email,
                    roles,
                });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                history.push(ROUTES.HOME);
            })
            .catch((error: any) => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }
                this.setState({ error });
            });

        event.preventDefault();
    };
    onChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    onChangeCheckbox = (event: any) => {
        this.setState({ [event.target.name]: event.target.checked });
    };
    render() {
        const { email, password, error, passwordTwo, isAdmin, username } = this.state;
        const isInvalid =
            password !== passwordTwo ||
            password === '' ||
            email === '' ||
            username === '';
        return (
            <IonPage>
                <IonContent className='ion-padding'>

                    <IonRow className="ion-justify-content-center ion-margin-top">
                        <div className="FireLogoSignup ion-margin-top">
                            <img src={FirebaseImage} className="img-logo" alt="" />
                            <IonText><h2 className="TextCenterSignup ion-no-margin ion-margin-vertical">Sign Up</h2></IonText>
                        </div>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                name="username"
                                value={username}
                                onIonChange={this.onChange}
                                clearInput
                                type="text"
                                placeholder="Username"
                                className="input ion-padding-horizontal"
                                clear-input="true"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                name="email"
                                value={email}
                                onIonChange={this.onChange}
                                clearInput
                                type="email"
                                placeholder="Email"
                                className="input ion-padding-horizontal"
                                clear-input="true"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                clearInput
                                name="password"
                                value={password}
                                onIonChange={this.onChange}
                                type="password"
                                placeholder="Password"
                                className="input ion-padding-horizontal"
                                clear-input="true"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                clearInput
                                name="passwordTwo"
                                value={passwordTwo}
                                onIonChange={this.onChange}
                                type="password"
                                placeholder="Password"
                                className="input ion-padding-horizontal"
                                clear-input="true"></IonInput>
                        </IonCol>
                    </IonRow>
                    <div className="check-box-container">
                        <IonCheckbox
                            name="isAdmin"
                            checked={isAdmin}
                            onIonChange={this.onChangeCheckbox}
                        /><strong>Check for admin user</strong>
                    </div>
                    <IonRow>
                        <IonCol>
                            <IonButton disabled={isInvalid} onClick={this.onSubmit} type="submit" expand="block" color="undefined" className="btn-transition"><strong className="white">CREATE AN ACCOUNT</strong></IonButton>
                        </IonCol>
                    </IonRow>
                    {error && <p>{error.message}</p>}
                    <NavLink to="signin">
                        <IonRow>
                            <IonCol>
                                <IonButton fill="outline" color="undefined" className="btnColoeSign"><strong>HAVE AN ACCOUNT ? SIGN IN</strong></IonButton>
                            </IonCol>
                        </IonRow>
                    </NavLink>
                </IonContent >
            </IonPage >
        );
    }
}





export default compose(
    withRouter,
    withFirebase,
)(Signup);;