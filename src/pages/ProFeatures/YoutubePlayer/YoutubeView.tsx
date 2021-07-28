/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React from 'react';
import './YoutubePlayerStyles.css'
import {
    IonPage,
    IonContent,
    IonCard,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonButton,
    IonItem,
    IonList,
    IonText,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonListHeader,
    IonCardContent
} from '@ionic/react';
const YoutubeView = (props: any) => {
    const { youtubeData, getYoutubeData, youtubeDataReceived, playThisVideo, videoId } = props
    console.log('you', youtubeData);

    return (
        <>
            {/* <Menu /> */}
            <IonPage id='main'>
                <IonHeader >
                    <IonToolbar color='dark'>
                        <IonButtons slot='start'>
                            <IonMenuButton ></IonMenuButton>
                        </IonButtons>
                        <IonTitle slot="start">YouTube Player</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {videoId && videoId !== '' && <IonItem className="player-item">
                        <div id="youtube-player"></div>
                    </IonItem>}
                    <IonCard>
                        <IonCardContent>
                            This page loads videos and other information from a given YouTube Playlist.
                            Also, a video player plays these YouTube videos within the page, or you can go FullScreen.
                        </IonCardContent>
                    </IonCard>
                    {youtubeDataReceived &&
                        <IonList>
                            <IonListHeader>
                                <IonLabel>Playlist</IonLabel>
                            </IonListHeader>
                            {youtubeData.map((data: any) => {
                                const imageUrl = data.snippet.thumbnails.high.url;
                                const videoId = data.id.videoId
                                return (
                                    <IonItem key={data.id.videoId} onClick={() => playThisVideo(videoId)}>
                                        <IonThumbnail slot='start'>
                                            <IonImg src={imageUrl}></IonImg>
                                        </IonThumbnail>
                                        <IonLabel className="detail-label">
                                            <IonText color='dark'>{data.snippet.title}</IonText>
                                            <p>{data.snippet.description}</p>
                                        </IonLabel>

                                    </IonItem>
                                )

                            })
                            }
                        </IonList>
                    }

                    {!youtubeDataReceived && <div className='youtubeButton ion-margin-top'>
                        <IonButton expand="full" onClick={getYoutubeData}>Click for GoT PlayList</IonButton>
                    </div>}
                </IonContent>
            </IonPage>
        </>
    );
}


export default YoutubeView;