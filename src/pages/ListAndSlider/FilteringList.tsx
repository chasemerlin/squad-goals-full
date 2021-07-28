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
    IonList,
    IonImg,
    IonItem,
    IonText,
    IonRow,
    IonCol,
} from '@ionic/react';
import './FilteringList.css'
import { filteringList } from '../../constants/Grids'


class FilteringList extends Component {
    state: any = {};
    constructor(props: any) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }
    activeRow(index: any) {
        this.setState({
            activeIndex: index
        })
    }


    render() {
        const { activeIndex } = this.state;
        return (
            <>
                {/* <Menu /> */}
                <IonPage id="main">
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonButtons slot="start">
                                <IonMenuButton color="light"></IonMenuButton>
                            </IonButtons>
                            <IonTitle slot="start" className="title-ios" text-capitalize>Product Filter List</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonRow className="ion-row-css">
                            <IonCol size="4" className="filters ion-no-padding">
                                {filteringList.map((list: any, i: any) => (
                                    <IonRow key={i} onClick={() => this.activeRow(i)} className={`ion-row-css imageSection InactiveIndexBackground`} style={{
                                        backgroundColor: activeIndex === i ? 'white' : ''
                                    }}>
                                        <IonImg src={list.image} className="ion-img-css"></IonImg>
                                        <IonText className="subtitle">{list.title}</IonText>
                                    </IonRow>
                                ))}

                            </IonCol>
                            <IonCol size="8" >
                                <IonList className="ion-padding-start">
                                    {filteringList[activeIndex].child.map((child: string, index: any) => {
                                        return <IonItem className="ion-item-css" key={index}>
                                            <IonText className="titleFilter">{child}</IonText>
                                        </IonItem>
                                    })}
                                </IonList>
                            </IonCol>
                        </IonRow>

                    </IonContent>
                </IonPage >
            </>
        );
    }
}

export default FilteringList;
