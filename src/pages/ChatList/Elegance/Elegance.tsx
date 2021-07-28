/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonApp, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent, IonList, IonItem, IonAvatar, IonIcon, IonText, IonBadge, IonImg, IonTitle } from '@ionic/react';
import { ellipsisVertical, add, people, mic } from 'ionicons/icons';
import ChatListData from '../ChatListDataRose';
import './Elegance.css';
class Elegance extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                {/* <Menu /> */}
                <IonApp id="main">
                    <IonHeader className='contentBg_elegance'>
                        <IonToolbar className='contentBg_elegance'>
                            <IonButtons slot="start">
                                <IonMenuButton menu="start" color="dark"></IonMenuButton>
                            </IonButtons>
                            <IonTitle color="dark" slot="start">Elegance</IonTitle>
                            <IonButtons slot="end">
                                <IonIcon icon={ellipsisVertical} size="small" className="fontSize"></IonIcon>
                            </IonButtons>
                            <IonButtons slot="end" className="ion-padding-start">
                                <IonIcon icon={add} className="fontSize"></IonIcon>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent>
                        <IonList>
                            {ChatListData.chatData.map((chat, index) => {
                                return (
                                    <IonItem lines="none" key={index}>
                                        <div className="borderBottomLine"></div>
                                        <div className="listSection">
                                            <div className="UserimgSection">
                                                <IonAvatar className="chatImage" slot="start">
                                                    <IonImg src={chat.image} className='elegentImage'></IonImg>
                                                    <span className="onlineOffline_icon" style={{ backgroundColor: (chat.status === 'online' ? '#4cd137' : '#c23616') }}></span>
                                                </IonAvatar>
                                            </div>
                                            <div className="usernameSection ion-padding-start">
                                                <h5 className='h5Elegance'>
                                                    {chat.group &&
                                                        <IonIcon icon={people} color="medium"></IonIcon>
                                                    }
                                                    {chat.broadcast &&
                                                        <IonIcon icon={mic} color="medium"></IonIcon>
                                                    }
                                                    {chat.name}
                                                </h5>
                                                <p className="descTextElegent ion-no-margin">{chat.description}</p>
                                            </div>
                                        </div>
                                        <div slot="end" className="lastSection">
                                            {chat.sendTime &&
                                                <IonText className="sendTime" color="medium">{chat.sendTime} </IonText>
                                            }
                                            {chat.badge &&
                                                <IonBadge slot="end" className="userBadge">  {chat.badge}
                                                </IonBadge >
                                            }
                                            {chat.time &&
                                                <IonText slot="end" className="sendTime" color="medium" > {chat.time}
                                                </IonText>
                                            }
                                        </div>
                                    </IonItem>
                                )
                            })

                            }

                        </IonList>
                    </IonContent>
                </IonApp>
            </>
        );
    }
}

export default Elegance;