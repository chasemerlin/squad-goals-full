/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonItem, IonThumbnail, IonLabel, IonListHeader, IonAvatar, IonIcon, IonSkeletonText } from '@ionic/react';
import ContentLoader, { Facebook, Instagram, Code, List, BulletList } from "react-content-loader";

class ContentLoaders extends Component {

    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            data: false
        };
    }

    render() {
        const MyFacebookLoader = () => <Facebook backgroundColor="rgb(0,0,0)"
            foregroundColor="rgb(0,0,0)"
            backgroundOpacity={0.06}
            foregroundOpacity={0.12} />;
        const MyInstagramLoader = () => <Instagram backgroundColor="rgb(0,0,0)"
            foregroundColor="rgb(0,0,0)"
            backgroundOpacity={0.06}
            foregroundOpacity={0.12} />
        const MyCodeLoader = () => <Code backgroundColor="rgb(0,0,0)"
            foregroundColor="rgb(0,0,0)"
            backgroundOpacity={0.06}
            foregroundOpacity={0.12} />
        const MyListLoader = () => <List backgroundColor="rgb(0,0,0)"
            foregroundColor="rgb(0,0,0)"
            backgroundOpacity={0.06}
            foregroundOpacity={0.12} />
        const MyBulletListLoader = () => <BulletList backgroundColor="rgb(0,0,0)"
            foregroundColor="rgb(0,0,0)"
            backgroundOpacity={0.06}
            foregroundOpacity={0.12} />

        const { data } = this.state;

        // setTimeout(() => {
        //     setData({
        //         heading: 'Normal text',
        //         para1: 'Lorem ipsum dolor sit amet, consectetur',
        //         para2: 'adipiscing elit.'
        //     });
        // }, 5000);
        return (
            <>
                {/* <Menu /> */}
                <IonPage id='main'>
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonButtons slot="start">
                                <IonMenuButton color="light"></IonMenuButton>
                            </IonButtons>
                            <IonTitle slot="start">Custom Content Loaders</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent>
                        <IonList>
                            <IonListHeader color="medium">
                                <IonLabel>Instagram Content Loader</IonLabel>
                            </IonListHeader>
                            <div className='ion-padding'>
                                <MyInstagramLoader />
                            </div>
                        </IonList>
                        <IonList>
                            <IonListHeader color="medium">
                                <IonLabel>Facebook Content Loader</IonLabel>
                            </IonListHeader>
                            <div className='ion-padding'>
                                <MyFacebookLoader />
                            </div>
                        </IonList>
                        <IonList>
                            <IonListHeader color="medium">
                                <IonLabel>Code Content Loader</IonLabel>
                            </IonListHeader>
                            <div className='ion-padding'>
                                <MyCodeLoader />
                            </div>
                        </IonList>
                        <IonList>
                            <IonListHeader color="medium">
                                <IonLabel>List Content Loader</IonLabel>
                            </IonListHeader>
                            <div className='ion-padding'>
                                <MyListLoader />
                            </div>
                        </IonList>
                        <IonList>
                            <IonListHeader color="medium">
                                <IonLabel>BulletList Content Loader</IonLabel>
                            </IonListHeader>
                            <div className='ion-padding'>
                                <MyBulletListLoader />
                            </div>
                        </IonList>
                        <IonList>
                            <IonListHeader color="medium">
                                <IonLabel>Custom Style Content Loader</IonLabel>
                            </IonListHeader>
                            <div className='ion-padding'>
                                <ContentLoader
                                    height={140}
                                    speed={1}
                                    backgroundColor="rgb(0,0,0)"
                                    foregroundColor="rgb(0,0,0)"
                                    backgroundOpacity={0.06}
                                    foregroundOpacity={0.12}
                                >
                                    {/* Only SVG shapes */}
                                    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                                    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                                    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                                </ContentLoader>                            </div>
                        </IonList>
                        <IonList>
                            <IonListHeader color="medium">
                                <IonLabel>IonSkeletonText Content Loader</IonLabel>
                            </IonListHeader>
                            <div className='ion-padding'>
                                {data ? (
                                    <>
                                        <div className="ion-padding">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar
                                            arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt
                                            vehicula.
          </div>

                                        <IonList>
                                            <IonListHeader>
                                                <IonLabel>Data</IonLabel>
                                            </IonListHeader>
                                            <IonItem>
                                                <IonAvatar slot="start">
                                                    <img src="./avatar.svg" alt="" />
                                                </IonAvatar>
                                                <IonLabel>
                                                    <h3>{data.heading}</h3>
                                                    <p>{data.para1}</p>
                                                    <p>{data.para2}</p>
                                                </IonLabel>
                                            </IonItem>
                                            <IonItem>
                                                <IonThumbnail slot="start">
                                                    <img src="./thumbnail.svg" alt="" />
                                                </IonThumbnail>
                                                <IonLabel>
                                                    <h3>{data.heading}</h3>
                                                    <p>{data.para1}</p>
                                                    <p>{data.para2}</p>
                                                </IonLabel>
                                            </IonItem>
                                            <IonItem>
                                                <IonIcon name="call" slot="start" />
                                                <IonLabel>
                                                    <h3>{data.heading}</h3>
                                                    <p>{data.para1}</p>
                                                    <p>{data.para2}</p>
                                                </IonLabel>
                                            </IonItem>
                                        </IonList>
                                    </>
                                ) : (
                                        <>
                                            <div className="ion-padding custom-skeleton">
                                                <IonSkeletonText animated style={{ width: '60%' }} />
                                                <IonSkeletonText animated />
                                                <IonSkeletonText animated style={{ width: '88%' }} />
                                                <IonSkeletonText animated style={{ width: '70%' }} />
                                                <IonSkeletonText animated style={{ width: '60%' }} />
                                            </div>

                                            <IonList>
                                                <IonListHeader>
                                                    <IonSkeletonText animated style={{ width: '20%' }} />
                                                </IonListHeader>
                                                <IonItem>
                                                    <IonAvatar slot="start">
                                                        <IonSkeletonText animated />
                                                    </IonAvatar>
                                                    <IonLabel>
                                                        <h3>
                                                            <IonSkeletonText animated style={{ width: '50%' }} />
                                                        </h3>
                                                        <p>
                                                            <IonSkeletonText animated style={{ width: '80%' }} />
                                                        </p>
                                                        <p>
                                                            <IonSkeletonText animated style={{ width: '60%' }} />
                                                        </p>
                                                    </IonLabel>
                                                </IonItem>
                                                <IonItem>
                                                    <IonThumbnail slot="start">
                                                        <IonSkeletonText animated />
                                                    </IonThumbnail>
                                                    <IonLabel>
                                                        <h3>
                                                            <IonSkeletonText animated style={{ width: '50%' }} />
                                                        </h3>
                                                        <p>
                                                            <IonSkeletonText animated style={{ width: '80%' }} />
                                                        </p>
                                                        <p>
                                                            <IonSkeletonText animated style={{ width: '60%' }} />
                                                        </p>
                                                    </IonLabel>
                                                </IonItem>
                                                <IonItem>
                                                    <IonSkeletonText animated style={{ width: '27px', height: '27px' }} slot="start" />
                                                    <IonLabel>
                                                        <h3>
                                                            <IonSkeletonText animated style={{ width: '50%' }} />
                                                        </h3>
                                                        <p>
                                                            <IonSkeletonText animated style={{ width: '80%' }} />
                                                        </p>
                                                        <p>
                                                            <IonSkeletonText animated style={{ width: '60%' }} />
                                                        </p>
                                                    </IonLabel>
                                                </IonItem>
                                            </IonList>
                                        </>
                                    )}
                            </div>
                        </IonList>


                    </IonContent >
                </IonPage >
            </>
        );
    }
}

export default ContentLoaders;