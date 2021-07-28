/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import React, { Component } from 'react';
import { shop_grid } from '../../constants/Grids'
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
    IonText,
    IonBadge,
    IonRow,
    IonCol,
    IonGrid,
    IonCard
} from '@ionic/react';
import './ShopGrid.css'
function calculate(price: number, discount: number) {
    price = price - (price * discount / 100);
    return price.toFixed(2);
}

class ShopGrid extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
        };
    }



    render() {
        const ProductList = shop_grid.map((data, index: any) => (
            <IonCol size="6" key={index}>
                <IonCard className="card-shop ion-no-margin">
                    {data.offer ? <IonBadge className="badge" >{data.discount}%</IonBadge> : null}
                    <img src={data.image[0]} alt={data.name} />
                    <IonCardContent>
                        <IonCardTitle>
                            <IonRow>
                                {data.offer ? <IonCol className="ion-no-padding">
                                    <IonText className="ion-text-left"><span className="price"><span className="inline">{data.currency}{data.cost_price}</span> <strong>{data.currency}{calculate(data.cost_price, data.discount)}</strong></span></IonText>
                                </IonCol> : <IonCol className="ion-no-padding">
                                        <IonText className="ion-text-left"><span className="price"><strong>{data.currency}{data.cost_price}</strong></span></IonText>
                                    </IonCol>}
                            </IonRow>
                            <IonRow>
                                <IonCol className="ion-no-padding ion-text-left">
                                    <h6 className="subtitle ion-text-left">{data.bought}+ bought this</h6>
                                </IonCol>
                            </IonRow>
                        </IonCardTitle>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        ))
        return (
            <>
                {/* <Menu /> */}
                <IonPage id="main">
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonButtons slot="start">
                                <IonMenuButton color="light"></IonMenuButton>
                            </IonButtons>
                            <IonTitle slot="start" className="title-ios" text-capitalize>Shop Grid</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="content-bg">
                        <IonGrid>
                            <IonRow>
                                {ProductList}
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </IonPage>
            </>
        );
    }
}

export default ShopGrid;
