/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonContent, IonButton, IonLabel, IonInput, IonCheckbox, IonRadioGroup, IonItem, IonRadio, IonText, IonImg, IonPage } from '@ionic/react';
import './loginStyles.css';
import fb from '../../../assets/icon/fb.png';
import google from '../../../assets/icon/google.png';
class LoginViewSecond extends Component {
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
                        <div className="mainContent">
                            <div className="logoTitle red">
                                YOUR TITLE
                          </div>
                            <div className="sub-text-1">
                                Login instantly with
                             </div>
                            <div className="social">
                                <IonButton expand="block" fill="clear" className='buttonStylesSocial'>
                                    <IonImg src={fb} />
                                </IonButton>
                                <IonButton expand="block" fill="clear" className='buttonStylesSocial'>
                                    <IonImg src={google} className='googelImg' />
                                </IonButton>
                            </div>
                            <div className="sub-text-2">
                                OR
                              </div>
                            <div className="email">
                                {/* <IonLabel className='labelStyle'>Email</IonLabel> */}
                                <IonInput clearInput type="text" placeholder="Email" className='inputStyles'>
                                </IonInput>
                            </div>
                            <div className="password">
                                {/* <IonLabel className='labelStyle'>Password</IonLabel> */}
                                <IonInput clearInput type="password" placeholder="Password" className='inputStyles'>
                                </IonInput>
                            </div>
                            <div className="sub-text-3">
                                <div className="check">
                                    <IonCheckbox className='checkboxStyle'></IonCheckbox> Remember me
                                 </div>
                                <div className="forgot">Forgot Password ?</div>
                            </div>
                            <div className="radio">
                                <IonRadioGroup className='ionradiGroupStyle' value="business">

                                    <IonItem>
                                        <IonLabel className='labelStyle'>Business</IonLabel>
                                        <IonRadio slot="start" value="business" className='radioStyle'></IonRadio>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel className='labelStyle'>Personal</IonLabel>
                                        <IonRadio slot="start" value="personal" className='radioStyle'></IonRadio>
                                    </IonItem>
                                </IonRadioGroup>
                            </div>
                            <div className="button">
                                <IonButton expand="block" className="login-button-2">Login</IonButton>
                            </div>
                            <div className="sub-text-4">
                                <IonText>Don't have an account?</IonText>
                                <IonText className="link ion-padding-start">Signup here</IonText>
                            </div>
                        </div>
                    </IonContent>
                </IonPage>

            </>
        );
    }
}

export default LoginViewSecond;