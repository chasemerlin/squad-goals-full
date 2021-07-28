/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonButton, IonTitle, IonContent, IonRefresherContent, IonRefresher, IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { RefresherEventDetail } from '@ionic/core';
import { Capacitor } from '@capacitor/core';
const moreData = {
    result: [
        {
            "title": "This is sample data for content loading",
            "author": "Enappd",
            "image": "https://enappd.com/static/images/enappd-logo-blue.png"
        },
        {
            "title": "This is sample data for content loading",
            "author": "Fat Cat",
            "image": "https://apprecs.org/ios/images/app-icons/256/2b/1150943531.jpg"
        },
        {
            "title": "This is sample data for content loading",
            "author": "Enappd",
            "image": "https://www.smallworldfs.com/assets/images/swappbanner_logo.jpg"
        },
        {
            "title": "This is sample data for content loading",
            "author": "Cute Cat",
            "image": "https://a.wattpad.com/useravatar/CuTe_Anime_Kyla.256.293144.jpg"
        }
    ]
}
class PullToRefresh extends Component {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            showToast1: true,
            newData: null,
            initialData: [{
                'title': 'Burt Bear',
                'author': 'Enappd'
            },
            {
                'title': 'Isabella Iguana',
                'author': 'Fat Cat'
            },
            {
                'title': 'Donald Duck',
                'author': 'Enappd'
            },
            {
                'title': 'Lionel Lion',
                'author': 'Cute Cat'
            }],
            fullData: [{
                'title': 'Burt Bear',
                'author': 'Enappd'
            },
            {
                'title': 'Isabella Iguana',
                'author': 'Fat Cat'
            },
            {
                'title': 'Donald Duck',
                'author': 'Enappd'
            },
            {
                'title': 'Lionel Lion',
                'author': 'Cute Cat'
            }],
        };
    }

    resetList = () => {
        this.setState({
            fullData: Object.assign([], this.state.initialData)
        })
    }

    getApiResponse = async () => {
        if (!(Capacitor.platform === 'hybrid') && (Capacitor.platform === 'android')) {
            this.setState({
                newData: moreData.result
            })
        }
        else {
            // Use https URL when using on devices
            const my_url = await fetch('http://www.mocky.io/v2/5c9215a73200005d006bccee?mocky-delay=5000ms');
            let JsonResponse = my_url.json();
            JsonResponse.then((result) => {
                this.setState({
                    newData: result.result
                })
                console.log('result', this.state.newData)
            });
        }
    }

    doRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
        console.log('Begin async operation');
        await this.getApiResponse();

        setTimeout(() => {
            const { fullData, newData } = this.state
            this.setState({ fullData: [...newData, ...fullData] })
            event.detail.complete();

        }, 1000);
    }
    render() {
        const { fullData } = this.state

        return (
            <>
                {/* <Menu /> */}
                <IonPage id='main'>
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonButtons slot="start">
                                <IonMenuButton menu="start"></IonMenuButton>
                            </IonButtons>
                            <IonTitle slot="start">Pull to refresh</IonTitle>
                            <IonButtons slot="end">
                                <IonButton fill="clear" onClick={this.resetList}>Reset</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>

                        <IonRefresher slot="fixed" onIonRefresh={this.doRefresh}>
                            <IonRefresherContent
                                pullingIcon="arrow-dropdown"
                                pullingText="Pull to refresh"
                                refreshingSpinner="circles"
                                refreshingText="Refreshing...">
                            </IonRefresherContent>
                        </IonRefresher>
                        <IonList>
                            {fullData.map((item: any, index: any) => {
                                return (
                                    <IonItem key={index}>
                                        <IonIcon slot="start" icon={logoIonic}></IonIcon>
                                        {item.title && item.author &&
                                            < IonLabel >
                                                <h2> {item.title}</h2>
                                                <p> {item.author}</p>
                                            </IonLabel>
                                        }

                                    </IonItem>
                                )
                            })
                            }

                        </IonList>


                    </IonContent >
                </IonPage >
            </>
        );
    }
}

export default PullToRefresh;