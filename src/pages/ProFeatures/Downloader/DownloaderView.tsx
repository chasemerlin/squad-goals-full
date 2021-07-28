/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React from 'react'
import './DownloadStyle.css';
import { IonPage, IonContent, IonHeader, IonToolbar, IonIcon, IonButtons, IonMenuButton, IonProgressBar, IonTitle, IonCard, IonCol, IonThumbnail, IonButton, IonText, IonGrid, IonRow } from '@ionic/react';
import download from '../../../assets/download.png';
import { checkmarkDoneCircleOutline } from 'ionicons/icons';

const DownloaderView = (props: any) => {
    const { setDownload, status, startDownload, pauseDownload, resumeDownload, cancelDownload, downloadedPath } = props

    return (

        <>
            {/* <Menu /> */}
            <IonPage id='main'>
                <IonHeader>
                    <IonToolbar color='dark'>
                        <IonButtons slot='start'>
                            <IonMenuButton ></IonMenuButton>
                        </IonButtons>
                        <IonButtons slot='end'></IonButtons>

                        <IonTitle slot="start">Capacitor Downloader</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonCard className='cardContent'>
                        <IonThumbnail className='copyAvatar'>
                            <img src={download} alt="" />
                        </IonThumbnail>

                        {/* {(deviceInfo !== null) &&
                            <IonItem>
                                <IonLabel>
                                    <p>appVersion: {deviceInfo.appVersion}</p>
                                    <p>batteryLevel: {deviceInfo.batteryLevel}</p>
                                    <p>isCharging: {deviceInfo.batteryLevel}</p>
                                    <p>isVirtual: {deviceInfo.isCharging}</p>
                                    <p>{deviceInfo.isVirtual}</p>
                                    <p>manufacturer: {deviceInfo.manufacturer}</p>
                                    <p>model: {deviceInfo.model}</p>
                                    <p>osVersion: {deviceInfo.osVersion}</p>
                                    <p>platform: {deviceInfo.platform}</p>
                                    <p>uuid: {deviceInfo.uuid}</p>
                                </IonLabel>

                            </IonItem>

                        } */}
                        <IonGrid className="downloadStatus">
                            <IonRow className="ion-margin-bottom">
                                <IonCol>
                                    <IonText className="title">Download Status</IonText>
                                </IonCol>
                            </IonRow>
                            {status === 'unset' &&
                                <>
                                    <IonRow>
                                        <IonCol >
                                            <IonText className="unset">Click 'Set Download' to set the download</IonText>
                                        </IonCol>
                                    </IonRow>
                                </>}
                            {status === 'pending' &&
                                <>
                                    <IonButton color="primary" fill="clear">DOWNLOAD IS SET</IonButton>
                                    <IonRow>
                                        <IonCol >
                                            <IonText className="start">Click 'Start Download' to start the download</IonText>
                                        </IonCol>
                                    </IonRow>
                                </>}
                            {status === 'downloading' &&
                                <>
                                    <IonProgressBar type="indeterminate" color="primary"></IonProgressBar>
                                    <IonRow>
                                        <IonCol >
                                            <IonText className="start">Downloading</IonText>
                                        </IonCol>
                                    </IonRow>
                                </>}
                            {status === 'paused' &&
                                <>
                                    <IonProgressBar color="medium"></IonProgressBar>
                                    <IonRow>
                                        <IonCol >
                                            <IonText className="start">Download Paused</IonText>
                                        </IonCol>
                                    </IonRow>
                                </>}
                            {status === 'canceled' &&
                                <>
                                    <IonProgressBar color="danger"></IonProgressBar>
                                    <IonRow>
                                        <IonCol >
                                            <IonButton color="danger" fill="clear">Download Canceled</IonButton>
                                        </IonCol>
                                    </IonRow>
                                </>}
                            {status === 'completed' &&
                                <>
                                    <IonIcon icon={checkmarkDoneCircleOutline} color='success' className="completed"></IonIcon>
                                    <IonRow>
                                        <IonCol >
                                            <IonButton color="success" fill="clear">Download Completed</IonButton>
                                        </IonCol>
                                    </IonRow>
                                </>}
                        </IonGrid>
                        {(downloadedPath !== null) &&
                            <IonText className='ion-text-wrap ion-padding'>Downloaded Path is: {downloadedPath}</IonText>

                        }
                        <IonButton className='ion-margin' onClick={setDownload} color='primary'>Set Download</IonButton>
                        <IonButton className='ion-margin' onClick={startDownload} color='success'>Start Download </IonButton>
                        <IonButton className='ion-margin' onClick={pauseDownload} color='secondary'>Pause Download </IonButton>
                        <IonButton className='ion-margin' onClick={resumeDownload} color='success'>Resume Download </IonButton>
                        <IonButton className='ion-margin' onClick={cancelDownload} color='danger'>Cancel Download</IonButton>
                    </IonCard>
                </IonContent>
            </IonPage>
        </>

    )
}
export default DownloaderView;