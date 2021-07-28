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
import sg2 from '../../assets/chat/images/sg2.jpg';
import user from '../../assets/chat/chat/user.jpeg';
import user1 from '../../assets/chat/chat/user1.jpeg';
import user2 from '../../assets/chat/chat/user2.jpeg';
import user3 from '../../assets/chat/chat/user3.jpeg';
import user4 from '../../assets/chat/chat/user4.jpeg';
import enappd from '../../assets/chat/chat/enappd.png';
import chat_1 from '../../assets/chat/chat/chat1.jpg';
import chat_2 from '../../assets/chat/chat/chat2.jpg';
import chat_3 from '../../assets/chat/chat/chat3.jpg';
import chat_5 from '../../assets/chat/chat/chat5.jpg';
import chat_6 from '../../assets/chat/chat/chat6.jpg';
import chat_7 from '../../assets/chat/chat/chat7.jpg';
import chat_8 from '../../assets/chat/chat/chat8.jpg';
import crown from '../../assets/chat/chat/crown.png';
import crown1 from '../../assets/chat/chat/crown1.png';
import boy from '../../assets/chat/chat/boy.png';
import boy1 from '../../assets/chat/chat/boy1.png';
import boy2 from '../../assets/chat/chat/boy2.png';
import man from '../../assets/chat/chat/man.png';
import man1 from '../../assets/chat/chat/man1.png';
import woman from '../../assets/chat/chat/woman.png';
import user_0 from '../../assets/chat/chat/user.jpeg';
import user_1 from '../../assets/chat/chat/user1.jpeg';
const ChatListData = {
    chatData: [{
        'name': 'Jovenica',
        'image': user,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'online',
        'count': '2',
        'time': '2 min ago'

    }, {
        'name': 'Oliver',
        'image': user3,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'offline',
        'badge': '4',
        'sendTime': '18:34',
        'group': true

    }, {
        'name': 'George',
        'image': user4,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'offline',
        'count': '2',
        'sendTime': '18:30',
        'broadcast': true

    }, {
        'name': 'Harry',
        'image': user1,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'online',
        'badge': '6',
        'sendTime': '17:55'
    }, {
        'name': 'Jack',
        'image': user,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'offline',
        'sendTime': '17:55'
    }, {
        'name': 'Jacob',
        'image': user3,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'offline',
        'count': '1',
        'sendTime': '17:50'
    }, {
        'name': 'Noah',
        'image': user2,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'offline',
        'sendTime': '17:40'
    }, {
        'name': 'Charlie',
        'image': user4,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'online',
        'count': '6',
        'badge': '8',
        'sendTime': '17:40'
    }, {
        'name': 'Logan',
        'image': user,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'offline',
        'badge': '8',
        'sendTime': '17:40'
    }, {
        'name': 'Harrison',
        'image': user2,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'offline',
        'sendTime': '17:40'
    }, {
        'name': 'Sebastian',
        'image': user1,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'online',
        'sendTime': '17:40'
    }, {
        'name': 'Zachary',
        'image': user4,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'offline',
        'sendTime': '17:40'
    }, {
        'name': 'Elijah',
        'image': user3,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'status': 'offline',
        'badge': '8',
        'sendTime': '17:40'
    }
    ],
    chatDataRose: [{
        'name': 'Enappd',
        'image': enappd,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'count': '2',
        'time': '11:32 PM',
        'distance': '6km',
        'type': 'PRO',
        'crown': crown
    }, {
        'name': 'Jovenica Alba',
        'image': chat_1,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'count': '2',
        'time': '12:17',
        'distance': '6km',
        'type': 'PRO',
        'crown': crown
    }, {
        'name': 'Oliver',
        'image': chat_2,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'time': '12:17',
        'distance': '6km',
        'type': 'Basic',
        'crown': crown1,
    }, {
        'name': 'George',
        'image': chat_3,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'count': '2',
        'time': 'Yesterday',
        'distance': '6km',
        'type': 'Basic',
        'crown': crown1,
    }, {
        'name': 'Harry',
        'image': chat_3,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'time': 'Sunday',
        'distance': '6km',
        'type': 'PRO', 'crown': crown,
    }, {
        'name': 'Jack',
        'image': chat_5,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'time': '11:15',
        'distance': '6km',
        'type': 'Basic',
        'crown': crown1,
    }, {
        'name': 'Jacob',
        'image': chat_6,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'count': '1',
        'time': 'Yesterday',
        'distance': '6km',
        'type': 'Basic',
        'crown': crown1,
    }, {
        'name': 'Noah',
        'image': chat_7,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'time': 'Monday',
        'distance': '6km',
        'type': 'PRO', 'crown': crown
    }, {
        'name': 'Charlie',
        'image': chat_8,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'count': '6',
        'time': '07:00',
        'distance': '6km',
        'type': 'Basic',
        'crown': crown1,
    }, {
        'name': 'Logan',
        'image': chat_1,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'time': 'Yesterday',
        'distance': '6km',
        'type': 'PRO', 'crown': crown,

    }, {
        'name': 'Harrison',
        'image': chat_2,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'time': 'Yesterday',
        'distance': '6km',
        'type': 'Basic', 'crown': crown1,

    }, {
        'name': 'Sebastian',
        'image': chat_3,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

        'time': 'Yesterday',
        'distance': '6km',
        'type': 'PRO', 'crown': crown
    },
    {
        'name': 'Zachary',
        'image': chat_3,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'time': 'Today',
        'distance': '6km',
        'type': 'Basic', 'crown': crown1,

    }, {
        'name': 'Elijah',
        'image': chat_5,
        'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
        'time': '18:25',
        'distance': '6km',
        'type': 'PRO', 'crown': crown
    }
    ],
    msgList: [
        {
            userId: 'driver',
            userName: 'driver',
            userAvatar: user_1,
            time: '10:26 AM',
            message: 'hii !!',
        },
        {
            userId: 'driver',
            userName: 'driver',
            userAvatar: user_0,
            message: 'you in office ?',
        },
        {
            userId: 'driver',
            userName: 'driver',
            userAvatar: user_1,
            message: 'plz share the images ?',
        },
        {
            userId: 'Me',
            userName: 'Me',
            userAvatar: user_0,
            time: '11:40 AM',
            message: 'Sure !',
        }
    ],
    shareList: [
        { image: one, name: 'Alexa' },
        { image: two, name: 'Hayden' },
        { image: three, name: 'Cosmo' },
        { image: four, name: 'Carl' },
        { image: five, name: 'Maggie' },
        { image: six, name: 'Thomas' }
    ],
    gallery: [
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
    ],
    Artboard: [{
        'name': 'Zachary Murphy',
        'image': boy,
        'description': 'Terneuzen',
        'status': 'online',
        'count': '2',
        'time': '2 min ago'

    }, {
        'name': 'Virginia Hansen',
        'image': man,
        'description': 'spijkernisse',
        'status': 'offline',
        'badge': '4',
        'sendTime': '18:34',
        'group': true

    }, {
        'name': 'Billy Boyd',
        'image': woman,
        'description': 'Sittard-Geleen',
        'status': 'offline',
        'count': '2',
        'sendTime': '18:30',
        'broadcast': true

    }, {
        'name': 'Tiffany Hayes',
        'image': boy2,
        'description': 'Veenendaal',
        'status': 'online',
        'badge': '6',
        'sendTime': '17:55'
    }, {
        'name': 'Jeese Jensen',
        'image': man1,
        'description': ' Purmerend',
        'status': 'offline',
        'sendTime': '17:55'
    }, {
        'name': 'Jacob',
        'image': boy1,
        'description': 'Greensboro',
        'status': 'offline',
        'count': '1',
        'sendTime': '17:50'
    }, {
        'name': 'Noah',
        'image': boy,
        'description': 'Greensboro',
        'status': 'offline',
        'sendTime': '17:40'
    }, {
        'name': 'Charlie',
        'image': woman,
        'description': 'Greensboro',
        'status': 'online',
        'count': '6',
        'badge': '8',
        'sendTime': '17:40'
    }, {
        'name': 'Logan',
        'image': man,
        'description': 'Greensboro',
        'status': 'offline',
        'badge': '8',
        'sendTime': '17:40'
    }, {
        'name': 'Harrison',
        'image': boy2,
        'description': 'Greensboro',
        'status': 'offline',
        'sendTime': '17:40'
    }, {
        'name': 'Sebastian',
        'image': boy1,
        'description': 'Greensboro',
        'status': 'online',
        'sendTime': '17:40'
    }, {
        'name': 'Zachary',
        'image': man,
        'description': 'Greensboro',
        'status': 'offline',
        'sendTime': '17:40'
    }, {
        'name': 'Elijah',
        'image': boy,
        'description': 'Greensboro',
        'status': 'offline',
        'badge': '8',
        'sendTime': '17:40'
    }
    ]

}
export default ChatListData;





