/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React from 'react';
import { IonGrid, IonItem, IonAvatar, IonImg, IonLabel, IonText, IonIcon } from '@ionic/react';
import { chatbox, heartOutline, share, ellipsisVertical } from 'ionicons/icons';
import instaJson from '../insta/data';
import './tabs.css';
const InstaCards = () => {
    return (
        // <IonContent>
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
        // </IonContent>
    )

}
export default InstaCards;