/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonCard, IonAvatar, IonButton, IonText, IonLabel } from '@ionic/react';
import './FusedLocStyle.css'
const FusedView = (props: any) => {
    const { location, lat, lng, getCurrentLocation } = props
    // const locImg = require('public/assets/imgs/enappd.png')
    return (
        <>
            {/* <Menu /> */}
            <IonPage id='main'>
                <IonHeader>
                    <IonToolbar color='dark'>
                        <IonButtons slot='start'>
                            <IonMenuButton ></IonMenuButton>
                        </IonButtons>
                        <IonTitle slot="start">Fused Location</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonCard className='cardContent'>
                        <IonAvatar style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519709042477-8de6eaf1fdc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')` }} className='FusedAvatar'>
                        </IonAvatar>
                        {location &&
                            <IonLabel>
                                <IonText>Fused Location is:</IonText>
                                <IonText>Lat:{lat}</IonText>
                                <IonText>Lng:{lng}</IonText>
                            </IonLabel>
                        }
                        <IonButton className='ion-margin' onClick={getCurrentLocation} color='warning'>Get Current Location</IonButton>
                    </IonCard>
                </IonContent>
            </IonPage>
        </>
    )
}
export default FusedView;