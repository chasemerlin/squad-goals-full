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
    IonIcon,
    IonItem,
    IonLabel,
    IonImg,
    IonAvatar,
    IonButton,
    IonList,
} from '@ionic/react';
import './ExpandableList.css'

import { accordionLists } from '../../constants/List'
import { caretDown, caretUp } from 'ionicons/icons';

class ExpandableList extends Component {
    state: any = {}
    constructor(props: any) {
        super(props);

        this.state = {
            shownGroup: 0
        };
    }


    toggleGroup(group: any) {
        if (this.isGroupShown(group)) {
            this.setState({
                shownGroup: true
            })
        } else {
            this.setState({
                shownGroup: group
            })
        }
    };

    isGroupShown(group: any) {
        const {
            shownGroup
        } = this.state;
        return shownGroup === group;
    };
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
                            <IonTitle slot="start" className="title-ios" text-capitalize>Expandable List</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent>
                        <div className="ion-no-padding">
                            <IonList className="accordionList" lines="none">
                                {accordionLists.map((item: any, i: number) => (
                                    <IonLabel className='ion-no-padding LAbelHeightExpandable' key={i}>
                                        {/*[ngClass]="{active: isGroupShown(i)}" */}
                                        <IonButton expand="full" slot="start" onClick={() => this.toggleGroup(i)}>
                                            <span className="btn-title">{item.Name}</span>
                                            <IonIcon slot="end" className='endItem' icon={this.isGroupShown(i) ? `${caretDown}` : `${caretUp}`}></IonIcon>
                                        </IonButton>
                                        {item.children && this.isGroupShown(i) ? <IonList inset lines="none" className='accordionList ion-margin-top' >
                                            {item.children.map((child: any, index: number) => (
                                                <IonItem className="listItem" key={index}>
                                                    <IonList className="flex">
                                                        <IonAvatar className="avatarImgExpand">
                                                            <IonImg src={child.image}></IonImg>
                                                        </IonAvatar>
                                                        <div className="titleCard ion-padding-horizontal" >
                                                            <h4 className="black">
                                                                <b>{child.Name}</b>
                                                            </h4>
                                                            <h6 className="black"> {child.Equipment}</h6>
                                                            <p className="black"> {child.Set}</p>
                                                        </div>
                                                    </IonList>
                                                </IonItem>
                                            ))}
                                        </IonList> : null}
                                    </IonLabel>
                                ))}

                            </IonList>
                        </div>
                    </IonContent>
                </IonPage>
            </>
        );
    }
}

export default ExpandableList;
