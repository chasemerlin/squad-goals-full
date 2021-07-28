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
    IonToolbar,
    IonButtons,
    IonIcon,
    IonItem,
    IonLabel,
    IonButton,
    IonRow,
    IonCol,
    IonCard
} from '@ionic/react';
import './MovieTicket.css'
import { Link } from 'react-router-dom';
import StarWarsImage from '../../assets/star_wars.jpg'
import { document, card, closeCircle } from 'ionicons/icons';


class MovieTicket extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
        };
    }



    render() {
        const data = [
            {
                name: 'Star Wards',
                specification: 'Sci-Fi, Action',
                imageUrl: StarWarsImage,
                row1: [
                    {
                        'date': '24 Sep 2010',
                        'time': '19:30',
                        'duration': '1h 40min',
                    }
                ],
                row2: [
                    {
                        'salon': '03',
                        'row': 'D',
                        'seat': '11,12'
                    }
                ]
            }
        ]
        return (
            <IonPage id="main">
                <IonHeader className="header-css header-ios ios">
                    <IonToolbar className="header-css">
                        <Link style={{ textDecoration: 'none' }} to="/list-sliders/event-cards">
                            <IonButtons slot="end" className="flot-right">
                                <IonIcon slot="icon-only" color="light" icon={closeCircle} className="iconSize ion-icon-css"></IonIcon>
                            </IonButtons>
                        </Link>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen className="ion-content-css"
                    style={{
                        '--background': `linear-gradient(0deg,rgba(88, 87, 88, 0.84),rgba(152, 154, 162, 0.51)), url('${StarWarsImage}') fixed 0% 100%`
                    }}>
                    <div className="justifyCard">
                        {data.map((item: any, index) => (
                            <IonCard className="box" key={index}>
                                <img src={item.imageUrl} className="cardImage" alt="" />
                                <IonItem>
                                    <IonLabel className='movieCardHeight'>
                                        <h1 className="bold_font">{item.name}</h1>
                                        <p>{item.specification}</p>
                                    </IonLabel>
                                </IonItem>

                                <IonItem>
                                    {/* *ngFor="let row of item.row1" */}
                                    {item.row1.map((row: any, index: number) => (
                                        <IonRow className="rowWidth" key={index}>
                                            <IonCol size="4">
                                                <IonLabel>
                                                    <p>Date</p>
                                                    <h5 className="black">{row.date}</h5>
                                                </IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>
                                                    <p>Time</p>
                                                    <h5 className="black">{row.time}</h5>
                                                </IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>
                                                    <p>Duration</p>
                                                    <h5 className="black">{row.duration}</h5>
                                                </IonLabel>
                                            </IonCol>
                                        </IonRow>
                                    ))}
                                </IonItem>
                                <IonItem>
                                    {item.row2.map((row: any, index: number) => (
                                        <IonRow className="rowWidth" key={index}>
                                            <IonCol size="4">
                                                <IonLabel>
                                                    <p>salon</p>
                                                    <h5 className="black">{row.salon}</h5>
                                                </IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>
                                                    <p>Row</p>
                                                    <h5 className="black">{row.row}</h5>
                                                </IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>
                                                    <p>Seat(s)</p>
                                                    <h5 className="black">{row.seat}</h5>
                                                </IonLabel>
                                            </IonCol>
                                        </IonRow>
                                    ))}
                                </IonItem>
                                <div className="corderTop">
                                    <IonItem className="borderRadius dotted-border">
                                        <IonLabel slot="start" className="ButtonDiscount">
                                            <p className="total_css">Total</p>
                                            <h1>$28.58</h1>
                                        </IonLabel>
                                        <IonButton color="danger" size="small" slot="end" className="ButtonDiscount" fill="clear">
                                            <span className="ButtonDiscount">Enter a discount code</span>
                                        </IonButton>
                                    </IonItem>

                                    <IonItem className="buttonDiv">
                                        <IonButton color="danger" size="large" slot="start" className="invoice">
                                            <IonIcon icon={document} className="distance ion-icon-css"></IonIcon><span>Invoice</span>
                                        </IonButton>
                                        <IonButton color="danger" size="large" slot="end" className="card-ticket" >
                                            <IonIcon icon={card} className="distance ion-icon-css"></IonIcon><span>Card</span>
                                        </IonButton>
                                    </IonItem>
                                </div>
                            </IonCard>
                        ))}

                    </div>
                </IonContent>

            </IonPage >
        );
    }
}

export default MovieTicket;
