/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonContent, IonText, IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonGrid, IonRow, IonCard, IonCol, IonButton, IonIcon, IonImg } from '@ionic/react';
import imageCam from '../../../assets/cameraimage.jpg';
import './Camera.css';
import { camera } from 'ionicons/icons';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;
const INITIAL_STATE = {
    image: ''
};
class CameraContainer extends Component {
    state: any = {};
    props: any = {};
    constructor(props: any) {
        super(props);
        this.props = props
        this.state = {
            ...INITIAL_STATE
        };
    }

    takePicture = async () => {
        console.log('state', this);

        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri,
            saveToGallery: true
        });
        // image.webPath will contain a path that can be set as an image src. 
        // You can access the original file using image.path, which can be 
        // passed to the Filesystem API to read the raw data of the image, 
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        var imageUrl = image.webPath;
        // Can be set to the src of an image now
        // imageElement.src = imageUrl;
        console.log('image', imageUrl);
        console.log('state', this);
        this.setState({
            image: imageUrl
        })
    }
    render() {
        const { image } = this.state;
        return (
            <>
                {/* <Menu /> */}
                <IonPage id="main">
                    <IonHeader >
                        <IonToolbar color="dark">
                            <IonButtons slot="start">
                                <IonMenuButton></IonMenuButton>
                            </IonButtons>
                            <IonTitle slot="start" className="title-ios ion-text-uppercase" >Camera</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent className='cameraContent'>
                        <IonGrid className='fullHeight'>
                            <IonRow className='fullHeight'>
                                <IonCol className='colStyle'>
                                    <IonCard className='cardStyle'>
                                        <IonImg src={image ? image : imageCam} className='cameraImage'></IonImg>
                                        <IonButton color="danger" className="camera-button" onClick={() => this.takePicture()} >
                                            <IonIcon icon={camera} slot="start" />
                                            <IonText>
                                                Click me to catch you !
                                            </IonText>
                                        </IonButton>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonContent >
                </IonPage >
            </>
        );
    }
}

export default CameraContainer;