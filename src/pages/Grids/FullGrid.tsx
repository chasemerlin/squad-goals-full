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
    IonRow,
    IonList
} from '@ionic/react';
import './FullGrid.css'
import { FullImages } from '../../constants/Grids'

class FullGrid extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
        };
    }



    render() {
        const GridImages = FullImages.map((data, index) => (
            <IonRow key={index}>
                <div className="imageDiv" style={{
                    backgroundImage: `linear-gradient(0deg,rgba(88, 87, 88, 0.3),rgba(94, 93, 94, 0.3)),url('${data.image}')`
                }}>
                    <div className="inner">
                        <h1><b>{data.title}</b></h1>
                    </div>
                </div>
            </IonRow>
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
                            <IonTitle slot="start" className="title-ios">Full Width Images</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonList className="ion-no-padding">
                            {GridImages}
                        </IonList>
                    </IonContent >
                </IonPage >
            </>
        );
    }
}

export default FullGrid;
