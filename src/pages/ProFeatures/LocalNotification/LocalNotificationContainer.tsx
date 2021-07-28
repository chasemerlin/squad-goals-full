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
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonCard,
    IonButton,
    IonImg,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
} from '@ionic/react';
import { Plugins, LocalNotification, LocalNotificationActionPerformed } from '@capacitor/core';
import './LocalStyles.css';

const { LocalNotifications, Toast } = Plugins;
const INITIAL_STATE = {
    textNotification: {},
    imageNotification: {},
    multipleNotification: [],
    scheduledNotification: {},
    inputNotification: {}
};
class LocalNotificationContainer extends Component {
    state: any = {};
    constructor(props: any) {
        super(props);
        this.state = { ...INITIAL_STATE };

    }
    imgEnappd = 'https://store.enappd.com/wp-content/uploads/2019/08/netflix800x800-min.jpg';
    dataUrl = [{ url: this.imgEnappd, id: '3' }]

    async componentDidMount() {
        // Show us the notification payload if the app is open on our device
        LocalNotifications.addListener('localNotificationReceived',
            (notification: LocalNotification) => {
                console.log('Push received: ' + JSON.stringify(notification))
                // alert('Push received: ' + JSON.stringify(notification));
                let notif = this.state.notifications;
                notif.push({
                    id: notification.id,
                    title: notification.title,
                    body: notification.body,
                    attachments: notification.attachments
                })
                console.log('type', notification.extra);
                let temp: any = [];
                if (notification.extra.type === 'multipleNotification') {
                    if (this.state.multipleNotification.length) {
                        temp.push(this.state.multipleNotification[0]);
                        temp.push(notif);
                    }
                    else {
                        temp.push(notif);
                    }
                }
                else {
                    temp = notif
                }
                console.log(temp);
                this.setState({
                    [notification.extra.type]: temp
                })
            }
        );

        // Method called when tapping on a notification
        LocalNotifications.addListener('localNotificationActionPerformed',
            (notification: LocalNotificationActionPerformed) => {
                console.log('Push action performed: ' + JSON.stringify(notification))
                // alert('Push action performed: ' + JSON.stringify(notification));
                let notif = {
                    id: notification.notification.id,
                    title: notification.notification.title,
                    body: notification.notification.body,
                    attachments: notification.notification.attachments
                }
                console.log('type', notification.notification.extra);
                let temp: any = [];
                if (notification.notification.extra.type === 'multipleNotification') {
                    if (this.state.multipleNotification.length) {
                        temp.push(this.state.multipleNotification[0]);
                        temp.push(notif);
                    }
                    else {
                        temp.push(notif);
                    }
                }
                else {
                    temp = notif
                }
                console.log(temp);
                this.setState({
                    [notification.notification.extra.type]: temp
                })
            }
        );


        LocalNotifications.registerActionTypes({
            types: [{
                id: 'INPUT',
                actions: [{
                    id: '3',
                    title: 'Reply',
                    input: true,
                    foreground: true,
                    destructive: true,
                    inputButtonTitle: 'Send',
                    inputPlaceholder: 'Enter your reply here'
                }]
            }]
        })

        LocalNotifications.requestPermission().then(() => {
            this.showToast('Local notification permission granted');
        })
            .catch(() => {
                this.showToast('Local notification permission denied');
            })
    }

    showToast = async (msg: string) => {
        await Toast.show({
            text: msg
        })
    }

    sendImageNotification = () => {
        LocalNotifications.schedule({
            notifications: [
                {
                    title: "Brought to you by Enappd",
                    body: "This is an image notification",
                    id: 1,
                    schedule: { at: new Date(Date.now() + 1000 * 1) },
                    // sound: null,
                    attachments: this.dataUrl,
                    extra: { type: 'imageNotification' },
                }
            ]
        });
    }

    sendTextNotification = () => {
        LocalNotifications.schedule({
            notifications: [
                {
                    title: "Brought to you by Enappd",
                    body: "This is just a text notification",
                    id: 1,
                    schedule: { at: new Date(Date.now() + 1000 * 1) },
                    // sound: null,
                    extra: { type: 'textNotification' }
                }
            ]
        });
    }

    sendMultipleNotifications = () => {

        LocalNotifications.schedule({
            notifications: [
                {
                    title: "Brought to you by Enappd",
                    body: "This is 1 of 2 notifications sent together",
                    id: 1,
                    schedule: { at: new Date(Date.now() + 1000 * 1) },
                    // sound: null,
                    extra: { type: 'multipleNotification' },
                },
                {
                    title: "Brought to you by Enappd",
                    body: "This is 2 of 2 notifications sent together",
                    id: 2,
                    schedule: { at: new Date(Date.now() + 1000 * 2) },
                    // sound: null,
                    extra: { type: 'multipleNotification' },
                }
            ]
        });
    }

    sendScheduledNotification = () => {
        LocalNotifications.schedule({
            notifications: [
                {
                    title: "Brought to you by Enappd",
                    body: "This is a 10s delayed notification",
                    id: 1,
                    schedule: { at: new Date(Date.now() + 1000 * 10) },
                    // sound: null,
                    extra: { type: 'scheduledNotification' }
                }
            ]
        });
    }

    sendInputNotification = () => {
        LocalNotifications.schedule({
            notifications: [
                {
                    title: "Brought to you by Enappd",
                    body: "This is a notification with input box for reply",
                    id: 1,
                    schedule: { at: new Date(Date.now() + 1000 * 1) },
                    // sound: null,
                    actionTypeId: 'INPUT',
                    extra: { type: 'inputNotification' }
                }
            ]
        });
    }
    resetList = () => {
        this.setState({
            ...INITIAL_STATE
        })
    }

    render() {
        const { imageNotification, textNotification, multipleNotification, scheduledNotification, inputNotification } = this.state;
        console.log(multipleNotification);
        return (
            <>
                {/* <Menu /> */}
                <IonPage id='main'>
                    <IonHeader>
                        <IonToolbar color='dark'>
                            <IonButtons slot='start'>
                                <IonMenuButton ></IonMenuButton>
                            </IonButtons>
                            <IonButtons slot='end'></IonButtons>
                            <IonTitle slot="start" className="ion-text-center">Local Notification</IonTitle>
                            <IonButtons slot="end">
                                <IonButton fill="clear" onClick={this.resetList}>Reset</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent>
                        <IonCard>
                            <IonCardHeader>
                                {!(textNotification && textNotification.id) &&
                                    <IonCardSubtitle>Click the button to send</IonCardSubtitle>
                                }
                                <IonCardTitle>Text Notification</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {!(textNotification && textNotification.id) &&
                                    <>
                                        <p>Once the notification is tapped by user, the content will appear here in the app</p>
                                        <IonButton expand="full" className='ion-margin' onClick={this.sendTextNotification}
                                            color='primary'>
                                            Send
                                </IonButton>
                                    </>}
                                {textNotification && textNotification.id &&
                                    <div>
                                        <h3 className="notif-title">{textNotification.title}</h3>
                                        <p>{textNotification.body}</p>
                                    </div>
                                }
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardHeader>
                                {!(imageNotification && imageNotification.id) &&
                                    <IonCardSubtitle>Click the button to send</IonCardSubtitle>
                                }
                                <IonCardTitle>Image Notification</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {!(imageNotification && imageNotification.id) &&
                                    <>
                                        <p>Once the notification is tapped by user, the content will appear here in the app</p>
                                        <IonButton expand="full" className='ion-margin' onClick={this.sendImageNotification}
                                            color='primary'>
                                            Send
                                        </IonButton>
                                        <p>Image notification might face issue in iOS</p>
                                    </>}
                                {imageNotification && imageNotification.id &&
                                    <div>
                                        <h3 className="notif-title">{imageNotification.title}</h3>
                                        <p>{imageNotification.body}</p>
                                        <IonImg src={imageNotification.attachments[0].url}></IonImg>
                                    </div>
                                }
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardHeader>
                                {!(multipleNotification && multipleNotification.length) &&
                                    <IonCardSubtitle>Click the button to send</IonCardSubtitle>
                                }
                                <IonCardTitle>Multiple Notifications</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {!(multipleNotification && multipleNotification.length) &&
                                    <>
                                        <p>Once the notification is tapped by user, the content will appear here in the app</p>
                                        <IonButton expand="full" className='ion-margin' onClick={this.sendMultipleNotifications}
                                            color='primary'>
                                            Send
                                </IonButton>
                                    </>}
                                {/* {(multipleNotification && multipleNotification.length !== 0) && */}
                                {multipleNotification.map((item: any) => {
                                    return (
                                        <div key={item.id}>
                                            <h3 className="notif-title">{item.title}</h3>
                                            <p>{item.body}</p>
                                        </div>
                                    )
                                })
                                }
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardHeader>
                                {!(scheduledNotification && scheduledNotification.id) &&
                                    <IonCardSubtitle>Click the button to send</IonCardSubtitle>
                                }
                                <IonCardTitle>Scheduled Notification</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {!(scheduledNotification && scheduledNotification.id) &&
                                    <>
                                        <p>Notification will be scheduled after 10s.
                                            Once the notification is tapped by user, the content will appear here in the app</p>
                                        <IonButton expand="full" className='ion-margin' onClick={this.sendScheduledNotification}
                                            color='primary'>
                                            Send
                                </IonButton>
                                    </>}
                                {scheduledNotification && scheduledNotification.id &&
                                    <div>
                                        <h3 className="notif-title">{scheduledNotification.title}</h3>
                                        <p>{scheduledNotification.body}</p>
                                    </div>
                                }
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardHeader>
                                {!(inputNotification && inputNotification.id) &&
                                    <IonCardSubtitle>Click the button to send</IonCardSubtitle>
                                }
                                <IonCardTitle>Input Notification</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {!(inputNotification && inputNotification.id) &&
                                    <>
                                        <p>Notification will contain an input box.
                                            Once the notification is tapped by user, the content will appear here in the app</p>
                                        <IonButton expand="full" className='ion-margin' onClick={this.sendInputNotification}
                                            color='primary'>
                                            Send
                                </IonButton>
                                    </>}
                                {inputNotification && inputNotification.id &&
                                    <div>
                                        <h3 className="notif-title">{inputNotification.title}</h3>
                                        <p>{inputNotification.body}</p>
                                    </div>
                                }
                            </IonCardContent>
                        </IonCard>
                    </IonContent>
                </IonPage>
            </>
        );
    }
}

export default LocalNotificationContainer;