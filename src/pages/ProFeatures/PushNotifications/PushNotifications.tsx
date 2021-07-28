/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFooter, IonList, IonCard, IonCardContent, IonItem, IonLabel, IonListHeader, IonText, IonButtons, IonMenuButton } from '@ionic/react';
import {
    Plugins,
    PushNotification,
    PushNotificationToken,
    PushNotificationActionPerformed
} from '@capacitor/core';
import './PushNotifications.css';

const { PushNotifications } = Plugins;
const INITIAL_STATE = {
    notifications: [],
};

class PushNotificationsContainer extends Component {
    state: any = {};
    props: any = {};
    constructor(props: any) {
        super(props);
        this.props = props
        this.state = { ...INITIAL_STATE };
        // defineCustomElements(window);
    }

    push() {
        console.log('Initializing HomePage');

        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();

        // On success, we should be able to receive notifications
        PushNotifications.addListener('registration',
            (token: PushNotificationToken) => {
                console.log('Push registration success, token: ' + token.value)
                alert('Push registration success, token: ' + token.value);
            }
        );

        // Some issue with our setup and push will not work
        PushNotifications.addListener('registrationError',
            (error: any) => {
                console.log('Error on registration: ' + JSON.stringify(error))
                alert('Error on registration: ' + JSON.stringify(error));
            }
        );

        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener('pushNotificationReceived',
            (notification: PushNotification) => {
                console.log('Push received: ' + JSON.stringify(notification))
                // alert('Push received: ' + JSON.stringify(notification));
                let notif = this.state.notifications;
                notif.push({ id: notification.id, title: notification.title, body: notification.body })
                this.setState({
                    notifications: notif
                })
            }
        );

        // Method called when tapping on a notification
        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification: PushNotificationActionPerformed) => {
                console.log('Push action performed: ' + JSON.stringify(notification))
                // alert('Push action performed: ' + JSON.stringify(notification));
                let notif = this.state.notifications;
                notif.push({ id: notification.notification.data.id, title: notification.notification.data.title, body: notification.notification.data.body })
                this.setState({
                    notifications: notif
                })
            }
        );
    }
    render() {
        const { notifications } = this.state;
        return (
            <>
                {/* <Menu /> */}
                <IonPage id='main'>
                    <IonHeader>
                        <IonToolbar color="dark">
                            <IonButtons slot='start'>
                                <IonMenuButton  ></IonMenuButton>
                            </IonButtons>
                            <IonTitle slot="start"> Push Notifications</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        {notifications.length === 0 && <div className="full-content-center ion-text-center">
                            <IonList>
                                <IonCard>
                                    <IonCardContent>
                                        1. Register for Push by clicking the footer button.
                                    </IonCardContent>
                                </IonCard>
                                <IonCard>
                                    <IonCardContent>
                                        2. Once registered, you can send push from the Firebase console. <br />
                                        <a href="https://enappd.gitbook.io/ionic-5-react-capacitor-full-app/features/push-notifications" target="_blank">Check documentation</a>
                                    </IonCardContent>
                                </IonCard>
                                <IonCard>
                                    <IonCardContent>
                                        3. Once your app receives notifications, you'll see those here in the list
                                    </IonCardContent>
                                </IonCard>
                            </IonList>

                        </div>}
                        <IonListHeader mode="ios" lines="full">
                            <IonLabel>Notifications</IonLabel>
                        </IonListHeader>
                        {notifications.length !== 0 &&
                            <IonList>

                                {notifications.map((notif: any) =>
                                    <IonItem key={notif.id}>
                                        <IonLabel>
                                            <IonText>
                                                <h3 className="notif-title">{notif.title}</h3>
                                            </IonText>
                                            <p>{notif.body}</p>
                                        </IonLabel>
                                    </IonItem>
                                )}
                            </IonList>}
                    </IonContent>
                    <IonFooter>
                        <IonToolbar>
                            <IonButton color="success" expand="full" onClick={() => this.push()}>Register for Push</IonButton>
                        </IonToolbar>
                    </IonFooter>
                </IonPage >
            </>
        );
    };
}

export default PushNotificationsContainer;