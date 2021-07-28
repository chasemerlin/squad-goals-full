/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonContent, IonImg, IonText, IonButton } from '@ionic/react';
import './LoginThird.css';
import yoga from '../../../assets/yoga1.png';
class LoginThird extends Component {
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
                        <div className="main">
                            <div className="title-3">
                                <IonText className="light">Classic</IonText>
                                <IonText className="bold">YOGA</IonText>
                            </div>
                            <div className="image">
                                <IonImg src={yoga} />
                            </div>
                            <div className="buttons">
                                <IonButton expand="full" className="facebook">Login with Facebook</IonButton>
                                <IonButton expand="full" className="google">Login with Google</IonButton>
                            </div>
                        </div>
                    </IonContent>
                </IonPage>
            </>
        );
    }
}

export default LoginThird;