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
import './ProductsCards.css'
import { electronicsList } from '../../constants/Grids'
import { star, trash } from 'ionicons/icons'

class ProductsCards extends Component {
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
                            <IonTitle slot="start" className="title-ios" text-capitalize>Shop Grid</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="content-bg">
                        <IonRow className="ion-margin-bottom" >
                            <IonCol size="12">
                                {electronicsList.map((item: any, index: number) => (
                                    <IonCard className="cardSectionProducts" margin-top key={index}>
                                        <IonCardContent>
                                            <IonRow className="ion-align-items-center">
                                                <div className="heartIconProducts" >
                                                    <IonIcon slot="end" icon={trash} mode="ios" className="iconSizeProd heart "></IonIcon>
                                                </div>
                                                <IonCol size="4">
                                                    <img src={item.image} alt="" />
                                                </IonCol>
                                                <IonCol size="8" className="titleProduct pr0">
                                                    <IonRow className="textLeftStyle">
                                                        <IonCol size="10" className="titleProduct">
                                                            <span className="contentText-productsStyle">{item.title}</span>
                                                        </IonCol>
                                                    </IonRow>
                                                    <IonRow className="textLeftStyle">
                                                        <IonCol size="10" className="ion-no-padding">
                                                            <span className="productTypeText">{item.productType}</span>
                                                        </IonCol>
                                                    </IonRow>
                                                    <IonRow className="rowSectionProducts ion-align-items-center">
                                                        <IonCol size="7" className="colSectionProducts">
                                                            <div className="discountSectionProducts">
                                                                <IonLabel text-uppercase>{item.rate}</IonLabel>
                                                                <IonIcon icon={star}></IonIcon>
                                                            </div>
                                                            <div>
                                                                <span className="salesCountProducts">(124 Review)</span>
                                                            </div>
                                                        </IonCol>
                                                        <IonCol size="5" className="priceParentSectionProducts">
                                                            <span className="regularPriceSection">${item.regularPrice}</span>
                                                            <span className="PriceSectionProd">${item.salePrice}</span>
                                                        </IonCol>
                                                    </IonRow>
                                                </IonCol>
                                            </IonRow>
                                        </IonCardContent>
                                    </IonCard>
                                ))}

                            </IonCol>
                        </IonRow>
                    </IonContent >
                </IonPage >
            </>
        );
    }
}

export default ProductsCards;