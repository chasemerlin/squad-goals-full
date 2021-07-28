/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { Plugins } from '@capacitor/core';
// import { CapacitorVideoPlayer } from 'capacitor-video-player';
import * as WebVPPlugin from 'capacitor-video-player';
import { IonContent, IonModal, IonButton, IonPage, IonHeader, IonRow, IonIcon, IonList, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import './VideoStyles.css';
import { playOutline } from 'ionicons/icons';
import { FullImages } from '../../../constants/Grids'
const { CapacitorVideoPlayer, Device } = Plugins;

class VideoOnDevice extends Component {
    private _videoPlayer: any;
    private _url: string;
    private _handlerPlay: any;
    private _handlerPause: any;
    private _handlerEnded: any;
    private _handlerReady: any;
    private _handlerExit: any;
    private _handlerPlaying: any;
    private _first: boolean = false;
    private _apiTimer1: any;
    private _apiTimer2: any;
    private _apiTimer3: any;
    private _testApi: boolean = true;
    state: any
    constructor(props: any) {
        super(props);
        this.state = { showModal: false };
        this._url = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
    }
    async componentDidMount() {
        const info = await Device.getInfo();
        if (info.platform === "ios" || info.platform === "android") {
            this._videoPlayer = CapacitorVideoPlayer;
        } else {
            this._videoPlayer = WebVPPlugin.CapacitorVideoPlayer
        }
        // define the video url
        // add listeners to the plugin
        this._addListenersToPlayerPlugin();
    }
    private _addListenersToPlayerPlugin() {
        this._handlerPlay = this._videoPlayer.addListener('jeepCapVideoPlayerPlay', (data: any) => {
            console.log('Event jeepCapVideoPlayerPlay ', data);
        }, false);
        this._handlerPause = this._videoPlayer.addListener('jeepCapVideoPlayerPause', (data: any) => {
            console.log('Event jeepCapVideoPlayerPause ', data);
        }, false);
        this._handlerEnded = this._videoPlayer.addListener('jeepCapVideoPlayerEnded', async (data: any) => {
            console.log('Event jeepCapVideoPlayerEnded ', data);
            this.setState({
                showModal: false
            })
        }, false);
        this._handlerExit = this._videoPlayer.addListener('jeepCapVideoPlayerExit', async (data: any) => {
            console.log('Event jeepCapVideoPlayerExit ', data);
            this.setState({
                showModal: false
            })
        }, false);
        this._handlerReady = this._videoPlayer.addListener('jeepCapVideoPlayerReady', async (data: any) => {
            console.log('Event jeepCapVideoPlayerReady ', data)
        }, false);
        this._handlerPlaying = this._videoPlayer.addListener('jeepCapVideoPlayerPlaying', async (data: any) => {
            console.log('Event jeepCapVideoPlayerPlaying ', data)
        }, false);

    }
    playVideo() {
        this.setState({
            showModal: true
        }, async () => {
            setTimeout(() => {
                this.init();
            }, 500)
        })
    }
    async init() {
        const res: any = await this._videoPlayer.initPlayer({ mode: "fullscreen", url: this._url, playerId: "fullscreen", componentTag: "ion-modal" });
        console.log('result of init ', res)
    }

    render() {
        const { showModal } = this.state;
        const GridImages = FullImages.map((data, index: any) => {
            return (
                <IonRow key={index}>
                    <div className="imageDiv" style={{
                        backgroundImage: `linear-gradient(0deg,rgba(88, 87, 88, 0.3),rgba(94, 93, 94, 0.3)),url('${data.image}')`
                    }}>
                        <div className="play-button-div" onClick={() => this.playVideo()}>
                            <IonIcon slot="start" className="play-button" icon={playOutline} color='light'></IonIcon>
                        </div>
                    </div>
                </IonRow>
            )
        })
        return (
            <>
                {/* <Menu /> */}
                <IonPage id="main">
                    <IonHeader>
                        <IonToolbar color='dark'>
                            <IonButtons slot="start">
                                <IonButton>
                                    <IonMenuButton color='light'></IonMenuButton>
                                </IonButton>
                            </IonButtons>
                            <IonButtons slot='end'></IonButtons>

                            <IonTitle slot="start" className="ion-text-center">Capacitor VideoPlayer</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonModal isOpen={showModal} cssClass='modal-custom-class' >
                            <div id="fullscreen" slot="fixed">
                            </div>
                        </IonModal>
                        {/* <IonButton onClick={() => this.playVideo()}>Play Video</IonButton> */}
                        <IonList className="ion-no-padding">
                            {GridImages}
                        </IonList>
                    </IonContent >
                </IonPage >
            </>
        );
    }
}

export default VideoOnDevice;