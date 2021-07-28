/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonContent, IonCard, IonCardContent, IonRow, IonImg, IonText, IonCol, IonButton, IonInput, IonPage } from '@ionic/react';
import './LoginStyles.css';
import fire from '../../../assets/imgs/fire.png';
class LoginFristView extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                {/* <Menu /> */}
                <IonPage id="main">

                    <IonContent className="ion-no-padding">

                        <div className="mainFirebase">
                            <IonCard className="card ion-no-margin">
                                <IonCardContent>
                                    <IonRow className="row">
                                        <div className="fireLogoLogin">
                                            <IonImg src={fire} className="img-logo" />
                                            <IonText className='sigInText ion-text-center' color='dark'> Sign In </IonText>
                                        </div>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonInput clearInput type="email" placeholder="Email" className="input ion-padding-horizontal" clear-input="true" />
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonInput clearInput type="password" placeholder="Password" className="input ion-padding-horizontal" clear-input="true" />
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonText float-end color="medium" ><h6 className="small ion-no-margin ion-text-end">Forgot Password?</h6></IonText>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonButton expand="block" color="undefined" className="btn-transition"><strong className="white">Sign In</strong></IonButton>
                                        </IonCol>
                                    </IonRow>
                                    <div className="line"></div>
                                    <IonRow>
                                        <IonCol>
                                            <IonButton expand="block" fill="outline" color="undefined" className="btn-color"><strong>New? Create an Account</strong></IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </div>
                    </IonContent>
                </IonPage>
            </>

        );
    }
}

export default LoginFristView;