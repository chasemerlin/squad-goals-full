/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonSegment, IonSegmentButton, IonIcon } from '@ionic/react';
import { home, notifications, person } from 'ionicons/icons';
interface MyProps {
  segmentChange: any,
  segment: any
}
interface MyState {
  value: string
}
class SegmentContainer extends Component<MyProps, MyState> {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { segmentChange, segment } = this.props
    return (
      <IonSegment color="primary" value={segment} onIonChange={(e) => segmentChange(e.detail.value)} className='instasegments'>
        <IonSegmentButton value='home'  >
          <IonIcon icon={home} />
        </IonSegmentButton>
        <IonSegmentButton value='notification'>
          <IonIcon icon={notifications} />
        </IonSegmentButton>
        <IonSegmentButton value='profile'>
          <IonIcon icon={person} />
        </IonSegmentButton>
      </IonSegment>
    );
  }
}

export default SegmentContainer;

