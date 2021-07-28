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
    IonCardContent,
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonImg,
    IonMenuButton,
    IonBadge,
    IonRow,
    IonCol,
    IonCard,
    IonButton
} from '@ionic/react';
import './Eventcards.css'
import { eventsLargeCard } from '../../constants/List'

class Eventcards extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
        };
    }



    render() {
        return (
            <>
                {/* <Menu /> */}
                <IonPage id="main">
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonButtons slot="start">
                                <IonMenuButton color="light"></IonMenuButton>
                            </IonButtons>
                            <IonTitle slot="start" className="title-ios" text-capitalize>Event Cards</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-content-bg">
                        {eventsLargeCard.map((event: any, index) => (
                            <IonCard className="eventcard ion-card-bg eventCardLarge ion-margin-bottom" key={index}>
                                <IonImg src={event.largeimage}></IonImg>
                                <IonCardContent>
                                    <IonRow >
                                        <IonCol size="2"><h2 className="month">{event.month}</h2><h1>{event.date}</h1><h3>{event.day}</h3></IonCol>
                                        <div className="seperator"></div>
                                        <IonCol size="7" className="name"><h2 className="black"><strong>{event.name}</strong></h2><h4 className="venue">{event.venues}</h4></IonCol>
                                        <IonCol size="2"><IonButton className="btnEvents" >Book</IonButton></IonCol>
                                    </IonRow>
                                    <div className="hor-seperator"></div>
                                    <IonRow>
                                        <IonCol size="6"><IonBadge color="light">{event.type}</IonBadge></IonCol>
                                        <IonCol size="6" className="righttext">$ {event.price} Onwards</IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        ))}

                    </IonContent >
                </IonPage>
            </>


        );
    }
}

export default Eventcards;
