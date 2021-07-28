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
    IonGrid,
} from '@ionic/react';
import { gridImages } from '../../constants/Grids'
import './SquareGrid.css'
class SquareGrid extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
        };
    }



    render() {
        const ImageGrid = gridImages.map((grid: any, index: any) => (
            <div className="ion-no-padding" key={index}>
                <div className="square-grid" style={{ backgroundImage: `url('${grid.image}')` }}>
                    <div className="text">{grid.name}</div>
                </div>
            </div>
        ))
        return (
            <>
                {/* <Menu /> */}
                <IonPage id="main">
                    <IonHeader >
                        <IonToolbar color="primary">
                            <IonButtons slot="start">
                                <IonMenuButton color="light"></IonMenuButton>
                            </IonButtons>
                            <IonTitle slot="start" className="title-ios" text-uppercase>Image Grid</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent>
                        <IonGrid>
                            <IonRow>
                                {ImageGrid}
                            </IonRow>
                        </IonGrid>
                    </IonContent >
                </IonPage >
            </>
        );
    }
}

export default SquareGrid;
