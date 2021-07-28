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
    IonIcon,
    IonCol,
    IonRow,
    IonInput,
    IonText,
} from '@ionic/react';
import { playSkipForwardOutline } from 'ionicons/icons'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../components/Firebase/index';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import FirebaseImage from '../../assets/imgs/fire.png'
import './Signin.css';
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    showForgotPasswordAlert: false
};

class Signin extends Component {
    state: any = {};
    props: any = {};
    constructor(props: any) {
        super(props);
        this.props = props
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = (event: any) => {
        const { email, password } = this.state;
        const {
            firebase,
            history
        } = this.props;
        firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                history.push(ROUTES.HOME);
            })
            .catch((error: any) => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    onChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    toggleForgorPasswordModal = () => {
        const { showForgotPasswordAlert } = this.state;
        this.setState({
            showForgotPasswordAlert: !showForgotPasswordAlert
        })
    }
    forgotPassword = (event: any) => {
        const {
            firebase
        } = this.props;
        const { email } = this.state;

        firebase.doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch((error: any) => {
                this.setState({ error });
            });

        event.preventDefault();
    }
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <IonPage>
                <IonContent className='ion-padding'>
                    <IonRow className="ion-justify-content-center ion-margin-top">
                        <div className="fireLogoSignin ion-margin-top">
                            <img src={FirebaseImage} className="imglogoSignin" alt="" />
                            <IonText><h2 className="TextCanterSignin ion-no-margin ion-margin-vertical">Sign In</h2></IonText>
                        </div>
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
                    <NavLink to="forgot-password">
                        <IonRow>
                            <IonCol onClick={this.toggleForgorPasswordModal}>
                                <IonText className="ion-text-right" ><h6 className="smallSignin black ion-no-margin ion-text-end">Forgot Password?</h6></IonText>
                            </IonCol>
                        </IonRow>
                    </NavLink>
                    <IonRow>
                        <IonCol>
                            <IonButton disabled={isInvalid} onClick={this.onSubmit} type="submit" color="undefined" className="btnTransitionWidth"><strong className="white">Sign In</strong></IonButton>
                        </IonCol>
                    </IonRow>
                    {error && <p>{error.message}</p>}
                    <NavLink to="signup">
                        <IonRow>
                            <IonCol>
                                <IonButton fill="outline" color="undefined" className="btnColorSignup"><strong>New? Create an Account</strong></IonButton>
                            </IonCol>
                        </IonRow>
                    </NavLink>
                    <NavLink to='home'>
                        <IonRow>
                            <IonCol>
                                <IonButton fill="outline" color="undefined" className="btnColorSignup"><strong>Skip</strong><IonIcon icon={playSkipForwardOutline} ></IonIcon></IonButton>
                            </IonCol>
                        </IonRow>
                    </NavLink>
                </IonContent>
            </IonPage>
        );
    }
}





export default compose(
    withRouter,
    withFirebase,
)(Signin);