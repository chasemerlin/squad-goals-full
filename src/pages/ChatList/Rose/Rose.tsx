/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonContent, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonSearchbar, IonHeader, IonSegmentButton, IonText, IonSegment, IonItemSliding, IonItem, IonAvatar, IonImg, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonList } from '@ionic/react';
import './Rose.css';
import { trash, pin } from 'ionicons/icons';
import CHAT_DATA from '../ChatListDataRose';
class RoseList extends Component {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      segmentTab: 'chat',
    };
  }
  segmentchangegValue = (value: any) => {
    console.log('value', value);
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
            <IonToolbar className='ROSE_TOOLBAR'>
              <IonButtons slot="start">
                <IonMenuButton color="light"></IonMenuButton>
              </IonButtons>
              <div slot="start" className="toolbarDiv">
                <IonTitle color="light" slot="start">
                  Contacts
                </IonTitle>
              </div>
              <div slot="end" className="android-only">
                <IonSearchbar className='RoseSearchbar' mode="ios" placeholder="Search your friend"></IonSearchbar>
              </div>
            </IonToolbar>
            <IonToolbar className='segment_toolbarRose'>
              <IonSegment className='ROSE_SEGMENT' mode="md" value={segmentTab} onIonChange={(e) => this.segmentchangegValue(e.detail.value)}>

                <IonSegmentButton mode="md" value="chat" >
                  <div className="contentCenter">
                    <IonText slot='end' className='tab-title'>Friends</IonText>
                  </div>
                </IonSegmentButton>

                <IonSegmentButton mode="md" value="friends">
                  <div className="contentCenter">
                    <IonText className='tab-title' slot='end'>Following</IonText>
                  </div>
                </IonSegmentButton>

                <IonSegmentButton mode="md" value="group">
                  <div className="contentCenter">
                    <IonText className='tab-title' slot='end'>Follower</IonText>
                  </div>
                </IonSegmentButton>

              </IonSegment>
            </IonToolbar>
          </IonHeader>

          {segmentTab === 'chat' &&
            <IonContent>

              <IonList className="ion-no-padding">
                {CHAT_DATA.chatDataRose.map((chat, index: any) => {
                  return (
                    <div key={index}>
                      <IonItemSliding >
                        <IonItem>
                          <div className="ProfileAvatrRose" slot="start">
                            <IonAvatar className="chatImageRose">
                              <IonImg src={chat.image}></IonImg>
                            </IonAvatar>
                          </div>
                          <IonLabel className='ROSE_LABEL_HEIGHT'>
                            <div className="withcountRose">
                              <div className="nameAvatarRose">
                                <h2 className='nameAvatarRoseh2'>{chat.name}
                                </h2>
                              </div>
                              <div className="timeEndRose">
                                <IonText className='IonTextRose' slot="end" color="medium">{chat.time}</IonText>
                                {chat.count &&
                                  <IonAvatar className="chatCountRouse">{chat.count}</IonAvatar>
                                }
                              </div>
                            </div>
                            <p className="widthHalfRose">{chat.description}</p>
                            <div className="typeAnddistanceRose">
                              <IonIcon icon={pin} color="primary"></IonIcon>
                              <p color="medium" className="typeAnddistanceParaRose">{chat.distance}</p>
                              <IonImg src={chat.crown} className="crown"></IonImg>
                              <p className="typeAnddistanceParaRose">{chat.type}</p>
                            </div>
                          </IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                          <IonItemOption>
                            <div className="timeEnd">
                              <div className="chatCountRouseGray">
                                <IonIcon icon={trash} color="light"></IonIcon>
                              </div>
                            </div>
                          </IonItemOption>
                        </IonItemOptions>
                      </IonItemSliding>
                    </div >
                  )
                })

                }
              </IonList>
            </IonContent >

          }


          {segmentTab === 'friends' &&
            <IonContent>

              <IonList className="ion-no-padding">
                {CHAT_DATA.chatDataRose.map((chat, index: any) => {
                  return (
                    <div key={index}>
                      <IonItemSliding >
                        <IonItem>
                          <div className="ProfileAvatrRose" slot="start">
                            <IonAvatar className="chatImageRose">
                              <IonImg src={chat.image}></IonImg>
                            </IonAvatar>
                          </div>
                          <IonLabel className='ROSE_LABEL_HEIGHT'>
                            <div className="withcountRose">
                              <div className="nameAvatarRose">
                                <h2 className='nameAvatarRoseh2'>{chat.name}
                                </h2>
                              </div>
                              <div className="timeEndRose">
                                <IonText className='IonTextRose' slot="end" color="medium">{chat.time}</IonText>
                                {chat.count &&
                                  <IonAvatar className="chatCountRouse">{chat.count}</IonAvatar>
                                }
                              </div>
                            </div>
                            <p className="widthHalfRose">{chat.description}</p>
                            <div className="typeAnddistanceRose">
                              <IonIcon icon={pin} color="primary"></IonIcon>
                              <p color="medium" className="typeAnddistanceParaRose">{chat.distance}</p>
                              <IonImg src={chat.crown} className="crown"></IonImg>
                              <p className="typeAnddistanceParaRose">{chat.type}</p>
                            </div>
                          </IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                          <IonItemOption>
                            <div className="timeEnd">
                              <div className="chatCountRouseGray">
                                <IonIcon icon={trash}></IonIcon>
                              </div>
                            </div>
                          </IonItemOption>
                        </IonItemOptions>
                      </IonItemSliding>
                    </div >
                  )
                })

                }
              </IonList>
            </IonContent >
          }
          {segmentTab === 'group' &&
            <IonContent>

              <IonList className="ion-no-padding">
                {CHAT_DATA.chatDataRose.map((chat, index: any) => {
                  return (
                    <div key={index}>
                      <IonItemSliding >
                        <IonItem>
                          <div className="ProfileAvatrRose" slot="start">
                            <IonAvatar className="chatImageRose">
                              <IonImg src={chat.image}></IonImg>
                            </IonAvatar>
                          </div>
                          <IonLabel className='ROSE_LABEL_HEIGHT'>
                            <div className="withcountRose">
                              <div className="nameAvatarRose">
                                <h2 className='nameAvatarRoseh2'>{chat.name}
                                </h2>
                              </div>
                              <div className="timeEndRose">
                                <IonText className='IonTextRose' slot="end" color="medium">{chat.time}</IonText>
                                {chat.count &&
                                  <IonAvatar className="chatCountRouse">{chat.count}</IonAvatar>
                                }
                              </div>
                            </div>
                            <p className="widthHalfRose">{chat.description}</p>
                            <div className="typeAnddistanceRose">
                              <IonIcon icon={pin} color="primary"></IonIcon>
                              <p color="medium" className="typeAnddistanceParaRose">{chat.distance}</p>
                              <IonImg src={chat.crown} className="crown"></IonImg>
                              <p className="typeAnddistanceParaRose">{chat.type}</p>
                            </div>
                          </IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                          <IonItemOption>
                            <div className="timeEnd">
                              <div className="chatCountRouseGray">
                                <IonIcon icon={trash}></IonIcon>
                              </div>
                            </div>
                          </IonItemOption>
                        </IonItemOptions>
                      </IonItemSliding>
                    </div >
                  )
                })

                }
              </IonList>
            </IonContent >
          }

        </IonPage >
      </>
    );
  }
}

export default RoseList;