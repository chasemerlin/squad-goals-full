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
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonCardHeader,
    IonImg,
    IonRow,
    IonCol,
    IonCard,
    IonButton,
    IonCardContent
} from '@ionic/react';
import { Masonry } from '../../constants/Grids';
import './MasonryGrid.css';
const INITIAL_STATE = {
    leftArray: [],
    rightArray: []
};
class MasonryGrid extends Component {
    state: any = {};

    constructor(props: any) {
        super(props);

        this.state = {
            fullArray: Masonry,
            ...INITIAL_STATE
        };
    }

    componentDidMount() {
        this.prepareArrayForMasonry(this.state.fullArray);
    }

    shuffleFullArray = () => {
        const newArray = this.shuffle(Masonry);
        this.prepareArrayForMasonry(newArray);
    }

    shuffle(array: any) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    prepareArrayForMasonry(array: any) {
        let leftStackHeight = 0;
        let rightStackHeight = 0;
        let leftArray: any = [];
        let rightArray: any = [];
        let imageLoadPromises = array.map((item: any) => {
            return this.imgLoad(item);
        });
        let that = this;
        Promise.all(imageLoadPromises).then(function (images) {
            //images is array of image elements from above
            // do something here , they have all loaded
            console.log(images);
            images.forEach((image: any) => {
                if (leftStackHeight <= rightStackHeight) {
                    leftArray.push(image);
                    leftStackHeight = leftStackHeight + image.height * (window.innerWidth / 2) / image.width;
                }
                else {
                    rightArray.push(image);
                    rightStackHeight = rightStackHeight + image.height * (window.innerWidth / 2) / image.width;
                }
                console.log(' heights', leftStackHeight, rightStackHeight);
            })
            that.setState({
                leftArray: leftArray,
                rightArray: rightArray
            })
        }).catch(function (err) {
            console.log('One or more images did not load')
        });
    }

    imgLoad(item: any) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                console.log(img);
                let data = { image: item.image, height: img.height, width: img.width, title: item.title }
                resolve(data);
            }
            img.src = item.image;
            img.onerror = reject
        });
    }



    render() {
        const { leftArray, rightArray } = this.state;
        return (
            <>
                {/* <Menu /> */}
                <IonPage id="main">
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonButtons slot="start">
                                <IonMenuButton color="light"></IonMenuButton>
                            </IonButtons>
                            <IonTitle slot="start" className="title-ios" text-capitalize>Masonry Grid</IonTitle>
                            <IonButtons slot="end">
                                <IonButton fill="clear" onClick={this.shuffleFullArray}>Shuffle</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonCard>
                            <IonCardContent>
                                This Masonry functionality is achieved on a simple array of data. You can feed in any array,
                                and the logic will decide the best way to fit the data in two columns. You can extend the same on three columns as well.
                            </IonCardContent>
                        </IonCard>
                        <IonRow>
                            <IonCol size="6">
                                {leftArray.map((item: any, index: any) => (
                                    <IonCard className="card-css ion-no-margin" key={index}>
                                        <IonCardHeader className='customBackground'>
                                            <IonImg src={item.image}></IonImg>
                                            <p className="card-title">{item.title}</p>
                                        </IonCardHeader>
                                    </IonCard>
                                ))}
                            </IonCol>
                            <IonCol size="6">
                                {rightArray.map((item: any, index: any) => (
                                    <IonCard className="card-css ion-no-margin" key={index}>
                                        <IonCardHeader className='customBackground'>
                                            <IonImg src={item.image}></IonImg>
                                            <p className="card-title">{item.title}</p>
                                        </IonCardHeader>
                                    </IonCard>
                                ))}
                            </IonCol >
                        </IonRow >

                    </IonContent >

                </IonPage >
            </>
        );
    }
}

export default MasonryGrid;
