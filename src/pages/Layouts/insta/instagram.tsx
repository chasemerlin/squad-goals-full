/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent, IonTitle, IonImg, IonItem, IonAvatar, IonLabel, IonText, IonIcon, IonGrid, IonFooter } from '@ionic/react';
import instaJson from './data';
import { chatbox, heartOutline, share, ellipsisVertical } from 'ionicons/icons';
import './insta.css';
import SegmentContainer from '../insta-tabs/tabs';
import InstaProfile from './InstaProfile';

class Instagram extends Component {
  state: any
  constructor(props: any) {
    super(props);
    this.state = {
      segmentValue: 'home'
    };
  }
  segmentChange = (value: any) => {
    this.setState({
      segmentValue: value
    })
    console.log(value);
  }
  render() {
    const { segmentValue } = this.state
    return (
      <>
        {/* <Menu /> */}
        <IonPage id="main">
          <IonHeader>
            <IonToolbar color='primary'>
              <IonButtons slot="start">
                <IonMenuButton autoHide={false} />
              </IonButtons>
              <IonTitle slot="start">Instagram Layout</IonTitle>
            </IonToolbar>
          </IonHeader >
          <IonContent>
            {segmentValue === 'home' &&
              <div>
                {instaJson.instaData.map((item, index) => (
                  <IonGrid className="ion-no-padding" key={index}>
                    <IonItem lines="none">
                      <IonAvatar slot="start">
                        <IonImg src={item.avatar} className="avatar"></IonImg>
                      </IonAvatar>
                      <IonLabel>
                        <IonText color="dark">
                          <h3>{item.title}</h3>
                        </IonText>
                        <p>{item.subtitle}</p>
                      </IonLabel>
                      <IonIcon slot="end" icon={ellipsisVertical}>

                      </IonIcon>
                    </IonItem>
                    <div className="block-image">
                      <IonImg src={item.img}></IonImg>
                    </div>
                    <div className="block-icons">
                      <IonIcon slot="icon" icon={heartOutline} className='isonStyles'></IonIcon>
                      <IonIcon slot="icon" icon={chatbox} className='isonStyles'></IonIcon>
                      <IonIcon slot="icon" icon={share} className='isonStyles'></IonIcon>
                    </div>
                    <div className="block-desc">
                      <IonText className="likesInsta">{item.likes}</IonText>
                      <div>
                        <IonText>{item.desc}</IonText>
                      </div>
                    </div>
                  </IonGrid>
                ))
                }
              </div>
            }

            {segmentValue === 'notification' &&
              <div>
                {instaJson.instaData.map((item, index) => (
                  <IonGrid className="ion-no-padding" key={index}>
                    <IonItem lines="none">
                      <IonAvatar slot="start">
                        <IonImg src={item.avatar}></IonImg>
                      </IonAvatar>
                      <IonLabel>
                        <IonText color="dark">
                          <h3>{item.title}</h3>
                        </IonText>
                        <p>{item.subtitle}</p>
                      </IonLabel>
                      <IonIcon slot="end" icon={ellipsisVertical}>

                      </IonIcon>
                    </IonItem>
                    <div className="block-image">
                      <IonImg src={item.img}></IonImg>
                    </div>
                    <div className="block-icons">
                      <IonIcon slot="icon" icon={heartOutline} className='isonStyles'></IonIcon>
                      <IonIcon slot="icon" icon={chatbox} className='isonStyles'></IonIcon>
                      <IonIcon slot="icon" icon={share} className='isonStyles'></IonIcon>
                    </div>
                    <div className="block-desc">
                      <IonText className="likesInsta">{item.likes}</IonText>
                      <div>
                        <IonText>{item.desc}</IonText>
                      </div>
                    </div>
                  </IonGrid>
                ))
                }
              </div>
            }

            {segmentValue === 'profile' &&
              <div>
                <InstaProfile />
              </div>
            }
          </IonContent>
          <IonFooter>
            <IonToolbar className="insta-footer">
              <SegmentContainer segment={segmentValue}
                segmentChange={(value: any) => this.segmentChange(value)}
              />
            </IonToolbar>
          </IonFooter>
        </IonPage>
      </>
    );
  }
}

export default Instagram;