/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import { AdOptions, AdSize, AdPosition } from 'capacitor-admob';
const { AdMob, Toast } = Plugins;

class AdMobContainer extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
        AdMob.initialize('ca-app-pub-3940256099942544~3347511713');

    }
    showBanner() {
        const options: AdOptions = {
            adId: 'ca-app-pub-3940256099942544/6300978111',
            adSize: AdSize.SMART_BANNER,
            position: AdPosition.BOTTOM_CENTER,
            hasTabBar: false,  // make it true if you have TabBar Layout.
            tabBarHeight: 56  // you can assign custom margin in pixel default is 56
        };

        // Show Banner Ad
        AdMob.showBanner(options)
            .then(
                async (value: any) => {
                    console.log(value);  // true
                    await Toast.show({
                        text: 'Showing Banner AD.'
                    })
                },
                (error: any) => {
                    console.error(error); // show error
                }
            );


        // Subscibe Banner Event Listener
        AdMob.addListener('onAdLoaded', async (info: boolean) => {
            console.log('Showing Banner AD.');
        });
    }


    // This Banner AD have bottom margin to avoid TabBar Overlaping for TabBar 
    showTabBarBanner() {
        const options: AdOptions = {
            adId: 'ca-app-pub-3940256099942544/6300978111',
            adSize: AdSize.SMART_BANNER,
            position: AdPosition.BOTTOM_CENTER,
            hasTabBar: true,  // make it true if you have TabBar Layout.
            tabBarHeight: 56  // you can assign custom margin in pixel default is 56
        };

        // Show Banner Ad
        AdMob.showBanner(options)
            .then(
                async (value: any) => {
                    console.log(value);  // true
                    await Toast.show({
                        text: 'Showing Banner AD.'
                    })
                },
                (error: any) => {
                    console.error(error); // show error
                }
            );


        // Subscibe Banner Event Listener
        AdMob.addListener('onAdLoaded', async (info: boolean) => {
            console.log('Showing TabBar Banner AD.');
        });
    }


    hideBanner() {

        AdMob.hideBanner().then(
            async (value: any) => {
                await Toast.show({
                    text: 'Banner AD Hidden'
                })
                console.log(value);  // true
            },
            (error: any) => {
                console.error(error); // show error
            }
        );
    }



    resumeBanner() {
        // Resume the banner, show it after hide

        AdMob.resumeBanner().then(
            (value: any) => {
                console.log(value);  // true
            },
            (error: any) => {
                console.error(error); // show error
            }
        );
    }


    removeBanner() {
        // Destroy the banner, remove it from screen.

        AdMob.removeBanner().then(
            (value: any) => {
                console.log(value);  // true
            },
            (error: any) => {
                console.error(error); // show error
            }
        );
    }


    loadInterstitial() {
        const options: AdOptions = {
            adId: 'ca-app-pub-3940256099942544/1033173712',
            autoShow: false
        }
        AdMob.prepareInterstitial(options)
            .then(
                async (value: any) => {
                    if (value) {
                        await Toast.show({
                            text: 'Interstitial AD Loaded'
                        });
                    }
                    console.log(value);  // true
                },
                (error: any) => {
                    console.error(error); // show error
                }
            );
    }


    showInterstitial() {
        AdMob.showInterstitial().then(
            (value: any) => {
                console.log(value);  // true
            },
            (error: any) => {
                console.error(error); // show error
            }
        );
    }



    loadInterstitialVideo() {
        const options: AdOptions = {
            adId: 'ca-app-pub-3940256099942544/8691691433',
            autoShow: false
        }
        AdMob.prepareInterstitial(options)
            .then(
                async (value: any) => {

                    if (value) {
                        await Toast.show({
                            text: 'Interstitial AD Loaded'
                        });
                    }

                    console.log(value);  // true
                },
                (error: any) => {
                    console.error(error); // show error
                }
            );
    }


    showInterstitialVideo() {
        AdMob.showInterstitial().then(
            (value: any) => {
                console.log(value);  // true
            },
            (error: any) => {
                console.error(error); // show error
            }
        );
    }



    prepareRewardVideo() {
        const options: AdOptions = {
            adId: 'ca-app-pub-3940256099942544/5224354917'
        }
        // Prepare ReWardVideo
        AdMob.prepareRewardVideoAd(options)
            .then(
                async (value: any) => {
                    if (value) {
                        await Toast.show({
                            text: 'Reward Video AD Loaded'
                        });
                    }
                    console.log(value);  // true
                },
                (error: any) => {
                    console.error(error); // show error
                }
            );
    }



    showRewardVideo() {
        // Show a RewardVideo AD

        AdMob.showRewardVideoAd().then(
            (value: any) => {
                console.log(value);  // true
            },
            (error: any) => {
                console.error(error); // show error
            }
        );
    }
    render() {
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
                            <IonTitle slot="start" >AdMob</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>

                        <IonGrid>
                            <IonRow>
                                <IonCol size="12">
                                    <h1>Banner</h1>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="12">
                                    <IonButton color="success" onClick={this.showBanner}>Show Banner</IonButton>
                                    <IonButton color="secondary" onClick={this.showTabBarBanner}>Show TabBar Banner</IonButton>
                                    <IonButton color="warning" onClick={this.hideBanner}>Hide Banner</IonButton>
                                    <IonButton color="tertiary" onClick={this.resumeBanner} > Resume Banner</IonButton>
                                    <IonButton color="danger" onClick={this.removeBanner}>Remove Banner</IonButton>
                                </IonCol>
                            </IonRow >


                            <IonRow>
                                <IonCol size="12">
                                    <h1>Interstitial</h1>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="12">
                                    <IonButton color="tertiary" onClick={this.loadInterstitial} > Load Intertitial Ad</IonButton>
                                    <IonButton color="success" onClick={this.showInterstitial}> Show Interstitial Ad</IonButton>
                                    <IonButton color="tertiary" onClick={this.loadInterstitialVideo} > Load Interstitial Video</IonButton>
                                    <IonButton color="success" onClick={this.showInterstitialVideo} > Show Interstitial Video</IonButton>
                                </IonCol>
                            </IonRow >


                            <IonRow>
                                <IonCol size="12">
                                    <h1>Reward</h1>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="12">
                                    <IonButton color="tertiary" onClick={this.prepareRewardVideo}> Prepare Reward Ad</IonButton>
                                    <IonButton color="success" onClick={this.showRewardVideo}> Show Reward Ad</IonButton>
                                </IonCol>
                            </IonRow >

                        </IonGrid >

                    </IonContent >
                </IonPage >
            </>
        );
    }
}

export default AdMobContainer;