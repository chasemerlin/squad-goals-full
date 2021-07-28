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
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCol,
    IonRow,
    IonInput,
    IonText,
} from '@ionic/react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../components/Firebase/index';
import { NavLink } from 'react-router-dom';
import FirebaseImage from '../../assets/imgs/fire.png';
import './ForgotPasswordStyles.css';
const INITIAL_STATE = {
    email: '',
};

class ForgotPassword extends Component {
    state: any = {};
    props: any = {};
    constructor(props: any) {
        super(props);
        this.props = props
        this.state = { ...INITIAL_STATE };
    }
    onChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    onSubmit = (event: any) => {
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
        const { email, error } = this.state;
        const isInvalid = email === '';
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle slot="start">Forgot Password</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent className='ion-padding'>
                    <IonRow className="row">
                        <div className="FireLogoPAssword">
                            <img src={FirebaseImage} className="img-logo" alt="" />
                            <IonText><p className="TextPassDesc ion-no-margin ion-margin-vertical">Enter Your mail here and we will send you a email with password reset link</p></IonText>
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
                            <IonButton disabled={isInvalid} onClick={this.onSubmit} type="submit" expand="block" color="undefined" className="btn-transition"><strong className="white">Submit</strong></IonButton>
                        </IonCol>
                    </IonRow>
                    {error && <p>{error.message}</p>}
                    <NavLink to="signin">
                        <IonRow>
                            <IonCol>
                                <IonButton fill="outline" color="undefined" className="ButtonColorForgot"><strong><strong>HAVE AN ACCOUNT ? SIGN IN</strong></strong></IonButton>
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
)(ForgotPassword);