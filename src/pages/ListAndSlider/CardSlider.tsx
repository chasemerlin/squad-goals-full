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
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonListHeader,
    IonIcon,
    IonCard,
    IonLabel
} from '@ionic/react';
import './CardSlider.css'
import { cardData } from '../../constants/List'
import { pin } from 'ionicons/icons'
class CardSlider extends Component {
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
                            <IonTitle slot="start" className="title-ios" text-capitalize>Apartment Listings</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent className="content-bg">
                        <div className="overlay-content">
                            {cardData.map((item, index) => (
                                <div className="bhk1" key={index}>
                                    <IonListHeader lines="full"> <IonLabel>{item.name} flats & apartments  </IonLabel></IonListHeader>
                                    <div className="scrl">
                                        {item.data.map((flat, index2) => (
                                            <IonCard className="card-item" style={{
                                                backgroundImage: 'url(' + flat.url + ')',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }} key={index2}>
                                                <div className="overlay">
                                                    <div className="bottom-content">
                                                        <h2 className="price-card-slider">{flat.price}</h2>
                                                        <h4 className="ion-no-margin">{flat.name}</h4>
                                                        <h6 className="ion-no-margin">
                                                            {flat.status}<IonIcon icon={pin} className='iconStyle'></IonIcon>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </IonCard>
                                        ))}

                                    </div>
                                </div>
                            ))}

                        </div>
                    </IonContent >
                </IonPage >
            </>
        );
    }
}

export default CardSlider;
