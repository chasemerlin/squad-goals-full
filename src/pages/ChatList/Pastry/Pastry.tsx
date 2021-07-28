/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonTitle, IonSearchbar, IonSegmentButton, IonSegment, IonText, IonContent, IonItem, IonAvatar, IonImg, IonLabel, IonList } from '@ionic/react';
import { add, chatbox, person, personCircle } from 'ionicons/icons';
import Pastry_Data from '../ChatListDataRose';
import './Pastry.css';
class Pastry extends Component {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            segmentTab: 'chat'
        };
    }
    segmentChanged = (value: any) => {
        console.log(value);
        this.setState({
            segmentTab: value
        })
    }
    render() {
        const { segmentTab } = this.state
        return (
            <>
                {/* <Menu /> */}
                <IonPage id='main'>
                    <IonHeader>
                        <IonToolbar className='ALlSAMECoLro ion-no-margin ion-no-padding'>
                            <IonButtons slot="start">
                                <IonMenuButton menu="start" color="light"></IonMenuButton>
                            </IonButtons>
                            <div className="plusClassPastry" slot="end">
                                <IonIcon icon={add} color="success"> </IonIcon>
                            </div>
                            <IonTitle color="light" slot="start">
                                Chat Pages
                             </IonTitle>
                        </IonToolbar>
                        <IonToolbar className='ALlSAMECoLro ion-no-margin ion-no-padding'>
                            <IonSearchbar mode="ios" placeholder="Search your friend" className='pastrySearch'></IonSearchbar>
                        </IonToolbar>
                        <IonToolbar className='ALlSAMECoLro ion-no-margin ion-no-padding segment-toolbar'>
                            <IonSegment className='SegmentPestry' mode="md" value={segmentTab} onIonChange={(e) => this.segmentChanged(e.detail.value)} scrollable>
                                <IonSegmentButton mode="md" value="chat" className='ionsegmentbuttonPastry'>
                                    <div className="contentCenterPastry">
                                        <IonIcon icon={chatbox} slot="start" className="padding_rightPastry tab-iconPastry"></IonIcon>
                                        <IonText slot='end' className='IonTextPastry'>chat</IonText>
                                    </div>
                                </IonSegmentButton>

                                <IonSegmentButton mode="md" value="friends" className='ionsegmentbuttonPastry'>
                                    <div className="contentCenterPastry">
                                        <IonIcon icon={person} slot="start" className="padding_rightPastry tab-iconPastry"></IonIcon>
                                        <IonText slot='end' className='IonTextPastry'>Friends</IonText>
                                    </div>
                                </IonSegmentButton>

                                <IonSegmentButton mode="md" value="group" className='ionsegmentbuttonPastry'>
                                    <div className="contentCenterPastry">
                                        <IonIcon icon={personCircle} slot="start" className="padding_rightPastry tab-iconPastry"></IonIcon>
                                        <IonText slot='end' className='IonTextPastry'>Group</IonText>
                                    </div>
                                </IonSegmentButton>
                            </IonSegment>
                        </IonToolbar>

                    </IonHeader>

                    {segmentTab === 'chat' &&
                        <IonContent className='PastryContent'>
                            <IonList className='ALlSAMECoLro ion-no-padding'>
                                {Pastry_Data.chatDataRose.map((chat, index) => {
                                    return (
                                        <IonItem key={index} className='ALlSAMECoLro'>
                                            <IonAvatar className="chatImagePastry" slot="start">
                                                <IonImg src={chat.image}></IonImg>
                                            </IonAvatar>
                                            <IonLabel>
                                                <div className="withcountPastry">
                                                    <div className="nameAvatarPastry">
                                                        <h2 color="light" className='nameAvatarH2'>{chat.name}
                                                        </h2>
                                                        {chat.count &&
                                                            <IonAvatar className="chatCountPastry">{chat.count}</IonAvatar>
                                                        }
                                                    </div>

                                                    <div className="timeEndPastry">
                                                        <IonText className='IonTextPastry' slot="end" color="light">{chat.time}</IonText>
                                                    </div>
                                                </div>
                                                <p className="widthHalfPastry">{chat.description}</p>
                                            </IonLabel>
                                        </IonItem>
                                    )
                                })

                                }

                            </IonList>
                        </IonContent>
                    }
                    {segmentTab === 'friends' &&
                        <IonContent className='PastryContent'>
                            <IonList className='ALlSAMECoLro ion-no-padding'>
                                {Pastry_Data.chatDataRose.map((chat, index) => {
                                    return (
                                        <IonItem key={index} className='ALlSAMECoLro '>
                                            <IonAvatar className="chatImagePastry" slot="start">
                                                <IonImg src={chat.image}></IonImg>
                                            </IonAvatar>
                                            <IonLabel>
                                                <div className="withcountPastry">
                                                    <div className="nameAvatarPastry">
                                                        <h2 color="light" className='nameAvatarH2'>{chat.name}
                                                        </h2>
                                                        {chat.count &&
                                                            <IonAvatar className="chatCountPastry">{chat.count}</IonAvatar>
                                                        }
                                                    </div>

                                                    <div className="timeEndPastry">
                                                        <IonText className='IonTextPastry' slot="end" color="light">{chat.time}</IonText>
                                                    </div>
                                                </div>
                                                <p className="widthHalfPastry">{chat.description}</p>
                                            </IonLabel>
                                        </IonItem>
                                    )
                                })

                                }

                            </IonList>
                        </IonContent>
                    }
                    {segmentTab === 'group' &&
                        <IonContent className='PastryContent'>
                            <IonList className='ALlSAMECoLro ion-no-padding'>
                                {Pastry_Data.chatDataRose.map((chat, index) => {
                                    return (
                                        <IonItem key={index} className='ALlSAMECoLro'>
                                            <IonAvatar className="chatImagePastry" slot="start">
                                                <IonImg src={chat.image}></IonImg>
                                            </IonAvatar>
                                            <IonLabel>
                                                <div className="withcountPastry">
                                                    <div className="nameAvatarPastry">
                                                        <h2 color="light" className='nameAvatarH2'>{chat.name}
                                                        </h2>
                                                        {chat.count &&
                                                            <IonAvatar className="chatCountPastry">{chat.count}</IonAvatar>
                                                        }
                                                    </div>

                                                    <div className="timeEndPastry">
                                                        <IonText className='IonTextPastry' slot="end" color="light">{chat.time}</IonText>
                                                    </div>
                                                </div>
                                                <p className="widthHalfPastry">{chat.description}</p>
                                            </IonLabel>
                                        </IonItem>
                                    )
                                })

                                }

                            </IonList>
                        </IonContent>
                    }

                </IonPage >
            </>
        );
    }
}

export default Pastry;