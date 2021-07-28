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
  IonCol,
  IonRow,
  IonInput,
  IonText,
  IonLabel,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonFooter,
  IonImg,
  IonFabButton,
  IonList,
  IonSpinner,
  IonFab,
  IonItem,
  IonItemOptions,
  IonItemSliding,
  IonItemOption,
  IonFabList,
} from '@ionic/react';
import './BlockChatList.css';
import {
  send, checkmarkDone,
  camera, videocam, locate,
  link
} from 'ionicons/icons';
import GoogleMapReact from 'google-map-react';
import ChatBlockListData from './BlockChatData';
import SenderImage from '../../assets/chat/images/sender-blocks.jpg';
import UserImage from '../../assets/chat/images/user-blocks.jpg';
import chatVideo from '../../assets/chat/chat/video.mp4';

export default class BlockChatList extends Component {
  state: any
  constructor(props: any) {
    super(props);
    this.state = {
      msgList: ChatBlockListData.msgList,
      loader: false,
      inputMsg: null,
      center: {
        lat: 59.95,
        lng: 30.33
      }
    }
  }

  onChange = (e: any) => {
    this.setState({ inputMsg: e.target.value })
  }



  prepareMsg = (image?: any) => {
    // send the msg so it animates
    const { msgList, inputMsg } = this.state;
    if (inputMsg !== '' || image) {

      msgList.push({
        userId: 'Me',
        userName: 'Me',
        time: '12:01',
        message: inputMsg,
        id: msgList.length + 1,
        sent: true, sender: true, read: true,
        image: image ? UserImage : null,
      })

      this.setState({ inputMsg: '' })
      this.scrollDown()

      // this.start_typing = false;
      setTimeout(() => {
        this.senderSends(image)
      }, 500);

    }
  }
  senderSends(image?: any) {
    const { msgList } = this.state;
    this.setState({ loader: true })
    setTimeout(() => {
      msgList.push({
        userId: 'Sender',
        userName: 'Sender',
        time: '12:01',
        id: msgList.length + 1,
        sent: false, sender: false, read: false,
        message: 'Sorry, didn\'t get what you said. Can you repeat that please',
        image: image ? SenderImage : null,

      });
      this.setState({ loader: false })
      this.delayedScrollDown()
    }, 2000)
    this.scrollDown()
  }
  scrollDown = () => {
    let element: any = document.querySelector("#contentBlockList");
    element.scrollToBottom(500);
  }
  delayedScrollDown = () => {
    setTimeout(() => {
      this.scrollDown();
    }, 200);
  }


  closeTime = (itemSliding: any) => {
    console.log('closeTime', itemSliding);
    // itemSliding.close();
  }

  prepareMsgcVideo = (video?: any) => {
    const { msgList, inputMsg } = this.state;
    if (inputMsg !== '' || video) {
      msgList.push({
        userId: 'Me',
        userName: 'Me',
        time: '12:01',
        message: inputMsg,
        id: msgList.length + 1,
        sent: true, sender: true, read: true,
        video: chatVideo,
      })
      this.setState({ inputMsg: '', loader: true })
      this.scrollDown()

      // this.start_typing = false;

      setTimeout(() => {
        msgList.push({
          userId: 'Sender',
          userName: 'Sender',
          time: '12:01',
          message: 'Sorry, didn\'t get what you said. Can you repeat that please',
        });
        this.setState({ loader: false })
        this.scrollDown()
        if (video) {
          this.scrollDown()
        }
      }, 2000)
      this.scrollDown()
    }
  }

  prepareMsgMap = (map?: any) => {
    const { msgList, inputMsg } = this.state;
    if (inputMsg !== '' || map) {
      msgList.push({
        userId: 'Me',
        userName: 'Me',
        time: '12:01',
        message: inputMsg,
        id: msgList.length + 1,
        sent: true, sender: true, read: true,
        map: { lat: 52.678418, lng: 7.809007 },
      })
      this.setState({ inputMsg: '', loader: true })
      setTimeout(() => {
        this.scrollDown()
      }, 100)
      setTimeout(() => {
        msgList.push({
          userId: 'Sender',
          userName: 'Sender',
          time: '12:01',
          message: 'Sorry, didn\'t get what you said. Can you repeat that please',
        });
        this.setState({ loader: false })
        this.scrollDown()
        if (map) {
          setTimeout(() => {
            this.scrollDown()
          }, 100)
        }
      }, 2000)
      this.scrollDown()
    }
  }

  render() {
    const { msgList, loader } = this.state;
    console.log('msgListhggggggj', msgList)
    return (
      <>
        {/* <Menu /> */}
        <IonPage id="main">
          {/* translucent */}
          <IonHeader className="headerSectionsblockList" translucent={true} >
            <IonToolbar color="d4blue" className="d4blue">
              <IonButtons slot="start">
                {/* <IonMenuButton menu="start"  /> */}
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle color="light" slot="start" className="ion-text-center" />

              {/* </IonTitle> */}
              <IonButtons slot="end" className="user-info">
                <div className="header-meta">
                  <div className="header-mood">
                    Relaxed
                </div>
                  <div className="header-name">
                    Scarlett J.
                </div>
                </div>

                <div className="header-image" >
                </div>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          {/* #IonContent */}
          <IonContent fullscreen={true} className="ionContentblockList" id="contentBlockList">
            <IonList className="listSectionBlockList">
              {msgList.map((chat: any, i: any) => {

                return (
                  <div key={i}>
                    {/* #itemSliding *ngIf="chat.userId == User && !chat.image" */}
                    {chat.userId === 'Sender' && !chat.image &&
                      <IonItemSliding>
                        <IonItem className="chat-item">
                          {/* *ngIf="chat.userId == User" */}
                          {chat.userId === 'Sender' && <IonRow className="chat-row" >
                            {/* no-padding */}
                            <IonCol className="right colSectionBlockList noPaddingSection">
                              {/* [ngClass]="{'slideInLeft': (i==(msgList.length-1))}" */}
                              <div className="imageAvatarRight animated superfast" >
                                <IonLabel color="light" className="labelBlockList" style={{ height: 'auto !important' }}>
                                  <div className="chatDiv imageChatDiv">
                                    {/* text-wrap padding */}
                                    <p >{chat.message}
                                    </p>
                                  </div>
                                </IonLabel>
                              </div>
                            </IonCol>
                          </IonRow>}
                        </IonItem>

                        {/* * ngIf= "((msgList[i+1] && msgList[i+1].userId !==chat.userId)|| !msgList[i+1])" */}
                        {((msgList[i + 1] && msgList[i + 1].userId !== chat.userId) || !msgList[i + 1]) &&
                          <IonRow>
                            <IonCol size="12" className="">
                              {/* [ngClass]="{'timer-right': chat.sender,'timer-right': !chat.sender}" */}
                              <div className="timer-right" >
                                <p className="timer-rightP">
                                  {i + 5} mins ago {chat.read}
                                </p>
                                {/* *ngIf="chat.sender && chat.sent" [color]="chat.read ? 'd3green': '#f4f5f8'" */}
                                {chat.sender != null && chat.sent && <IonIcon icon={checkmarkDone} style={{ 'color': chat.read ? '#00c06d' : '#f4f5f8' }} />}
                              </div >
                            </IonCol >
                          </IonRow >}

                        {/* (ionSwipe) = "closeTime(itemSliding)" */}
                        <IonItemOptions side="end" className="ionItemOptionSection" onIonSwipe={() => this.closeTime('itemSliding')} >
                          {/* [ngClass] = "((msgList[i+1] && msgList[i+1].userId !==chat.userId)|| !msgList[i+1]) ? '':'time-center'" */}
                          <IonItemOption className={((msgList[i + 1] && msgList[i + 1].userId !== chat.userId) || !msgList[i + 1]) ? '' : 'time-center'}>
                            <IonText className="ionTextBlockList">
                              {chat.time}
                            </IonText>
                          </IonItemOption>
                        </IonItemOptions>

                      </IonItemSliding >}

                    {/*  # itemSliding2 * ngIf="chat.userId == toUser && !chat.image && !chat.video && !chat.map " */}
                    {chat.userId === 'Me' && !chat.image && !chat.video && !chat.map &&
                      <IonItemSliding>
                        <IonItem className="chat-item">
                          <IonRow className="chat-row">
                            {/*  no-padding */}
                            <IonCol className="left colSectionBlockList noPaddingSection" size="12">
                              {/* [ngClass]="{'slideInRight': (i==(msgList.length-1))}" */}
                              <div className="imageAvatarLeft  animated superfast" >
                                <IonLabel color="light" className="labelBlockList" style={{ height: 'auto !important' }}>
                                  <div className="chatDiv leftChatDiv">
                                    {/* padding text-wrap={true} */}
                                    <p>
                                      {chat.message}
                                    </p>
                                  </div>
                                </IonLabel>
                              </div>
                            </IonCol>
                          </IonRow>
                        </IonItem>
                        {/* * ngIf="((msgList[i+1] && msgList[i+1].userId !==chat.userId)|| !msgList[i+1])" */}
                        {((msgList[i + 1] && msgList[i + 1].userId !== chat.userId) || !msgList[i + 1]) && <IonRow>
                          <IonCol size="12" className="ColleftBlockSection">
                            {/* [ngClass]="{'timer-Left': chat.sender,'timer-left': !chat.sender}" */}
                            <div className="timer-Left">
                              <p className="timer-LeftP">{i + 5} mins ago  </p>
                              {chat.sender && chat.sent && <IonIcon icon={checkmarkDone} style={{ 'color': chat.read ? '#00c06d' : '#f4f5f8' }} />}
                            </div >
                          </IonCol>
                        </IonRow >}
                        <IonItemOptions side="end" onIonSwipe={() => this.closeTime('itemSliding2')}>
                          <IonItemOption className={((msgList[i + 1] && msgList[i + 1].userId !== chat.userId) || !msgList[i + 1]) ? '' : 'time-center'}>
                            <IonText className="ionTextBlockList">
                              {chat.time}
                            </IonText>
                          </IonItemOption>
                        </IonItemOptions>

                      </IonItemSliding >}

                    {/* Image message from you */}
                    {chat.userId === 'Me' && chat.image &&
                      <IonItemSliding >
                        <IonItem className="chat-item-user image-item chat-item">
                          <IonRow className="chat-row">
                            <IonCol className="left chatColSection colSectionBlockList noPaddingSection" >
                              <div className={`imageAvatarLeft animated superfast ${i === (msgList.length - 1) ? "slideInRight" : ""}`} >
                                <IonLabel color="light" className="labelBlockList">
                                  <div className="chatDiv">
                                    <IonImg src={chat.image} />
                                  </div>
                                </IonLabel>
                              </div>
                            </IonCol>
                          </IonRow >
                        </IonItem >
                        <IonRow>
                          <IonCol size="12" className="">
                            <div className={`${chat.sender ? "timer-right-condition" : "timer-right-conditions"}`}>
                              <p className="timer-right-conditionP">{i + 5} mins ago</p>
                              <IonIcon icon={checkmarkDone} />
                            </div >
                          </IonCol >
                        </IonRow >
                        <IonItemOptions side="end" onIonSwipe={() => this.closeTime('itemSliding3')} >

                          <IonItemOption className={((msgList[i + 1] && msgList[i + 1].userId !== chat.userId) || !msgList[i + 1]) ? '' : 'time-center'}>
                            <IonText className="ionTextBlockList">{chat.time}</IonText>
                          </IonItemOption >
                        </IonItemOptions >
                      </IonItemSliding >}

                    {/* Video message from you */}
                    {chat.userId === 'Me' && chat.video &&
                      <IonItemSliding>
                        <IonItem className="chat-item-user-video image-item">
                          <IonRow className="chat-row">
                            <IonCol className="left chatColSection Coluser-videoSection colSectionBlockList noPaddingSection">
                              <div className={`imageAvatarLeft animated superfast ${i === (msgList.length - 1) ? "slideInRight" : ""}`} >
                                <IonLabel color="light" className="labelBlockList"  >
                                  <div className="chatDiv user-videosection">
                                    <video controls className="chatDivVideo">
                                      <source src={chat.video} type="video/mp4" />
                                    </video>
                                  </div>
                                </IonLabel>
                              </div>
                            </IonCol>
                          </IonRow>
                        </IonItem >

                        {((msgList[i + 1] && msgList[i + 1].userId !== chat.userId) || !msgList[i + 1]) &&
                          <IonRow>
                            <IonCol size="12" className="">
                              <div className="timer-right-condition" >
                                <p className="timer-right-conditionP">{i + 5} mins ago</p>
                                {chat.sender && chat.sent && <IonIcon icon={checkmarkDone} style={{ 'color': chat.read ? '#00c06d' : '#f4f5f8' }} />}
                              </div >
                            </IonCol >
                          </IonRow >}

                        <IonItemOptions side="end" onIonSwipe={() => this.closeTime('itemSliding3')} >
                          <IonItemOption className={((msgList[i + 1] && msgList[i + 1].userId !== chat.userId) || !msgList[i + 1]) ? '' : 'time-center'} >
                            <IonText className="ionTextBlockList">{chat.time}</IonText>
                          </IonItemOption >
                        </IonItemOptions >
                      </IonItemSliding >}

                    {/* Map Message from you */}
                    {chat.userId === 'Me' && chat.map &&
                      <IonItemSliding>
                        <IonItem className="chat-item-user image-item map-item">
                          <IonRow className="chat-row">

                            <IonCol className="left chatColSection colSectionBlockList noPaddingSection" >
                              <div className={`imageAvatarLeft animated superfast ${i === (msgList.length - 1) ? "slideInRight" : ""}`} >
                                <IonLabel color="light" className="mapSection labelBlockList" style={{ height: 'auto !important' }}>
                                  <div className="chatDiv mapChatDiv">
                                    <GoogleMapReact
                                      bootstrapURLKeys={{ key: 'YOUR_MAP_API_KEY' }}
                                      defaultCenter={this.state.center}
                                      defaultZoom={12}
                                    >
                                      <div style={{ width: '100%', height: '100px' }}>
                                        lat={59.955413}
                                        lng={30.337844}
                                      </div>
                                      {/* <AnyReactComponent


                                /> */}
                                    </GoogleMapReact>
                                    {/* <agm-map [latitude]=chat.map.lat [longitude]=chat.map.lng [draggable]="false" className="chatDivMap">
                      <agm-marker [latitude]=chat.map.lat [longitude]=chat.map.lng></agm-marker>
                    </agm-map> */}
                                  </div>
                                </IonLabel>
                              </div>
                            </IonCol >
                          </IonRow >
                        </IonItem >
                        {((msgList[i + 1] && msgList[i + 1].userId !== chat.userId) || !msgList[i + 1]) &&
                          <IonRow>
                            <IonCol size="12" className="">
                              <div className={`${chat.sender ? 'timer-right-condition' : 'timer-right-conditions'}`}>
                                <p className="timer-right-conditionP">{i + 5} mins ago</p>
                                {chat.sender && chat.sent && <IonIcon icon={checkmarkDone} style={{ 'color': chat.read ? '#00c06d' : '#f4f5f8' }} />}
                              </div >
                            </IonCol >
                          </IonRow >}

                        <IonItemOptions side="end" onIonSwipe={() => this.closeTime('itemSliding3')} >
                          <IonItemOption className={((msgList[i + 1] && msgList[i + 1].userId !== chat.userId) || !msgList[i + 1]) ? '' : 'time-center'}>
                            <IonText className="ionTextBlockList">{chat.time}</IonText>
                          </IonItemOption >
                        </IonItemOptions >
                      </IonItemSliding>}

                    {/* Image Message from sender */}
                    {chat.userId === 'Sender' && chat.image &&
                      <IonItemSliding>
                        <IonItem className="chat-item-sender image-item">
                          <IonRow className="chat-row">
                            <IonCol className="right chatColSection colSectionBlockList noPaddingSection">
                              <div className={`imageAvatarRight animated superfast ${i === (msgList.length - 1) ? "slideInLeft" : ""}`} >
                                <IonImg src={chat.image} />
                              </div>
                            </IonCol>
                          </IonRow >
                        </IonItem >
                        {((msgList[i + 1] && msgList[i + 1].userId !== chat.userId) || !msgList[i + 1]) &&
                          <IonRow >
                            <IonCol size="12" className="">
                              <div className="timer-right" >
                                <p className="timer-rightP">{i + 5} mins ago</p>
                              </div >
                            </IonCol >
                          </IonRow >}
                        <IonItemOptions side="end" onIonSwipe={() => this.closeTime('itemSliding3')} >
                          <IonItemOption className={((msgList[i + 1] && msgList[i + 1].userId !== chat.userId) || !msgList[i + 1]) ? '' : 'time-center'} >
                            <IonText className="ionTextBlockList">{chat.time}</IonText>
                          </IonItemOption>
                        </IonItemOptions >
                      </IonItemSliding>}

                    {((msgList[i + 1] && msgList[i + 1].userId === chat.userId)) &&
                      <IonRow className="thin-gap" ></IonRow >}
                    {((msgList[i + 1] && msgList[i + 1].userId === chat.userId)) && loader &&
                      <IonRow className="chat-row loaderRowSection " >
                        <IonCol className="loading-col colSectionBlockList noPaddingSection loaderSection">
                          <div className="imageAvatarRight">
                            <IonLabel>
                              <div className="chatDivLoader">
                                <IonSpinner name="dots" color="dark" />
                                <div className="corner-parent-right">
                                  <div className="corner-child-right">
                                  </div>
                                </div>
                              </div>
                            </IonLabel>
                          </div>
                        </IonCol>
                      </IonRow >}

                  </div>)
              })}

            </IonList >

            <IonFab vertical="bottom" horizontal="end" slot="fixed" className="IonFabSection">
              {/* (click)=" prepareMsg()" (mousedown)="something($event)" */}
              <IonFabButton className="ionFabButtonSection" onClick={() => this.prepareMsg()} >
                <IonIcon icon={send} />
              </IonFabButton>
            </IonFab >

            <IonFab vertical="bottom" horizontal="start" edge slot="fixed" className="fabCamera IonFabSection">
              <IonFabButton className="fabCamera_button ">
                <IonIcon icon={link} mode="ios" color="medium" />
              </IonFabButton>
              <IonFabList side="top">
                <IonFabButton className="ionfabButtonBlockListSection" onClick={() => this.prepareMsg(true)} >
                  <IonIcon icon={camera} className="footerIcon" color="light" />
                </IonFabButton>
              </IonFabList>
            </IonFab >

            <IonFab vertical="bottom" horizontal="start" edge slot="fixed" className="fabCamera IonFabSection">
              <IonFabButton className="fabCamera_button ">
                <IonIcon icon={link} mode="ios" color="medium" />
              </IonFabButton>
              <IonFabList side="top">
                <IonFabButton className="ionfabButtonBlockListSection" onClick={() => this.prepareMsg(true)} >
                  <IonIcon icon={camera} className="footerIcon" color="primary" />
                </IonFabButton>
                <IonFabButton className="ionfabButtonBlockListSection" onClick={() => this.prepareMsgcVideo(true)}>
                  <IonIcon icon={videocam} color="primary" />
                </IonFabButton>
                <IonFabButton className="ionfabButtonBlockListSection" onClick={() => this.prepareMsgMap(true)}>
                  <IonIcon icon={locate} color="primary" />
                </IonFabButton >
              </IonFabList >
            </IonFab >
          </IonContent>

          <IonFooter translucent className="footerSectionBlockList">
            <IonToolbar className="footerToolbarBlockListSection">
              <IonItem>
                <IonInput className="input-box ion-padding-start" type="text" placeholder="Write a message..." value={this.state.inputMsg} autofocus={true} onIonChange={(e) => this.onChange(e)} />
              </IonItem>
            </IonToolbar>
          </IonFooter >
        </IonPage >
      </>

    )
  }
}
