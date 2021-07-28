/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonContent, IonText, IonCard, IonItem, IonIcon, IonInput, IonButton, IonImg } from '@ionic/react';
import beach from '../../../assets/beach.png';
import './LoginFour.css';
import { person, call, mail } from 'ionicons/icons';
class LoginFour extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                {/* <Menu /> */}
                <IonPage id="main">
                    <IonContent>
                        <div className="content">
                            <div className="top">
                                <div className="logoSnap">
                                    <IonImg src={beach} className="logoSnap" />
                                </div>
                                <IonText className="title" color="light">Canvas</IonText>
                            </div>
                            <div className="bottom ion-padding-horizontal" >
                                <div className="content-list">
                                    <IonCard className="input-card ion-margin-vertical">
                                        <IonItem lines="none" className='transItem'>
                                            <IonIcon icon={person} item-start className='iconColorStyle'></IonIcon>
                                            <IonInput type="text" placeholder="Full Name" className='ion-padding-start inputStyle'></IonInput>
                                        </IonItem>
                                        <IonItem lines="none" className='transItem'>
                                            <IonIcon icon={call} item-start className='iconColorStyle'></IonIcon>
                                            <IonInput type="number" placeholder="Mobile Number" className='ion-padding-start inputStyle'></IonInput>
                                        </IonItem>
                                        <IonItem lines="none" className='transItem'>
                                            <IonIcon icon={mail} item-start className='iconColorStyle'></IonIcon>
                                            <IonInput type="email" placeholder="Email" className='ion-padding-start inputStyle'></IonInput>
                                        </IonItem>
                                    </IonCard>
                                </div>
                                <div className="loginBtn ion-margin-vertical" >
                                    <IonButton expand="full" className="ion-no-padding">Register</IonButton>
                                    <IonText className="font-small ion-text-center">Already have an account?<span className="link">
                                        Click here</span>
                                    </IonText>
                                </div>
                            </div>
                        </div>

                    </IonContent>
                </IonPage>
            </>
        );
    }
}

export default LoginFour;