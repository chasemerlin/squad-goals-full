/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonButton, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonListHeader, IonAvatar, IonThumbnail, IonSkeletonText, IonImg } from '@ionic/react';
import { call } from 'ionicons/icons';
import avatar from '../../../assets/chat/avatars/1.png';
import chatImg from '../../../assets/chat/chat/chat1.jpg';

class ContentLoaderSecond extends Component {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            dataShow: false,
            data: {
                'heading': 'Normal text',
                'para1': 'Lorem ipsum dolor sit amet, consectetur',
                'para2': 'adipiscing elit.'
            }

        };

    }
    componentDidMount() {
        console.log('ionViewWillEnter event fired');
        setTimeout(() => {
            this.setState({
                dataShow: true
            })
        }, 5000);
    }

    render() {
        const { data, dataShow } = this.state

        return (
            <>
                {/* <Menu /> */}
                <IonPage id='main'>
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonButtons slot="start">
                                <IonMenuButton menu="start"></IonMenuButton>
                            </IonButtons>
                            <IonTitle slot="start">Content Loader second</IonTitle>
                            <IonButtons slot="end">
                                <IonButton fill="clear"  >Reset</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {dataShow &&
                            <div>
                                <div className="ion-padding">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.
           </div>
                                <IonList>
                                    <IonListHeader><IonLabel>Data</IonLabel></IonListHeader>
                                    <IonItem>
                                        <IonAvatar slot="start">
                                            <IonImg src={avatar}></IonImg>
                                        </IonAvatar>
                                        <IonLabel>
                                            <h3>
                                                {data.heading}
                                            </h3>
                                            <p>
                                                {data.para1}
                                            </p>
                                            <p>
                                                {data.para2}
                                            </p>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <IonImg src={chatImg}> </IonImg>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h3>
                                                {data.heading}
                                            </h3>
                                            <p>
                                                {data.para1}
                                            </p>
                                            <p>
                                                {data.para2}
                                            </p>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={call} slot="start"></IonIcon>
                                        <IonLabel>
                                            <h3>
                                                {data.heading}
                                            </h3>
                                            <p>
                                                {data.para1}
                                            </p>
                                            <p>
                                                {data.para2}
                                            </p>
                                        </IonLabel>
                                    </IonItem>
                                </IonList>
                            </div>
                        }

                        {!dataShow &&
                            <div>
                                <div className="ion-padding custom-skeleton">
                                    <IonSkeletonText animated style={{ width: "60%" }}></IonSkeletonText>
                                    <IonSkeletonText animated></IonSkeletonText>
                                    <IonSkeletonText animated style={{ width: "88%" }}></IonSkeletonText>
                                    <IonSkeletonText animated style={{ width: "70%" }}></IonSkeletonText>
                                    <IonSkeletonText animated style={{ width: "60%" }}></IonSkeletonText>
                                </div>

                                <IonList>
                                    <IonListHeader>
                                        <IonSkeletonText animated style={{ width: "20%" }}></IonSkeletonText>
                                    </IonListHeader>
                                    <IonItem>
                                        <IonAvatar slot="start">
                                            <IonSkeletonText animated></IonSkeletonText>
                                        </IonAvatar>
                                        <IonLabel>
                                            <h3>
                                                <IonSkeletonText animated style={{ width: "50%" }}></IonSkeletonText>
                                            </h3>
                                            <p>
                                                <IonSkeletonText animated style={{ width: "80%" }}></IonSkeletonText>
                                            </p>
                                            <p>
                                                <IonSkeletonText animated style={{ width: "60%" }}></IonSkeletonText>
                                            </p>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <IonSkeletonText animated></IonSkeletonText>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h3>
                                                <IonSkeletonText animated style={{ width: "50%" }}></IonSkeletonText>
                                            </h3>
                                            <p>
                                                <IonSkeletonText animated style={{ width: "80%" }}></IonSkeletonText>
                                            </p>
                                            <p>
                                                <IonSkeletonText animated style={{ width: "60%" }}></IonSkeletonText>
                                            </p>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonSkeletonText animated style={{ width: "27%", height: '27' }} slot="start"></IonSkeletonText>
                                        <IonLabel>
                                            <h3>
                                                <IonSkeletonText animated style={{ width: "50%" }}></IonSkeletonText>
                                            </h3>
                                            <p>
                                                <IonSkeletonText animated style={{ width: "80%" }}></IonSkeletonText>
                                            </p>
                                            <p>
                                                <IonSkeletonText animated style={{ width: "60%" }}></IonSkeletonText>
                                            </p>
                                        </IonLabel>
                                    </IonItem>
                                </IonList>
                            </div>
                        }
                    </IonContent >
                </IonPage>
            </>
        );
    }
}

export default ContentLoaderSecond;