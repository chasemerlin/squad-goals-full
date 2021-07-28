/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React from 'react'
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonThumbnail, IonPage, IonRow, IonCol, IonContent, IonCard, IonInput, IonText, IonItem, IonLabel, IonButton, IonList, IonTitle, IonGrid } from '@ionic/react'
import copy from '../../../assets/copy.png';
import './CopyStyles.css';

const CopyClipboardView = (props: any) => {
    const { copyToClipboard, clipData, pasteFromClipboard, pastedText } = props
    return (
        <>
            {/* <Menu /> */}
            <IonPage id='main'>
                <IonHeader>
                    <IonToolbar color='dark'>
                        <IonButtons slot='start'>
                            <IonMenuButton ></IonMenuButton>
                        </IonButtons>
                        <IonTitle slot="start">Copy to Clipboard</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="content-medium-bg">
                    <IonCard className='cardContent'>
                        <IonThumbnail className='copyAvatar'>
                            <img src={copy} alt="" />
                        </IonThumbnail>
                        <IonList>
                            {clipData.map((data: any, index: any) => {
                                return (
                                    <IonItem key={data.buttonCode}>
                                        <IonLabel className="flex-label">{data.clipText}</IonLabel>
                                        <IonButton className='ion-margin' slot='end' onClick={() => copyToClipboard(data.buttonCode)} color={data.color}>{data.buttonCode}</IonButton>
                                    </IonItem>
                                )
                            })
                            }
                        </IonList>
                    </IonCard>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonText>Paste your copied text here</IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol >
                                <IonInput
                                    name="text"
                                    clearInput
                                    type="text"
                                    value={pastedText}
                                    placeholder="Paste"
                                    className="paste-input"
                                    clear-input="true"></IonInput>
                            </IonCol>
                            <IonCol size="3">
                                <IonButton onClick={() => pasteFromClipboard()}>Paste</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>

        </>
    )
}
export default CopyClipboardView;