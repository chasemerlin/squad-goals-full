/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonCard, IonButton, IonLabel, IonItem, IonText } from '@ionic/react';
import { Plugins, ActionSheetOptionStyle } from '@capacitor/core';
import swal from 'sweetalert';
import Alerts from './data';
import './SweetAlert.css'
const { Modals } = Plugins;


class SweetContainer extends Component {
    state: any;
    imgUrl = 'https://media.idownloadblog.com/wp-content/uploads/2016/04/messagedeleteconfirmer-confirms-your-messages-app-deleting-message-threads.png';
    imgEnappd = 'https://store.enappd.com/wp-content/uploads/2019/08/netflix800x800-min.jpg';
    dataUrl = [{ url: this.imgEnappd, id: '3' }]
    constructor(props: any) {
        super(props);
        this.state = {
            accorOn: false
        };
    }
    async showAlert(value: any) {
        switch (value) {
            case 'basic':
                swal("Welcome To Enappd! Enappd provides you the best starters and templates for mobile apps");
                break;
            case 'Normal':
                swal("Good job!", "You clicked the button!", "success");
                break;
            case 'Error':
                swal("Hey!", "You clicked the wrong button!", "error");
                break;
            case 'title':
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    // buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            swal("Poof! Your imaginary file has been deleted!", {
                                icon: "success",
                            });
                        } else {
                            swal("Your imaginary file is safe!");
                        }
                    });
                break;
            case 'modal':

                swal("Write something here:", {

                    content: {
                        element: "input",
                        attributes: {
                            placeholder: "Type your password",
                            type: "password",
                        },
                    },
                })
                    .then((value: any) => {
                        swal(`You typed: ${value}`);
                    });
                break;
            case 'long':

                swal("Are you sure you want to do this?", {
                    buttons: ["Oh noez!", true],
                });
                break;

        }
        console.log(value)

    }

    async showConfirm() {
        let confirmRet = await Modals.confirm({
            title: 'Confirm',
            message: 'Are you sure you\'d like to press the red button?',
        });
        console.log('Confirm ret', confirmRet);
    }

    async showPrompt() {
        let promptRet = await Modals.prompt({
            title: 'Hello',
            message: 'What\'s your name?'
        });
        console.log('Prompt ret', promptRet);
    }

    async showActions() {
        let promptRet = await Modals.showActions({
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
        console.log('You selected', promptRet);
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
                            <IonTitle className="ion-text-center" slot="start">Sweet Alert</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="content-medium-bg">
                        {Alerts.map((data, index) => {
                            return (
                                <IonCard key={index}>
                                    <IonItem>
                                        <IonLabel className="label">
                                            <IonText>{data.text}</IonText>
                                        </IonLabel>
                                        <IonButton slot='end' className='ion-margin' onClick={() => this.showAlert(data.click)} color='primary'>Show Alert</IonButton>
                                    </IonItem>
                                </IonCard>
                            )
                        })

                        }
                    </IonContent>
                </IonPage>
            </>
        );
    }
}

export default SweetContainer;