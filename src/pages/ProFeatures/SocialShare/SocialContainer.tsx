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
    IonButton,
    IonItem,
    IonTextarea,
    IonRow,
    IonCol,
    IonLabel,
    IonInput,
    IonListHeader,
    IonImg
} from '@ionic/react';
import { Plugins } from '@capacitor/core';
import './ModalStyles.css'
import whatsapp from '../../../assets/icon/whatsapp.png';
import twitter from '../../../assets/icon/twitter.png';
import slack from '../../../assets/icon/slack.png';
import facebook from '../../../assets/icon/facebook.png';

const { Share } = Plugins;
class SocialContainer extends Component {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            title: 'See cool stuff',
            text: 'Really awesome app templates on ',
            url: 'https://enappd.com/',
            dialogTitle: 'Share with fellow developers'
        };
    }
    socialShare = async () => {
        await Share.share({
            title: this.state.title || 'See cool stuff',
            text: this.state.text || 'Really awesome app templates on ',
            url: this.state.url || 'http://enappd.com/',
            dialogTitle: this.state.dialogTitle || 'Share with fellow developers'
        });
    }
    onChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { title, text, url, dialogTitle } = this.state;

        return (
            <>
                {/* <Menu /> */}
                <IonPage id='main' className="socialPage">
                    <IonHeader>
                        <IonToolbar color='dark'>
                            <IonButtons slot='start'>
                                <IonMenuButton ></IonMenuButton>
                            </IonButtons>
                            <IonButtons slot='end'></IonButtons>
                            <IonTitle slot="start" className="ion-text-center">Social Sharing</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="content-medium-bg">
                        <IonListHeader><IonLabel>Compose a message here</IonLabel></IonListHeader>
                        <form>
                            <IonItem className="ion-margin-bottom" >
                                <IonLabel position="stacked" className="label">
                                    <strong className="align">Title : </strong></IonLabel>
                                <IonInput
                                    value={title}
                                    onIonChange={this.onChange}
                                    name="title"
                                    placeholder="Title for the share"
                                    clear-input="true"
                                    className="input-css"></IonInput>
                            </IonItem>
                            <IonItem className="ion-margin-bottom">
                                <IonLabel position="stacked" className=" label">
                                    <strong className="align">Text : </strong></IonLabel>
                                <IonTextarea
                                    value={text}
                                    onIonChange={this.onChange}
                                    className="input-css"
                                    rows={2}
                                    cols={20}
                                    placeholder="Enter text here"
                                    name="text"
                                    clear-input="true"></IonTextarea>
                            </IonItem>
                            <IonItem className="ion-margin-bottom" >
                                <IonLabel position="stacked" className="label">
                                    <strong className="align">Link : </strong></IonLabel>
                                <IonInput
                                    value={url}
                                    onIonChange={this.onChange}
                                    name="url"
                                    placeholder="Enter any link here"
                                    clear-input="true"
                                    className="input-css"></IonInput>
                            </IonItem>
                            <IonItem className="ion-margin-bottom" >
                                <IonLabel position="stacked" className="label">
                                    <strong className="align">Dialog Title : </strong></IonLabel>
                                <IonInput
                                    value={dialogTitle}
                                    onIonChange={this.onChange}
                                    name="dialogTitle"
                                    placeholder="Give your share a title"
                                    clear-input="true"
                                    className="input-css"></IonInput>
                            </IonItem>
                            <IonRow className="ion-padding">
                                <IonCol>
                                    <IonButton expand="full" color="primary" onClick={() => this.socialShare()}>Share</IonButton>
                                </IonCol>
                            </IonRow>

                        </form >
                        <IonRow>
                            <IonCol className="social-icon" >
                                <IonImg src={whatsapp}></IonImg>
                            </IonCol>
                            <IonCol className="social-icon" >
                                <IonImg src={twitter}></IonImg>
                            </IonCol>
                            <IonCol className="social-icon" >
                                <IonImg src={slack}></IonImg>
                            </IonCol>
                            <IonCol className="social-icon" >
                                <IonImg src={facebook}></IonImg>
                            </IonCol>
                        </IonRow>

                    </IonContent>
                </IonPage>
            </>
        );
    }
}

export default SocialContainer;