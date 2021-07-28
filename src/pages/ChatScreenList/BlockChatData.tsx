
/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import one from '../../assets/chat/avatars/1.png';
import two from '../../assets/chat/avatars/2.png';
import three from '../../assets/chat/avatars/3.png';
import four from '../../assets/chat/avatars/4.png'
import five from '../../assets/chat/avatars/5.png';
import six from '../../assets/chat/avatars/6.png';
import gallery6 from '../../assets/chat/chat/gallery6.jpeg';
import gallery2 from '../../assets/chat/chat/gallery2.jpeg';
import gallery4 from '../../assets/chat/chat/gallery4.jpeg';
import gallery3 from '../../assets/chat/chat/gallery3.jpeg';
import gallery5 from '../../assets/chat/chat/gallery5.jpeg'
import gallery1 from '../../assets/chat/chat/gallery1.jpeg'
import sg2 from '../../assets/chat/images/sg2.jpg'


const ChatBlockListData = {
  msgList: [
    {
      userId: 'Me',
      userName: 'Me',
      time: '12:00',
      message: 'Hello, have you seen this great chat UI',
      id: 0, read: true, delivered: true, sent: true, sender: 1,
    },
    {
      userId: 'Sender',
      userName: 'Sender',
      time: '12:03',
      message: 'Yeah, I see this. This looks great. ',
      id: 1, read: true, delivered: true, sent: false, sender: 0,
    },
    {
      userId: 'Me',
      userName: 'Me',
      time: '12:05',
      message: '... and this is absolutely free, anyone can use',
      id: 3, read: true, delivered: true, sent: true, sender: 1,
    },
    {
      userId: 'Sender',
      userName: 'Sender',
      time: '12:06',
      message: 'wow ! that\'s great. Love to see more of such chat themes',
      id: 4, read: true, delivered: true, sent: false, sender: 0,
    },
    {
      userId: 'Me',
      userName: 'Me',
      time: '12:07',
      message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
      id: 5, read: true, delivered: true, sent: true, sender: 1,
    }
  ],


}
export const shareList = [
  { image: one, name: 'Alexa' },
  { image: two, name: 'Hayden' },
  { image: three, name: 'Cosmo' },
  { image: four, name: 'Carl' },
  { image: five, name: 'Maggie' },
  { image: six, name: 'Thomas' }
]
export const gallery = [
  gallery6,
  gallery2,
  gallery4,
  gallery5,
  gallery3,
  gallery1,
  gallery3,
  gallery6,
  gallery3,
  gallery1,
  gallery5,
  gallery4,
  gallery2,
  gallery3,
  gallery6,
  sg2
]




export default ChatBlockListData;