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
    IonInput,
    IonLabel,
    IonIcon,
    IonFooter,
    IonAvatar,
    IonImg,
    IonNote,
    IonFabButton,
    IonList,
    IonFab,

} from '@ionic/react';
import './ChatList1.css';

import ChatData from './chatScreenData';
import boy from '../../assets/chat/chat/boy.png';
import { camera, shareSocial, send, search } from 'ionicons/icons';

const userDetails = { firstName: 'Bill', lastName: 'Kenny', image: boy, status: 'Online' }

class ChatList1 extends Component {
    state: any;
    constructor(props: any) {
        super(props)
        this.state = {
            GalleryListToggle: false,
            SearchToggle: false,
            ShareToggle: false,
            loader: false,
            imageMove: null,
            iconColor: null,
            progressbarValue: null,
            msgList: ChatData.msgList,
            inputMsg: null
        }
    }

    onChange = (e: any) => {
        this.setState({ inputMsg: e.target.value })
    }

    cameraOpen = () => {

        this.setState({ GalleryListToggle: !this.state.GalleryListToggle })
    }
    searchOpen = () => {
        this.setState({ SearchToggle: !this.state.SearchToggle })
    }
    shareOpen = () => {
        this.setState({ ShareToggle: !this.state.ShareToggle })
    }

    galleryImage = (i: any) => {
        // this.state.imageMove = i
        this.setState({ image: i })
        setTimeout(() => {
            this.setState({
                GalleryListToggle: false,
                iconColor: false
            })
        }, 300)

        setTimeout(
            this.Load()
            , 3000)
        console.log('i', i)
        console.log('this.gallery[i]', ChatData.gallery[i])

        let msg = {
            userId: 'Me',
            userName: 'Me',
            userAvatar: boy,
            time: '12:01 pm',
            image: ChatData.gallery[i],
        }
        this.state.msgList.push(msg)
        setTimeout(() => {
            this.scrollToBottom()
        }, 10)

        setTimeout(() => { this.setState({ imageMove: undefined }); ChatData.gallery.splice(i, 1) }, 1000);
    }
    Load(): any {
        this.setState({ progressbarValue: 10 })
        setTimeout(() => {
            this.setState({ progressbarValue: 20 })
        }, 1);
        setTimeout(() => {
            this.setState({ progressbarValue: 30 })
        }, 1000);
        setTimeout(() => {
            this.setState({ progressbarValue: 40 })
        }, 2000);
        setTimeout(() => {
            this.setState({ progressbarValue: 50 })

        }, 3000);
        setTimeout(() => {
            this.setState({ progressbarValue: 60 })
        }, 4000);
        setTimeout(() => {
            this.setState({ progressbarValue: 70 })
        }, 5000);
        setTimeout(() => {
            this.setState({ progressbarValue: 80 })
        }, 6000);
        setTimeout(() => {
            this.setState({ progressbarValue: 100 })
        }, 10000);
    }
    scrollToBottom = () => {
        let element: any = document.querySelector("#content");
        element.scrollToBottom(500);

    }



    sendMsg = () => {
        if (this.state.inputMsg && this.state.inputMsg.trim() !== '') {
            this.state.msgList.push({
                userId: 'Me',
                userName: 'Me',
                userAvatar: '../../assets/chat/chat/chat2.jpg',
                time: '12:01 pm',
                message: this.state.inputMsg,
            });


            // this.state.inputMsg = '';
            this.setState({
                inputMsg: ''
            })
            setTimeout(() => {
                this.scrollToBottom()
            }, 10)
            this.setState({
                inputMsg: '',
                loader: true
            })

            setTimeout(() => {
                this.senderSends()
            }, 2000)
        }
    }


    senderSends() {
        this.state.msgList.push({
            userId: 'driver',
            userName: 'driver',
            userAvatar: '../../assets/chat/chat/chat1.jpg',
            time: '12:01 pm',
            message: 'Sorry, I don\'t know the answer to that. Please ask something else'
        })
        this.setState({ loader: false })
        setTimeout(() => {
            this.scrollToBottom();
        }, 10)
    }

    searchItem = (e: any) => {
        console.log('search Input', e.target.value)
    }

    render() {
        return (
            <>
                {/* <Menu /> */}
                <IonPage id='main'>
                    <IonHeader>
                        <IonToolbar className="headerToolbarChatList ionToolbarSection">
                            <div className="UserimgSectionChatList" slot="start">
                                <IonAvatar className="userAvatarChatList" slot="start">
                                    <IonImg src={userDetails.image} />
                                    <span className="onlineOffline_icon"></span>
                                </IonAvatar>
                                <div className="usernameSectionChatList">
                                    <IonLabel className="userNameChatList">
                                        {userDetails.firstName} {userDetails.lastName}
                                    </IonLabel>
                                    <IonNote className="userStatus">
                                        {this.state.loader ? userDetails.firstName + ' is typing ..' : userDetails.status}
                                    </IonNote>
                                </div>
                            </div>
                            <IonFabButton slot="end" translucent={false} className="headerfab" onClick={this.cameraOpen}>
                                <IonIcon icon={camera} className="headerIconColor" style={{ 'color': this.state.GalleryListToggle ? '#fff' : '#595454' }} />
                            </IonFabButton>

                            <IonFabButton slot="end" translucent={false} className="headerfab" onClick={this.shareOpen} >
                                <IonIcon icon={shareSocial} className="headerIconColor" style={{ 'color': this.state.ShareToggle ? '#fff' : '#595454' }} />
                            </IonFabButton>

                            <IonFabButton slot="end" translucent={false} className="headerfab" onClick={this.searchOpen} >
                                <IonIcon icon={search} className="headerIconColor" style={{ 'color': this.state.SearchToggle ? '#fff' : '#595454' }} />
                            </IonFabButton>

                        </IonToolbar>

                        <div className={this.state.GalleryListToggle ? 'gallerySection' : 'h-0'}>

                            <IonList className="galleryList ion-padding-horizontal">

                                {ChatData.gallery.map((img: any, index: any) => {
                                    return (<div className="galleryItem" key={index}>
                                        <IonImg src={img} className="galleryImg" onClick={() => this.galleryImage(index)} />
                                    </div>)
                                })}
                            </IonList>
                        </div>

                        <div className={this.state.ShareToggle ? 'shareSection' : 'h-0'}>
                            <IonList className="shareList ion-padding-horizontal">
                                {ChatData.shareList.map((img, index) => {
                                    return (<div className="shareItem" key={index}  >
                                        <IonImg src={img.image} className="shareImg" />
                                        <div className="share-user">
                                            {img.name}
                                        </div>
                                    </div>)
                                })}
                            </IonList >
                        </div >
                        <div className={this.state.SearchToggle ? 'searchSection' : 'h-0'}>
                            <IonInput className="placeholdertext inputMessage ion-padding-start" type="text" placeholder="Type to search" autofocus={true}
                                onIonChange={(e) => this.searchItem(e)}></IonInput>
                        </div>
                    </IonHeader >


                    <IonContent className="ionContentSection " scrollEvents={true} id="content" >
                        <div className="message-wrap" >
                            {this.state.msgList.map((msg: any, index: any) => {
                                return (<div className={'message'} key={index}>

                                    {msg.userId === 'driver' && <div className="message-left">
                                        <div className="msg-detail">
                                            <div className="msg-info">
                                                <IonNote className="userMessageTime">
                                                    {msg.time}
                                                </IonNote>
                                            </div>
                                            <div className="msg-content">
                                                <p className="line-breaker ">
                                                    {msg.message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>}

                                    {msg.userId === 'Me' && <div className="message-right" >
                                        {/* {msg.status === 'pending' &&  <IonSpinner name="dots" /> }  */}
                                        <div className="msg-detail">
                                            {msg.userId !== ChatData.msgList[index - 1].userId &&
                                                <div className="msg-info">
                                                    <IonNote className="userMessageTime">
                                                        {msg.time}
                                                    </IonNote>
                                                </div>}
                                            {!msg.image && <div className="msg-content">
                                                <p className="line-breaker rightmsgText">
                                                    {msg.message}

                                                </p>
                                            </div>}
                                            {msg.image && <div className="msgimageSection animated superfast zoomIn" >
                                                <IonImg src={msg.image} className="messageImageContent" />
                                            </div >}
                                        </div >
                                    </div >}
                                </div>)
                            })}
                        </div>
                    </IonContent>

                    <IonFooter className="footerSection">
                        <IonToolbar className="footerToolbarSection">
                            <div className="containerChatList">
                                <div className="inputConatinerChatList">
                                    <IonInput className="placeholderChattext inputMessage footer-input ion-padding-start" type="text" placeholder="Type a message"
                                        value={this.state.inputMsg} autofocus={true} onIonChange={(e) => this.onChange(e)}></IonInput>
                                </div>
                                <div className="sendSection">
                                    <IonFab vertical="bottom" horizontal="end" edge={true} className="sendBtn" onClick={this.sendMsg}>
                                        <IonFabButton className="sendbtn" mode="md" >
                                            <IonIcon icon={send} />
                                        </IonFabButton>
                                    </IonFab>
                                </div>
                            </div >
                        </IonToolbar >
                    </IonFooter >
                </IonPage>
            </>

        )
    }
}
export default ChatList1