/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonImg, IonTitle, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonAvatar, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { search, ellipsisVertical, chatboxOutline } from 'ionicons/icons';
import './Whatsapp.css';
import WhatsappJson from './WhatsappData';
class Whatsapp extends Component {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            title: true,
            segmentTab: 'Calls'
        };
    }
    toggleSearchTitle = () => {
        this.setState({
            title: !this.state.title
        })
    }
    segmentChanged = (value: any) => {
        this.setState({
            segmentTab: value
        })
    }
    render() {
        const { title, segmentTab } = this.state
        return (
            <>
                {/* <Menu /> */}
                <IonPage id='main'>
                    <IonHeader className='whatsappStyle'>
                        <IonToolbar className='whatsappStyle'>
                            <IonButtons slot="start">
                                <IonMenuButton color="light"></IonMenuButton>
                            </IonButtons>
                            <IonButtons slot="end">
                                <IonButton slot="icon-only" onClick={this.toggleSearchTitle}>
                                    <IonIcon icon={search} color="light" >
                                    </IonIcon>
                                </IonButton>

                                <IonButton slot="icon-only">
                                    <IonIcon icon={chatboxOutline} color="light">
                                    </IonIcon>
                                </IonButton>
                                <IonButton slot="icon-only">
                                    <IonIcon icon={ellipsisVertical} color="light">
                                    </IonIcon>
                                </IonButton>

                            </IonButtons>


                            {title &&
                                <IonTitle slot="start" color="light" > Classic</IonTitle>
                            }
                            {!title &&
                                <IonSearchbar mode="ios" placeholder="Search your friend" className='WhatsappSearchbar' ></IonSearchbar>
                            }

                        </IonToolbar>
                        <IonToolbar className='ion-no-magin ion-no-padding'>
                            <IonSegment mode="md" value={segmentTab} onIonChange={(e) => this.segmentChanged(e.detail.value)} className='whatsappStyle'>
                                <IonSegmentButton mode="md" value="Calls" className='ionSegmentButton'>
                                    <div className="contentCenter">
                                        <IonText slot='end' className="segment_Text">Calls</IonText>
                                    </div>
                                </IonSegmentButton>

                                <IonSegmentButton mode="md" value="Chats" className='ionSegmentButton'>
                                    <div className="contentCenter">
                                        <IonText slot='end' className="segment_Text">Chats<IonAvatar className="segmentCount">17</IonAvatar>
                                        </IonText>
                                    </div>
                                </IonSegmentButton>

                                <IonSegmentButton mode="md" value="group" className='ionSegmentButton'>
                                    <div className="contentCenter">
                                        <IonText slot='end' className="segment_Text">Contacts</IonText>
                                    </div>
                                </IonSegmentButton>
                            </IonSegment>
                        </IonToolbar >
                    </IonHeader >

                    {segmentTab === 'Chats' &&
                        <IonContent>
                            <IonList className="ion-no-padding">
                                {WhatsappJson.chatData.map((chat, index) => {
                                    return (
                                        <IonItem key={index}>
                                            <IonAvatar className="chatImage" slot="start">
                                                <IonImg src={chat.image}></IonImg>
                                            </IonAvatar>
                                            <IonLabel>
                                                <div className="withcount">
                                                    <div className="nameAvatar">
                                                        <h2 color="light">{chat.name}
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p className="widthHalf">{chat.description}</p>
                                            </IonLabel>
                                            <div slot="end" className="timeSlot">
                                                <div className="timeEnd">
                                                    {chat.time &&
                                                        <IonText slot="end" color="success" text-uppercase className='textWhatsapp'>{chat.time} </IonText>
                                                    }
                                                    {chat.past &&
                                                        <IonText slot="end" color="medium" className='textWhatsapp' >{chat.past}</IonText>
                                                    }
                                                </div>
                                                {chat.count &&
                                                    <IonAvatar className="chatCount">  {chat.count}
                                                    </IonAvatar >

                                                }
                                            </div >
                                        </IonItem>
                                    )
                                })

                                }

                            </IonList >
                        </IonContent>
                    }

                    {segmentTab === 'Calls' &&
                        <IonContent>

                            <IonList className="ion-no-padding"  >
                                {WhatsappJson.chatData.map((chat, index) => {
                                    return (
                                        <IonItem key={index}>
                                            <IonAvatar className="chatImage" slot="start">
                                                <IonImg src={chat.image}></IonImg>
                                            </IonAvatar>
                                            <IonLabel>
                                                <div className="withcount">
                                                    <div className="nameAvatar">
                                                        <h2 color="light">{chat.name}
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p className="widthHalf">{chat.call}</p>
                                            </IonLabel>
                                            <div slot="end" className="timeSlot">
                                                <div className="timeEnd">
                                                    {chat.video &&
                                                        <IonIcon className="videocam" icon={chat.video} mode="ios">{chat.count}</IonIcon>
                                                    }
                                                    {chat.phone &&
                                                        <IonIcon className="videocam" icon={chat.phone} mode="ios">{chat.count}</IonIcon>
                                                    }
                                                </div>
                                            </div >
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

export default Whatsapp;