/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonButton } from '@ionic/react';
import './SmsStyles.css';

class SmsContainer extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
        console.log("Register custom capacitor plugins");
        // registerWebPlugin(SmsManager);
    }

    SendSMS() {
        // console.log('working')
        // const messages = [
        //     {
        //         recipients: [{ mobile: '7014859919' }],
        //         content: 'Hi Vaibhav how are you?'
        //     }
        // ]
        // for (const m of messages) {
        // const numbers: string[] = [];
        // for (const r of m.recipients) {
        //     numbers.push(r.mobile);
        // }
        // Plugins.SmsManager.send({
        //     numbers: ['7014859919'],
        //     text: 'Hi Vaibhav how are you?',
        // }).then(() => {
        //     // SMS app was opened
        // }).catch((error: any) => {
        //     // see error codes below
        //     if (error.message !== "SEND_CANCELLED") {
        //         // show toast with error message
        //         console.log(error.message);
        //     }
        // });
        // }
    }




    render() {
        return (
            <>
                {/* <Menu /> */}
                <IonPage id='main'>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot='start'>
                                <IonMenuButton color='dark'></IonMenuButton>
                            </IonButtons>
                            <IonTitle slot="start">Send SMS</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <div className="videoClass">
                            The world is your oyster.
                            <p>If you get lost, the <a target="_blank" rel="noopener noreferrer" href="https://enappd.com/blog/">docs</a> will be your guide.</p>
                            <IonButton onClick={this.SendSMS} color='primary'>Send SMS</IonButton>
                        </div>
                    </IonContent>
                </IonPage>
            </>
        );
    }
}

export default SmsContainer;