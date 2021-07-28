/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonCard, IonButton, IonThumbnail } from '@ionic/react';
import { Plugins, ActionSheetOptionStyle } from '@capacitor/core';
import caution from '../../../assets/caution.png';

const { Modals } = Plugins;
interface LocalNotificationEnabledResult {
    // Whether the device has Local Notifications enabled or not
    value: boolean;
}
interface LocalNotificationPendingList {
    notifications: any;
}
interface LocalNotificationScheduleResult {
    notifications: any;
}

class ModalContainer extends Component<LocalNotificationEnabledResult, LocalNotificationScheduleResult, LocalNotificationPendingList> {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            accorOn: false
        };

    }
    async showAlert() {
        await Modals.alert({
            title: 'Stop',
            message: 'This is an error'
        });

    }

    async showConfirm() {
        await Modals.confirm({
            title: 'Confirm',
            message: 'Are you sure you\'d like to press the red button?',
        });
    }

    async showPrompt() {
        await Modals.prompt({
            title: 'Hello',
            message: 'What\'s your name?'
        });
    }

    async showActions() {
        await Modals.showActions({
            title: 'Photo Options',
            message: 'Select an option to perform',
            options: [
                {
                    title: 'Upload'
                },
                {
                    title: 'Share'
                },
                {
                    title: 'Remove',
                    style: ActionSheetOptionStyle.Destructive
                }
            ]
        })
    }


    render() {
        return (
            <>
                {/* <Menu /> */}
                <IonPage id='main'>
                    <IonHeader>
                        <IonToolbar color="dark">
                            <IonButtons slot='start'>
                                <IonMenuButton></IonMenuButton>
                            </IonButtons>
                            <IonButtons slot='end'></IonButtons>
                            <IonTitle slot="start" className="ion-text-center">Alerts</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonCard className='cardContent'>
                            <IonThumbnail className='copyAvatar ion-margin-top'>
                                <img src={caution} alt="" />
                            </IonThumbnail>
                            <IonButton className='ion-margin' onClick={this.showAlert} color='primary'>Show Alert</IonButton>
                            <IonButton className='ion-margin' onClick={this.showConfirm} color='tertiary'>Show Confirm </IonButton>
                            <IonButton className='ion-margin' onClick={this.showPrompt} color='success'>Show Prompt </IonButton>
                            <IonButton className='ion-margin' onClick={this.showActions} color='secondary'>Show Actions </IonButton>
                        </IonCard>
                    </IonContent>
                </IonPage>
            </>
        );
    }
}

export default ModalContainer;