/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonNote, IonSegmentButton, IonIcon, IonList, IonItem, IonAvatar, IonImg, IonContent, IonSegment, IonTitle } from '@ionic/react';
import JsonData from '../ChatListDataRose';
import './Artboard.css'
import { person, people, search } from 'ionicons/icons';
class Artboard extends Component {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            segment: 'person'
        };
    }
    segmentButton = (value: any) => {
        this.setState({
            segment: value
        })
    }
    render() {
        const { segment } = this.state
        return (
            <>
                {/* <Menu /> */}
                <IonPage id='main'>
                    <IonHeader>
                        <IonToolbar className="headerToolbarArt">
                            <IonButtons slot="start">
                                <IonMenuButton menu="start" color="light"></IonMenuButton>
                            </IonButtons>
                            <IonTitle color="light" slot="start">Artboard</IonTitle>
                        </IonToolbar>

                        <IonToolbar className="headerToolbarArt">

                            <div className="headerContentSectionArt">

                                <div className="userCardArt ion-padding-vertical ion-padding-start" >
                                    <h5 className="userCardTitleArt">Patricia Howard</h5>
                                    <IonNote className="descTextArt" > St. Paul</IonNote>
                                </div>

                                <div className="segmentSectionArt ion-padding-top">
                                    <IonSegment mode="md" className="mainSegmentArt" value={segment} onIonChange={(e) => this.segmentButton(e.detail.value)}>
                                        <IonSegmentButton mode="md" value="person">
                                            <IonIcon icon={person} className='ArtIcon'></IonIcon>
                                            <span className="onlineOffline_iconArt"></span>
                                        </IonSegmentButton>
                                        <IonSegmentButton value="people">
                                            <IonIcon icon={people} className='ArtIcon'></IonIcon>
                                        </IonSegmentButton>
                                        <IonSegmentButton value="search">
                                            <IonIcon icon={search} className='ArtIcon'></IonIcon>
                                        </IonSegmentButton>
                                    </IonSegment>
                                </div>
                            </div>

                        </IonToolbar>
                    </IonHeader>
                    {segment === 'person' &&
                        <IonContent className='ArtboardContainer ion-padding-top'>
                            <IonList className="chatListArt ion-no-padding">
                                {
                                    JsonData.Artboard.map((chat, index) => {
                                        return (
                                            <IonItem lines="none" className="chatListArt" key={index}>
                                                <div className="borderBottomLineArt"></div>
                                                <div className="listSectionArt">
                                                    <div className="UserimgSection">
                                                        <IonAvatar className="userAvatarArt" slot="start">
                                                            <IonImg src={chat.image} className='ionImgArtboardArt'></IonImg>
                                                        </IonAvatar>
                                                    </div>
                                                    <div className="usernameSectionArt ion-padding-start">
                                                        <h6 className="userName">
                                                            {chat.name}
                                                        </h6>
                                                        <p className="descTextArt ion-no-margin ion-no-padding">{chat.description}</p>
                                                    </div>
                                                </div>
                                            </IonItem>
                                        )
                                    })
                                }
                            </IonList>
                        </IonContent>
                    }
                    {segment === 'people' &&
                        <IonContent className='ArtboardContainer ion-padding-top'>
                            <IonList className="chatListArt ion-no-padding">
                                {
                                    JsonData.Artboard.map((chat, index) => {
                                        return (
                                            <IonItem lines="none" className="chatListArt" key={index}>
                                                <div className="borderBottomLineArt"></div>
                                                <div className="listSectionArt">
                                                    <div className="UserimgSection">
                                                        <IonAvatar className="userAvatarArt" slot="start">
                                                            <IonImg src={chat.image} className='ionImgArtboardArt'></IonImg>
                                                        </IonAvatar>
                                                    </div>
                                                    <div className="usernameSectionArt ion-padding-start">
                                                        <h6 className="userName">
                                                            {chat.name}
                                                        </h6>
                                                        <p className="descTextArt ion-no-margin ion-no-padding">{chat.description}</p>
                                                    </div>
                                                </div>
                                            </IonItem>
                                        )
                                    })
                                }
                            </IonList>
                        </IonContent>
                    }
                    {segment === 'search' &&
                        <IonContent className='ArtboardContainer ion-padding-top'>
                            <IonList className="chatListArt ion-no-padding">
                                {
                                    JsonData.Artboard.map((chat, index) => {
                                        return (
                                            <IonItem lines="none" className="chatListArt" key={index}>
                                                <div className="borderBottomLineArt"></div>
                                                <div className="listSectionArt">
                                                    <div className="UserimgSection">
                                                        <IonAvatar className="userAvatarArt" slot="start">
                                                            <IonImg src={chat.image} className='ionImgArtboardArt'></IonImg>
                                                        </IonAvatar>
                                                    </div>
                                                    <div className="usernameSectionArt ion-padding-start">
                                                        <h6 className="userName">
                                                            {chat.name}
                                                        </h6>
                                                        <p className="descTextArt ion-no-margin ion-no-padding">{chat.description}</p>
                                                    </div>
                                                </div>
                                            </IonItem>
                                        )
                                    })
                                }
                            </IonList>
                        </IonContent>
                    }

                </IonPage>
            </>
        );
    }
}

export default Artboard;