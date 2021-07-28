/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React from 'react';
import GoogleMapReact from 'google-map-react';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonText,
    IonButton,
    IonItem,
    IonLabel,
    IonSpinner
} from '@ionic/react';
import './styles.css';
const AnyReactComponent = () => (
    <div style={{
        color: 'white',
        background: 'red',
        padding: '10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-80%, -100%)'
    }}>
        <div className="pointer">

        </div>

    </div>
);
const GeoMapView = (props: any) => {
    const { center, latitude, longitude, getGeoLocation, loading } = props

    console.log('geoloc lat lansssg', center, latitude, longitude);
    return (
        <>
            {/* <Menu /> */}
            <IonPage id='main'>
                <IonHeader>
                    <IonToolbar color='dark'>
                        <IonButtons slot='start'>
                            <IonMenuButton ></IonMenuButton>
                        </IonButtons>
                        <IonTitle slot="start">Map Geolocation</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {loading && <div className="full-content">
                        <IonSpinner name="lines" />
                    </div>}
                    {!loading && <div className="GEoMap">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'YOUR_MAP_API_KEY' }}
                            defaultCenter={center}
                            defaultZoom={16}
                        >
                            <AnyReactComponent />
                        </GoogleMapReact>

                    </div>}
                    <IonItem className='geoAbs'>
                        <IonLabel>
                            <IonText>lat={latitude}</IonText>
                            <IonText> lng={longitude}</IonText>
                        </IonLabel>
                    </IonItem>
                    <IonButton onClick={getGeoLocation} className='geoFooter'>Get Current Location</IonButton>

                </IonContent>

            </IonPage>
        </>

    )
}
export default GeoMapView