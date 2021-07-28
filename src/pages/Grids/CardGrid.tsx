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
    IonIcon,
    IonLabel,
    IonRow,
    IonCol,
    IonCard
} from '@ionic/react';
import { electronicsList } from '../../constants/Grids'
import './CardGrid.css'
import { star, heart } from 'ionicons/icons';

class CardGrid extends Component {
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
                            <IonTitle slot="start" className="title-ios">Product Card Grid X2</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent className="content-bg">
                        <IonRow className="ion-margin-bottom ion-margin-top">
                            {/* *ngFor="let item of electronicsList;let i = index"? */}
                            {electronicsList.map((item: any, index: any) => (
                                <IonCol size="6" key={index}>
                                    <IonCard className="cardSection" margin-top>
                                        {/* (click)="favorites(i)" */}
                                        <div className="heartIcon" >
                                            {!item.checked ? <IonIcon slot="end" icon={heart} className="iconSize heart "></IonIcon> :
                                                <IonIcon slot="end" icon={heart} className="iconSize heartRed"></IonIcon>
                                            }
                                        </div>
                                        <img src={item.image} alt="" />
                                        <IonCardContent>
                                            <IonRow>
                                                <IonCol>
                                                    <span className="contentText">{item.title}</span>
                                                </IonCol>
                                            </IonRow>
                                            <IonRow className="rowSection ion-align-items-center">
                                                <IonCol size="6" className="colSection">
                                                    <div className="discountSection">
                                                        <IonLabel text-uppercase>{item.rate}</IonLabel><IonIcon icon={star}></IonIcon>
                                                    </div>
                                                    <div>
                                                        <span className="salesCount">(124)</span>
                                                    </div>
                                                </IonCol>
                                                <IonCol size="6" className="colSection">
                                                    <span className="regularPriceSection">${item.regularPrice}</span>
                                                    <span className="PriceSection">${item.salePrice}</span>
                                                </IonCol>
                                            </IonRow>

                                        </IonCardContent>
                                    </IonCard>
                                </IonCol >
                            ))}
                        </IonRow >
                    </IonContent >
                </IonPage >
            </>
        );
    }
}

export default CardGrid;
