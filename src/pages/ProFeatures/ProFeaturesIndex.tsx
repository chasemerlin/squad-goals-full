/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import CameraContainer from './Camera/Camera';
import VideoContainer from './VideoPlayer/VideoContainer';
import VideoOnDevice from './VideoPlayerOnDevice/VideoContainer';
import SmsContainer from './SMS/SmsContainer';
import YoutubeContainer from './YoutubePlayer/YoutubeContainer';
import FusedLocContainer from './FuseLocation/FusedLocContainer';
import DownloaderContainer from './Downloader/DownloaderContainer';
import CopyclipboardContainer from './Clipboard/CopyclipboardContainer';
import ModalContainer from './Modal/Modal';
import SocialContainer from './SocialShare/SocialContainer';
import SweetContainer from './SweetAlerts/SweetContainer';
import AdMobContainer from './AdMob/AdMobContainer';
import LocalNotificationContainer from './LocalNotification/LocalNotificationContainer';
import GeoMap from './GeoLocation/GeoMap';
import FacebookContainer from './FacebookLogin/FacebookContainer';
import PushNotificationsContainer from './PushNotifications/PushNotifications';

class ProFeaturesIndes extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (

            [
                <Switch>
                    <Route exact path='/Pro/CameraContainer' component={CameraContainer} />
                    <Route exact path='/Pro/VideoPlayer' component={VideoContainer} />
                    <Route exact path='/Pro/VideoPlayerOnDevice' component={VideoOnDevice} />
                    <Route exact path='/Pro/SMS' component={SmsContainer} />
                    <Route exact path='/Pro/YoutubePlayer' component={YoutubeContainer} />
                    <Route exact path='/Pro/FusedLocation' component={FusedLocContainer} />
                    <Route exact path='/Pro/Downloader' component={DownloaderContainer} />
                    <Route exact path='/Pro/ClipBoard' component={CopyclipboardContainer} />
                    <Route exact path='/Pro/Modals' component={ModalContainer} />
                    <Route exact path='/Pro/SocialShare' component={SocialContainer} />
                    <Route exact path='/Pro/SweetAlerts' component={SweetContainer} />
                    <Route exact path='/Pro/AdMobs' component={AdMobContainer} />
                    <Route exact path='/Pro/LocNotification' component={LocalNotificationContainer} />
                    <Route exact path='/Pro/Geolocation' component={GeoMap} />
                    <Route exact path='/Pro/FbLogin' component={FacebookContainer} />
                    <Route exact path='/Pro/PushNotifications' component={PushNotificationsContainer} />
                </Switch>
            ]
        );
    }
}

export default ProFeaturesIndes;