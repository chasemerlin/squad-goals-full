/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import React, { Component } from 'react';
import {
    IonMenu,
    IonHeader,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonIcon,
    IonImg
} from '@ionic/react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../components/Firebase/index';
import { compose } from 'recompose';
import { phonePortraitOutline, grid, image, easel, logoInstagram, images, menu, albums, fileTray, bonfire, funnel, film, star, flame, rainy, moon, apps, logoWhatsapp, list, logIn, chatbox, bulb, rose, brush, colorPalette, refreshCircle, settings, refresh, logOut, camera, logoYoutube, locate, download, share, alertCircleOutline, copyOutline, informationCircle, glasses, notificationsCircleOutline, notificationsOutline, logoFacebook } from 'ionicons/icons';
import { Capacitor } from '@capacitor/core';
import logo from '../../assets/logo-ionic-white.png';
import { Plugins } from '@capacitor/core';
import './Menu.css';

const { Modals } = Plugins;

class Menu extends Component {
    props: any = {}
    state: any;
    // screens:any;
    constructor(props: any) {
        super(props);
        this.props = props
        this.state = {
            screens: false,
            layouts: false,
            gridLayout: false,
            chatLists: false,
            addOns: false,
            chatScreens: false,
            proFeatures: false,
            cards: false
        }
    }
    logOutUser = () => {
        const { firebase, history } = this.props;
        firebase.doSignOut();
        history.push('/signin')
    }

    goToCameraPAge = () => {
        console.log('camera success');
    }

    reset() {
        this.setState({
            screens: false,
            layouts: false,
            gridLayout: false,
            chatLists: false,
            addOns: false,
            chatScreens: false,
            proFeatures: false,
            cards: false
        })
    }
    featureToggle(feature: any) {
        const currentValue = this.state[feature]
        this.setState({
            screens: false,
            layouts: false,
            gridLayout: false,
            chatLists: false,
            addOns: false,
            chatScreens: false,
            proFeatures: false,
            cards: false
        }, () => {
            this.setState({
                [feature]: !currentValue
            })
        })
    }
    openPage(link: string) {
        const { history } = this.props;
        if (Capacitor.platform === 'android' || Capacitor.platform === 'ios') {
            history.push(link)
        }
        else {
            this.showAlert('This feature works only in a device');
        }
    }
    async showAlert(msg: string) {
        await Modals.alert({
            title: 'Sorry',
            message: msg
        });

    }
    render() {
        const { layouts, screens, gridLayout, chatLists, addOns, chatScreens, proFeatures, cards } = this.state
        return (
            <IonMenu contentId="main" >
                <IonHeader className="head">
                    <div className="enappd-header">
                        <div className="logoImage">
                            <IonImg src={logo}></IonImg>
                        </div>
                        <div className="titleHeader">Ionic React Capacitor Full App</div>
                    </div>
                </IonHeader>
                <IonContent>
                    <IonList className="ion-margin-vertical">
                        <IonMenuToggle>
                            <IonItem button onClick={() => this.reset()} routerLink='/home' detail={false}>
                                <IonIcon slot="start" icon={flame} color='warning'></IonIcon>
                                <IonLabel mode='md'>Firebase</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonItem button onClick={() => this.featureToggle('proFeatures')} detail={true}>
                            <IonIcon slot="start" icon={apps} color='tertiary'></IonIcon>
                            <IonLabel mode='md'> Pro Features </IonLabel>
                        </IonItem>
                        {proFeatures &&
                            <IonList className='marginStart'>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/Pro/CameraContainer' detail={false}>
                                        <IonIcon slot="start" icon={camera} color='danger'></IonIcon>
                                        <IonLabel mode='md'>Camera</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                {Capacitor.platform === 'web' && <IonMenuToggle>
                                    <IonItem button routerLink='/Pro/VideoPlayer' detail={false}>
                                        <IonIcon slot="start" icon={film} color='primary'></IonIcon>
                                        <IonLabel mode='md'>Video Player</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>}
                                {Capacitor.platform !== 'web' && <IonMenuToggle>
                                    <IonItem button routerLink='/Pro/VideoPlayerOnDevice' detail={false}>
                                        <IonIcon slot="start" icon={film} color='primary'></IonIcon>
                                        <IonLabel mode='md'>Video Player</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>}
                                {/* <IonMenuToggle>
                                    <IonItem button routerLink='/Pro/SMS'>
                                        <IonIcon slot="start" icon={logoWhatsapp} color='success'></IonIcon>
                                        <IonLabel mode='md'>SMS</IonLabel>
                                    </IonItem>

                                </IonMenuToggle> */}
                                <IonMenuToggle>
                                    <IonItem button routerLink='/Pro/YoutubePlayer' detail={false}>
                                        <IonIcon slot="start" icon={logoYoutube} color='danger'></IonIcon>
                                        <IonLabel mode='md'>Play Youtube Playlist</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button onClick={() => this.openPage('/Pro/Downloader')} detail={false}>
                                        <IonIcon slot="start" icon={download} color='tertiary'></IonIcon>
                                        <IonLabel mode='md'>Downloader</IonLabel>
                                        <IonIcon slot="end" icon={phonePortraitOutline} color='medium'></IonIcon>
                                    </IonItem>

                                </IonMenuToggle>
                                {Capacitor.platform === 'android' &&
                                    <IonList>
                                        {/* <IonMenuToggle>
                                            <IonItem button routerLink='/Pro/FusedLocation' detail={false}>
                                                <IonIcon slot="start" icon={locate} color='tertiary'></IonIcon>
                                                <IonLabel mode='md'>Fused Location</IonLabel>
                                            </IonItem>
                                        </IonMenuToggle> */}

                                        <IonMenuToggle>
                                            <IonItem button routerLink='/Pro/AdMobs' detail={false}>
                                                <IonIcon slot="start" icon={glasses} color='primary'></IonIcon>
                                                <IonLabel mode='md'>AdMob</IonLabel>
                                            </IonItem>
                                        </IonMenuToggle>
                                    </IonList>
                                }
                                <IonMenuToggle>
                                    <IonItem button routerLink='/Pro/Geolocation' detail={false}>
                                        <IonIcon slot="start" icon={locate} color='tertiary'></IonIcon>
                                        <IonLabel mode='md'>Geolocation</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>

                                <IonMenuToggle>
                                    <IonItem button routerLink='/Pro/ClipBoard' detail={false}>
                                        <IonIcon slot="start" icon={copyOutline} color='warning'></IonIcon>
                                        <IonLabel mode='md'>Copy to Clipboard</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/Pro/Modals' detail={false}>
                                        <IonIcon slot="start" icon={alertCircleOutline} color='success'></IonIcon>
                                        <IonLabel mode='md'>Alerts</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/Pro/SocialShare' detail={false}>
                                        <IonIcon slot="start" icon={share} color='primary'></IonIcon>
                                        <IonLabel mode='md'>SocialShare</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/Pro/SweetAlerts' detail={false}>
                                        <IonIcon slot="start" icon={informationCircle} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Sweet Alerts</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>

                                <IonMenuToggle>
                                    <IonItem button onClick={() => this.openPage('/Pro/LocNotification')} detail={false}>
                                        <IonIcon slot="start" icon={notificationsCircleOutline} color='danger'></IonIcon>
                                        <IonLabel mode='md'>Local Notifications</IonLabel>
                                        <IonIcon slot="end" icon={phonePortraitOutline} color='medium'></IonIcon>
                                    </IonItem>
                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button onClick={() => this.openPage('/Pro/FbLogin')} detail={false}>
                                        <IonIcon slot="start" icon={logoFacebook} color='primary'></IonIcon>
                                        <IonLabel mode='md'>Facebook Login</IonLabel>
                                        <IonIcon slot="end" icon={phonePortraitOutline} color='medium'></IonIcon>
                                    </IonItem>
                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button onClick={() => this.openPage('/Pro/PushNotifications')} detail={false}>
                                        <IonIcon slot="start" icon={notificationsOutline} color='success'></IonIcon>
                                        <IonLabel mode='md'>Push Notifications</IonLabel>
                                        <IonIcon slot="end" icon={phonePortraitOutline} color='medium'></IonIcon>
                                    </IonItem>
                                </IonMenuToggle>
                            </IonList>
                        }
                        <IonItem button onClick={() => this.featureToggle('layouts')} detail={true}>
                            <IonIcon slot="start" icon={apps} color='tertiary'></IonIcon>
                            <IonLabel mode='md'> Layouts </IonLabel>
                        </IonItem>
                        {layouts &&
                            <IonList className='marginStart'>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/Layouts/instagram' detail={false}>
                                        <IonIcon slot="start" icon={logoInstagram} color='danger'></IonIcon>
                                        <IonLabel mode='md'>Instagram</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/Layouts/Netflix' detail={false}>
                                        <IonIcon slot="start" icon={film} color='primary'></IonIcon>
                                        <IonLabel mode='md'>Netflix</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/Layouts/Whatsapp' detail={false}>
                                        <IonIcon slot="start" icon={logoWhatsapp} color='success'></IonIcon>
                                        <IonLabel mode='md'>Whatsapp</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                            </IonList>
                        }
                        <IonItem button onClick={() => this.featureToggle('screens')} detail={true}>
                            <IonIcon slot="start" icon={logIn}></IonIcon>
                            <IonLabel mode='md'> Login & Signups </IonLabel>
                        </IonItem>

                        {screens &&
                            <IonList className='marginStart'>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/LoginSignUp/loginFirst' detail={false}>
                                        <IonIcon slot="start" icon={rainy} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Layout 1</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>

                                <IonMenuToggle>
                                    <IonItem button routerLink='/LoginSignUp/loginSecond' detail={false}>
                                        <IonIcon slot="start" icon={moon} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Layout 2</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/LoginSignUp/loginThird' detail={false}>
                                        <IonIcon slot="start" icon={flame} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Layout 3</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/LoginSignUp/loginFourth' detail={false}>
                                        <IonIcon slot="start" icon={star} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Layout 4</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                            </IonList>

                        }
                        <IonItem button onClick={() => this.featureToggle('gridLayout')} detail={true}>
                            <IonIcon slot="start" icon={list}></IonIcon>
                            <IonLabel mode='md'>Grid Layouts </IonLabel>
                        </IonItem>
                        {gridLayout &&
                            <IonList className='marginStart'>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/grids/shop-grid' detail={false}>
                                        <IonIcon slot="start" icon={grid} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Shop Grid</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/grids/square-grid' detail={false}>
                                        <IonIcon slot="start" icon={image} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Square Grid</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>

                                <IonMenuToggle>
                                    <IonItem button routerLink='/grids/full-grid' detail={false}>
                                        <IonIcon slot="start" icon={easel} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Full Grid</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/grids/masonry-grid' detail={false}>
                                        <IonIcon slot="start" icon={images} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Masonry Grid</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/grids/product-grid' detail={false}>
                                        <IonIcon slot="start" icon={grid} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Card Grid X3</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/grids/card-grid' detail={false}>
                                        <IonIcon slot="start" icon={grid} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Product Grid X2</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                            </IonList>
                        }
                        <IonItem button onClick={() => this.featureToggle('chatLists')} detail={true}>
                            <IonIcon slot="start" icon={chatbox}></IonIcon>
                            <IonLabel mode='md'>Chat Lists </IonLabel>
                        </IonItem>

                        {chatLists &&
                            <IonList className='marginStart'>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/ChatLists/Elegent' detail={false}>
                                        <IonIcon slot="start" icon={bulb} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Elegance</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/ChatLists/Rose' detail={false}>
                                        <IonIcon slot="start" icon={rose} color='danger'></IonIcon>
                                        <IonLabel mode='md'>Rose</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>

                                <IonMenuToggle>
                                    <IonItem button routerLink='/ChatLists/Pastry' detail={false}>
                                        <IonIcon slot="start" icon={colorPalette} color='warning'></IonIcon>
                                        <IonLabel mode='md'>Pastry</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/ChatLists/Artboard' detail={false}>
                                        <IonIcon slot="start" icon={brush} color='secondary'></IonIcon>
                                        <IonLabel mode='md'>Artboard</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>

                            </IonList>
                        }


                        <IonItem button onClick={() => this.featureToggle('chatScreens')} detail={true}>
                            <IonIcon slot="start" icon={chatbox} color='warning' mode="ios"></IonIcon>
                            <IonLabel mode='md'> Chat Screens </IonLabel>
                        </IonItem>
                        {chatScreens &&
                            <IonList className='marginStart'>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/chatScreenlist/chatlist1' detail={false}>
                                        <IonIcon slot="start" icon={chatbox}></IonIcon>
                                        <IonLabel mode='md'>Breeze</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/chatScreenlist/blockChatList' detail={false}>
                                        <IonIcon slot="start" icon={chatbox}></IonIcon>
                                        <IonLabel mode='md'>Blocks</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                            </IonList>}

                        <IonItem button onClick={() => this.featureToggle('addOns')} detail={true}>
                            <IonIcon slot="start" icon={settings}></IonIcon>
                            <IonLabel mode='md'>Addons </IonLabel>
                        </IonItem>
                        {addOns &&
                            <IonList className='marginStart'>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/AddOn/ContentLoader' detail={false}>
                                        <IonIcon slot="start" icon={refreshCircle} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Content Loader</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/AddOn/pullToRefresh' detail={false}>
                                        <IonIcon slot="start" icon={refresh} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Pull to refresh</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/AddOn/contentLoaderSecond' detail={false}>
                                        <IonIcon slot="start" icon={refreshCircle} color='dark'></IonIcon>
                                        <IonLabel mode='md'>Content Loader 2</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                            </IonList>
                        }
                        <IonItem button onClick={() => this.featureToggle('cards')} detail={true}>
                            <IonIcon slot="start" icon={list}></IonIcon>
                            <IonLabel mode='md'>Card Layouts </IonLabel>
                        </IonItem>
                        {cards &&
                            <IonList className='marginStart'>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/list-sliders/card-slider' detail={false}>
                                        <IonIcon slot="start" icon={images}></IonIcon>
                                        <IonLabel mode='md'>Card Slider</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/list-sliders/products-cards' detail={false}>
                                        <IonIcon slot="start" icon={menu}></IonIcon>
                                        <IonLabel mode='md'>Product Cards</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/list-sliders/large-cards' detail={false}>
                                        <IonIcon slot="start" icon={albums}></IonIcon>
                                        <IonLabel mode='md'>Large Cards</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/list-sliders/expandable-list' detail={false}>
                                        <IonIcon slot="start" icon={grid}></IonIcon>
                                        <IonLabel mode='md'>Expandable List</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/list-sliders/event-cards' detail={false}>
                                        <IonIcon slot="start" icon={fileTray}></IonIcon>
                                        <IonLabel mode='md'>Event Cards</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>
                                <IonMenuToggle>
                                    <IonItem button routerLink='/list-sliders/movie-ticket' detail={false}>
                                        <IonIcon slot="start" icon={bonfire}></IonIcon>
                                        <IonLabel mode='md'>Movie Ticket</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>
                            </IonList>}
                        <IonMenuToggle>
                            <IonItem button routerLink='/list-sliders/sliders' detail={false}>
                                <IonIcon slot="start" icon={film}></IonIcon>
                                <IonLabel mode='md'>Sliders</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem button routerLink='/list-sliders/filtering-list' detail={false}>
                                <IonIcon slot="start" icon={funnel}></IonIcon>
                                <IonLabel mode='md'>Filtering List</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem button onClick={this.logOutUser} detail={false}>
                                <IonIcon slot="start" icon={logOut} />
                                <IonLabel mode='md'>Logout</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>
        );
    }
}
export default compose(
    withRouter,
    withFirebase,
)(Menu);
