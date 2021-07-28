/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React from 'react';
import { IonPage, IonHeader, IonButtons, IonToolbar, IonMenuButton, IonContent, IonImg, IonText, IonButton, IonItem, IonThumbnail, IonLabel } from '@ionic/react';
import './FaceStyles.css';
import yoga from '../../../assets/yoga1.png';

const FaceView = (props: any) => {
    const { signIn, loggedIn, user, signOut } = props

    return (
        <>
            {/* <Menu /> */}
            <IonPage id='main'>
                <IonHeader>
                    <IonToolbar className="toolbar-no-border">
                        <IonButtons slot='start'>
                            <IonMenuButton color='dark'></IonMenuButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {!loggedIn &&
                        <div className="main">
                            <div className="title-fb">
                                <IonText className="bold">Facebook Login</IonText>
                            </div>
                            <div className="image">
                                <IonImg src={yoga} />
                            </div>
                            <div className="buttons">
                                <IonButton expand="full" className="facebook" onClick={signIn}>Login with Facebook</IonButton>
                            </div>
                        </div>
                    }
                    {loggedIn &&
                        <div className="main">
                            <div className="title-fb">
                                <IonText className="bold">Facebook Login</IonText>
                            </div>
                            <IonItem>
                                <IonThumbnail slot="start">
                                    <img src={user.picture.data.url} alt="" />
                                </IonThumbnail>
                                <IonLabel>
                                    <h3>{user.name}</h3>
                                </IonLabel>
                            </IonItem>
                            <div className="buttons">
                                <IonButton className="login-button" onClick={signOut} expand="full" fill="solid" color="danger">
                                    Logout from Facebook
                            </IonButton>
                            </div>
                        </div>}
                </IonContent>
            </IonPage>
        </>
    )
}
export default FaceView;