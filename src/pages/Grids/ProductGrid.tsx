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
    IonRow,
    IonCol,
    IonCard
} from '@ionic/react';
import { electronics } from '../../constants/Grids'
import './ProductGrid.css';

class ProductGrid extends Component {
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
                            <IonTitle slot="start" className="title-ios">Product Grid X3</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent className="content-bg_x3">
                        <IonRow className="ion-margin-bottom ion-margin-top">
                            {electronics.map((item: any, index: any) => (
                                <IonCol size="4" key={index} >
                                    <IonCard className="cardSection_x3" margin-top>
                                        <img src={item.image} alt="" />
                                        <IonCardContent>
                                            <span className="contentText_x3">{item.title}</span>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            ))}

                        </IonRow>
                    </IonContent>

                </IonPage >
            </>
        );
    }
}

export default ProductGrid;
