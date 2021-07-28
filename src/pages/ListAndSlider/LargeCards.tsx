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
    IonMenuButton,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCard,
    IonImg
} from '@ionic/react';
import './LargeCards.css'
import { eventsLargeCard } from '../../constants/List'

class LargeCards extends Component {
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
                    <IonHeader className="headerTicket headerTicket">
                        <IonToolbar color="primary">
                            <IonButtons slot="start">
                                <IonMenuButton color="light"></IonMenuButton>
                            </IonButtons>
                            <IonTitle slot="start" className="title-ios" text-capitalize>Large Cards</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="content-bg">
                        {eventsLargeCard.map((event: any, index) => (
                            <IonCard className="marginBottom card-bg" key={index}>
                                <IonImg src={event.largeimage} />
                                <IonCardHeader >
                                    <IonCardSubtitle role="heading">{event.venues}</IonCardSubtitle>
                                    <IonCardTitle role="heading" className="ion-card-title-css{">{event.name}</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent className="card-content card-content-ios">
                                    Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
                                    Wisconsin Territory in 1836.
                            </IonCardContent>
                            </IonCard>
                        ))}

                    </IonContent>
                </IonPage >
            </>
        );
    }
}

export default LargeCards;
