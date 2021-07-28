/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import {
  IonImg, IonIcon,
  IonContent,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonButton
} from '@ionic/react';
import instaJson from './data';
import { keypad, menu, people } from 'ionicons/icons';
import React, { Component } from 'react';
import './InstaProfile.css';
import enappd from '../../../assets/imgs/enappd.png';
import InstaCards from '../insta-tabs/InstagramCard';

class InstaProfile extends Component {
  state: any

  constructor(props: any) {
    super(props);
    this.state = {
      segmentValue: 'grid'
    };
  }
  segmentValue = (value: any) => {
    console.log(value);
    this.setState({
      segmentValue: value
    })
  }
  render() {
    const { segmentValue } = this.state
    return (
      <>
        <IonPage>
          <IonContent>
            <div className="profile-top">
              <div className="profile-pic">
                <IonImg src={enappd} className='imgProfile' />
              </div>
              <div className="profile-stats">
                <div className="stats">
                  <div className="stat">
                    <div className="number">
                      15
                    </div>
                    <div className="textProfile">
                      posts
                    </div>
                  </div>
                  <div className="stat">
                    <div className="number">
                      315
                  </div>
                    <div className="textProfile">
                      followersss
                  </div>
                  </div>
                  <div className="stat">
                    <div className="number">
                      150
                  </div>
                    <div className="textProfile">
                      following
                  </div>
                  </div>
                </div>
                <div className="edit-profile">
                  <IonButton fill="outline" expand="block" size="small" color="dark">Edit Profile</IonButton>
                </div>
              </div>

            </div>
            <IonSegment mode="md" className='ionsegmentProfile ' onIonChange={(e) => this.segmentValue(e.detail.value)}  >
              <IonSegmentButton value="grid" className='ion-segment-buttonProfile'>
                <IonIcon icon={keypad}></IonIcon>
              </IonSegmentButton>
              <IonSegmentButton value="list" className='ion-segment-buttonProfile'>
                <IonIcon icon={menu}></IonIcon>
              </IonSegmentButton>
              <IonSegmentButton value="tagged" className='ion-segment-buttonProfile'>
                <IonIcon icon={people}></IonIcon>
              </IonSegmentButton>
            </IonSegment>
            {segmentValue === 'grid' &&
              <div className="gallery-grid" id="grid">
                {instaJson.gridGallery.map((grids, index) => {
                  return (
                    // <div className="grid-item" key={index}>
                    <IonImg src={grids.img} className='imgProfileGrid' key={index} />
                    // </div>
                  )
                })
                }
              </div>
            }
            {segmentValue === 'list' &&

              <InstaCards />
            }
            {segmentValue === 'tagged' &&

              <div>
                {/* <app-instagram></app-instagram> */}
              </div >
            }
          </IonContent>
        </IonPage>
      </>
    );
  }
}



export default InstaProfile;
