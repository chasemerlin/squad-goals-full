/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonSegment, IonSegmentButton, IonContent, IonIcon, IonImg, IonButton, IonText, IonCard, IonLabel, IonList, IonListHeader, IonThumbnail, IonAvatar } from '@ionic/react';
import { add, play, download, share } from 'ionicons/icons';
import JsonData from './JsonData';
import './netflix.css';
import marvel from '../../../assets/Marvel.jpg';

class Netflix extends Component {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      segmentTab: 'series'
    };
  }
  segmentValue = (value: any) => {
    console.log(value);
    this.setState({
      segmentTab: value
    })
  }
  playVideoFull() {
    console.log('value');
  }
  render() {
    const { segmentTab } = this.state
    const image = marvel;

    return (
      <>
        {/* <Menu /> */}
        <IonPage id='main'>
          <IonHeader>
            <IonToolbar color="dark">

              <IonSegment value={segmentTab} onIonChange={(e) => this.segmentValue(e.detail.value)} className='ionsegmentNetflix'>
                <IonSegmentButton value="series" className='ionsegmentbuttonNetflix'>Series</IonSegmentButton>
                <IonSegmentButton value="movies" className='ionsegmentbuttonNetflix'>Movies</IonSegmentButton>
              </IonSegment>

            </IonToolbar>
          </IonHeader>


          {segmentTab === 'series' &&
            <IonContent className='netflixContent'>
              <IonCard style={{ backgroundImage: `url('https://images-na.ssl-images-amazon.com/images/I/81mIV6aiWUL._SL1500_.jpg')` }} className="cardTop">
                <div className="cardFooter">
                  <IonLabel className='netflixIonLabel'>
                    <IonIcon icon={download} mode='md'></IonIcon>
                    <p className='paraTitle'>Download</p>
                  </IonLabel>
                  <IonButton color='light' fill='solid' onClick={this.playVideoFull}>
                    <IonIcon slot='start' icon={play} color='dark'></IonIcon> Play
                  </IonButton>
                  <IonLabel className='netflixIonLabel'>
                    <IonIcon icon={share} mode='md'></IonIcon>
                    <p className='paraTitle'>Share</p>
                  </IonLabel>
                </div>
              </IonCard>
              <IonList className='ionlistNetflix'>
                {JsonData.homeData.map((musicData, index) => {
                  return (
                    <div key={index}>
                      {/* <!-- NETFLIX HEADERS CONTENT --> */}
                      < IonListHeader text-capitalize className='ion-justify-content-start ionHeaderStyle' >
                        <IonLabel>
                          {
                            musicData.heading &&
                            <IonText color="light" className="headerText">{musicData.heading}</IonText>
                          }
                        </IonLabel>
                      </IonListHeader>



                      {/* < !--NETFLIX PREVIEW CONTENT-- > */}
                      {musicData.previews &&
                        <div className="scrollDiv">
                          {musicData.previews.map((movieList: any, index: any) => {
                            return (
                              <div className="cards" key={index} >
                                <IonAvatar className="avatarStyle1" >
                                  <IonImg src={movieList.image}></IonImg>
                                </IonAvatar >
                              </div >
                            )
                          })
                          }
                          <div className="ion-padding-start"></div>
                        </div >
                      }


                      {/* < !--NETFLIX ALL RECOMMENDED CONTENT-- > */}
                      {
                        musicData.popularList &&
                        <div className="scrollDiv" >
                          {musicData.popularList.map((movieList, index) => {
                            return (
                              <div className="cardsScrollable" key={index}>
                                <IonThumbnail style={{ backgroundImage: movieList.image }} className="thumbStyle1" >
                                  <IonImg src={movieList.image}></IonImg>
                                </IonThumbnail>
                              </div >
                            )
                          })
                          }
                          <div className='ion-padding-start'></div>
                        </div>
                      }


                      {/* < !--NETFLIX ORIGINAL CONTENT-- > */}
                      {
                        musicData.ORIGINALS &&
                        <div className="scrollDiv" >
                          {musicData.ORIGINALS.map((movieList, index) => {
                            return (
                              <div className="cards_ORIGINALS" key={index}>
                                <IonThumbnail style={{ backgroundImage: movieList.image }} className="thumbStyle1_ORIGINALS" >
                                  <IonImg src={movieList.image}></IonImg>
                                </IonThumbnail>
                              </div >
                            )
                          })
                          }
                          <div className="ion-padding-start"></div>
                        </div >
                      }


                      {/* < !--NETFLIX AVAILABLE NOW VIDEOS CONTENT-- > */}
                      {
                        musicData.availableNow &&
                        <div >
                          {musicData.availableNow.map((movieList, index) => {
                            return (
                              <IonCard className="cardsVideo" key={index}>
                                <div className="dark-bg">
                                  <video controls autoPlay={false} className="videoPlayer">
                                    <source src={movieList.link} type="video/mp4" />
                                  </video>
                                </div >
                                <div className='videoButtons ion-padding-horizontal dark-bg'>
                                  <IonButton color='light' expand='full'>
                                    <IonIcon icon={play}></IonIcon> Play
                                     </IonButton>
                                  <IonButton color='success' expand='full'>
                                    <IonIcon icon={add}></IonIcon> My List
                                     </IonButton>
                                </div >
                              </IonCard>
                            )
                          })
                          }
                          <div className="ion-padding-start"></div>
                        </div >
                      }
                    </div>
                  )
                })
                }
              </IonList>
            </IonContent >
          }
          {
            segmentTab === 'movies' &&
            <IonContent className='netflixContent'>
              <IonCard style={{ backgroundImage: `url(${image})` }} className="cardTop">
                <div className="cardFooter">
                  <IonLabel className='netflixIonLabel'>
                    <IonIcon icon={download} mode='md'></IonIcon>
                    <p className='paraTitle'>Download</p>
                  </IonLabel>
                  <IonButton color='light' fill='solid' onClick={this.playVideoFull}>
                    <IonIcon slot='start' icon={play} color='dark'></IonIcon> Play
                  </IonButton>
                  <IonLabel className='netflixIonLabel'>
                    <IonIcon icon={share} mode='md'></IonIcon>
                    <p className='paraTitle'>Share</p>
                  </IonLabel>
                </div>
              </IonCard>
              <IonList className='ionlistNetflix'>
                {JsonData.homeData.map((musicData, index) => {
                  return (
                    <div key={index}>
                      {/* <!-- NETFLIX HEADERS CONTENT --> */}
                      < IonListHeader text-capitalize className='ion-justify-content-start ionHeaderStyle' >
                        {
                          musicData.heading &&
                          <IonText color="light" className="headerText">{musicData.heading}</IonText>
                        }
                      </IonListHeader>



                      {/* < !--NETFLIX PREVIEW CONTENT-- > */}
                      {musicData.previews &&
                        <div className="scrollDiv">
                          {musicData.previews.map((movieList: any, index: any) => {
                            return (
                              <div className="cards" key={index} >
                                <IonAvatar className="avatarStyle1" >
                                  <IonImg src={movieList.image}></IonImg>
                                </IonAvatar >
                              </div >
                            )
                          })
                          }
                          <div className="ion-padding-start"></div>
                        </div >
                      }


                      {/* < !--NETFLIX ALL RECOMMENDED CONTENT-- > */}
                      {
                        musicData.popularList &&
                        <div className="scrollDiv" >
                          {musicData.popularList.map((movieList, index) => {
                            return (
                              <div className="cardsScrollable" key={index}>
                                <IonThumbnail style={{ backgroundImage: movieList.image }} className="thumbStyle1" >
                                  <IonImg src={movieList.image}></IonImg>
                                </IonThumbnail>
                              </div >
                            )
                          })
                          }
                          <div className='ion-padding-start'></div>
                        </div>
                      }


                      {/* < !--NETFLIX ORIGINAL CONTENT-- > */}
                      {
                        musicData.ORIGINALS &&
                        <div className="scrollDiv" >
                          {musicData.ORIGINALS.map((movieList, index) => {
                            return (
                              <div className="cards_ORIGINALS" key={index}>
                                <IonThumbnail style={{ backgroundImage: movieList.image }} className="thumbStyle1_ORIGINALS" >
                                  <IonImg src={movieList.image}></IonImg>
                                </IonThumbnail>
                              </div >
                            )
                          })
                          }
                          <div className="ion-padding-start"></div>
                        </div >
                      }


                      {/* < !--NETFLIX AVAILABLE NOW VIDEOS CONTENT-- > */}
                      {
                        musicData.availableNow &&
                        <div >
                          {musicData.availableNow.map((movieList, index) => {
                            return (
                              <IonCard className="cardsVideo" key={index}>
                                <div>
                                  <video controls autoPlay={false} className="videoPlayer">
                                    <source src={movieList.link} type="video/mp4" />
                                  </video>
                                </div >
                                <div className='videoButtons ion-padding-horizontal'>
                                  <IonButton color='light' expand='full'>
                                    <IonIcon icon={play}></IonIcon> Play
                                     </IonButton>
                                  <IonButton color='success' expand='full'>
                                    <IonIcon icon={add}></IonIcon> My List
                                     </IonButton>
                                </div >
                              </IonCard>
                            )
                          })
                          }
                          <div className="ion-padding-start"></div>
                        </div >
                      }
                    </div>
                  )
                })
                }
              </IonList>
            </IonContent>
          }
          {
            segmentTab === 'mylist' &&
            <IonContent>
              <IonText>Aditya</IonText>
            </IonContent>
          }
        </IonPage >
      </>
    );
  }
}

export default Netflix;