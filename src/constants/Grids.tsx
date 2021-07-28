/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import ProductOneImage from '../assets/products/1.jpg'
import ProductTwoImage from '../assets/products/2.jpg'
import ProductThreeImage from '../assets/products/3.jpg'
import ProductFourImage from '../assets/products/4.jpg'
import ProductFiveImage from '../assets/products/5.jpg'
import Grid1Image from '../assets/square_grid/rdj.jpg'
import Grid2Image from '../assets/square_grid/deepika.jpg'
import Grid3Image from '../assets/square_grid/hrithik.jpg'
import Grid4Image from '../assets/square_grid/natalie.jpg'
import Grid5Image from '../assets/square_grid/federer.jpg'
import Grid6Image from '../assets/square_grid/emilia.jpg'
import Grid7Image from '../assets/square_grid/chadwick.jpg'
import Grid8Image from '../assets/square_grid/dwayne.jpg'
import Grid9Image from '../assets/square_grid/emma.jpg'
import Grid10Image from '../assets/square_grid/matthew.jpg'
import Grid11Image from '../assets/square_grid/cavil.jpg'
import Grid12Image from '../assets/square_grid/selena.jpg'
import Grid13Image from '../assets/square_grid/rihanna.jpg'
import Grid14Image from '../assets/square_grid/will.jpg'
import Amalfi from '../assets/places/amalfi.jpg'
import Banff from '../assets/places/banff.jpg'
import Cappadocia from '../assets/places/cappadocia.jpg'
import Faroe from '../assets/places/faroe.jpg'
import Maldives from '../assets/places/maldives.jpg'
import NaPali from '../assets/places/NaPali.jpg'
import Santorini from '../assets/places/santorini.jpg'
import Yangshuo from '../assets/places/yangshuo.jpg'
// import Icon2 from '../assets/products/icon2.png'
// import Drops320 from '../assets/products/drops320x320.png'
// import BathEssentials from '../assets/products/Bath-Essentials-500x500.png'
// import BabyMother from '../assets/products/babyMother.png'
// import FirstAid from '../assets/products/First-aid.png'
// import Amrutanjan from '../assets/products/amrutanjan.png'
// import AKIKPISTI from '../assets/products/AKIK-PISTI.png'
// import EnoRegular from '../assets/products/eno-regular.png'
// import Chyawanprash from '../assets/products/chyawanprash-700x700.png'
// import NeemGuard from '../assets/products/neemguard.jpg'
// import FastIodexpng from '../assets/products/fastIodexpng.png'

import GridProduct1 from '../assets/grid_products/1.png'
import GridProduct2 from '../assets/grid_products/2.png'
import GridProduct3 from '../assets/grid_products/3.png'
import GridProduct4 from '../assets/grid_products/4.png'
import GridProduct5 from '../assets/grid_products/5.png'
import GridProduct6 from '../assets/grid_products/6.png'
import GridProduct7 from '../assets/grid_products/7.png'
import GridProduct8 from '../assets/grid_products/8.png'
import GridProduct9 from '../assets/grid_products/9.png'
import GridProduct10 from '../assets/grid_products/10.png'
import GridProduct11 from '../assets/grid_products/11.png'
import GridProduct12 from '../assets/grid_products/12.png'


import Actress from '../assets/masonry/1.jpg';
import Backpacking from '../assets/masonry/2.jpg';
import Actors from '../assets/masonry/3.jpg';
import Cars from '../assets/masonry/4.jpg';
import Sports from '../assets/masonry/5.jpg';
import Places from '../assets/masonry/6.jpg';
import Acting from '../assets/masonry/7.jpg';
import Food from '../assets/masonry/8.jpg';
import Paris from '../assets/masonry/9.jpg';
import NewYork from '../assets/masonry/10.jpg';


interface GridProduct {
    name: string,
    image: Array<string>,
    size: string,
    color: string,
    cost_price: number,
    discount: number,
    offer: boolean,
    stock: number,
    description: string,
    currency: string,
    bought: number,
    shipping: number,
    rating: number,
    rating_count: number,
    store_rate: number,
    store_rating: number,
    store_rating_count: number,
    sold_by: string,
    specs: string,
    reviews: Array<any>,
    store_reviews: Array<any>,
    sizing: {
        small: number,
        okay: number,
        large: number
    },
    buyer_guarantee: string,
    sponsored: Array<any>
}

export const shop_grid: Array<GridProduct> = [
    { name: 'Bianca Top', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: [ProductOneImage, '../assets/products/1_1.jpg', '../assets/products/1_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: '../assets/products/1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: [ProductOneImage, '../assets/products/1_1.jpg'] }, { image: '../assets/products/1_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/1.jpg'] }], store_reviews: [{ image: '../assets/products/1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/1.jpg', '../assets/products/1_1.jpg'] }, { image: '../assets/products/1_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/1.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Scarpetta Dress', cost_price: 198, discount: 80, offer: false, stock: 69, description: 'sample data', image: [ProductTwoImage, '../assets/products/2_1.jpg', '../assets/products/2_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 400, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: '../assets/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/2.jpg'] }], store_reviews: [{ image: '../assets/products/2_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/2.jpg', '../assets/products/2_1.jpg'] }, { image: '../assets/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/2.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Misty Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: [ProductThreeImage, '../assets/products/3_1.jpg', '../assets/products/3_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 365, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: '../assets/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/3.jpg'] }], store_reviews: [{ image: '../assets/products/3_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/3.jpg', '../assets/products/3_1.jpg'] }, { image: '../assets/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/3.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Blanch Dress', cost_price: 248, discount: 20, offer: true, stock: 69, description: 'sample data', image: [ProductFourImage, '../assets/products/4_1.jpg', '../assets/products/4_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: '../assets/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/4.jpg'] }], store_reviews: [{ image: '../assets/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/4.jpg', '../assets/products/4_1.jpg'] }, { image: '../assets/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Scarlett Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: [ProductFiveImage, '../assets/products/5_1.jpg', '../assets/products/5_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: '../assets/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/5.jpg'] }], store_reviews: [{ image: '../assets/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/5.jpg', '../assets/products/5_1.jpg'] }, { image: '../assets/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['../assets/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
];

export const gridImages = [
    { image: Grid1Image, name: 'Robert Downey Jr.' },
    { image: Grid2Image, name: 'Deepika Padukone' },
    { image: Grid3Image, name: 'Hrithik Roshan' },
    { image: Grid4Image, name: 'Natalie Portman' },
    { image: Grid5Image, name: 'Roger Federer' },
    { image: Grid6Image, name: 'Emilia Clarke' },
    { image: Grid7Image, name: 'Chadwick Boseman' },
    { image: Grid8Image, name: 'Dwayne Johnson' },
    { image: Grid9Image, name: 'Emma Watson' },
    { image: Grid10Image, name: 'Mathhew M' },
    { image: Grid11Image, name: 'Henry Cavil' },
    { image: Grid12Image, name: 'Selena Gomez' },
    { image: Grid13Image, name: 'Rihanna' },
    { image: Grid14Image, name: 'Will Smith' }
]

export const FullImages = [
    { title: 'S A N T O R I N I', image: Santorini },
    { title: 'M A L D I V E S', image: Maldives },
    { title: 'C A P P A D O C I A', image: Cappadocia },
    { title: 'B A N F F', image: Banff },
    { title: 'A M A L F I', image: Amalfi },
    { title: 'F A R O E', image: Faroe },
    { title: 'N A  P A L I', image: NaPali },
    { title: 'Y A N G S H U O', image: Yangshuo },
]

export const Masonry = [{ image: Actress, title: '7 Actresses with accents' },
{ image: Backpacking, title: '7 Places to go backpacking' },
{ image: Actors, title: '7 Actors who dies on set' },
{ image: NewYork, title: '7 Places to be in NewYork this New Year eve' },
{ image: Cars, title: '7 Cars to drive before you die' },
{ image: Sports, title: '7 Sports for healthy living' },
{ image: Acting, title: '7 Actors who never took acting classes' },
{ image: Places, title: '7 Places to go this year' },
{ image: Paris, title: '7 Places to be in Paris this New Year eve' },
{ image: Food, title: '7 Food items for sound sleep' }];


export const electronics = [
    { title: 'iPhone 12', image: GridProduct1 },
    { title: 'Apple Air Pod Pro', image: GridProduct2 },
    { title: 'Apple Air Pod Max', image: GridProduct3 },
    { title: 'Sony Headphones', image: GridProduct4 },
    { title: 'Bose Headphones', image: GridProduct5 },
    { title: 'One Plus 8T', image: GridProduct6 },
    { title: 'Macbook Air M1', image: GridProduct7 },
    { title: 'FitBit Versa', image: GridProduct8 },
    { title: 'Sony Bluetooth Earpiece', image: GridProduct9 },
    { title: 'Samsung Flip', image: GridProduct10 },
    { title: 'Lenovo 360', image: GridProduct11 },
    { title: 'Apple iPad Pro', image: GridProduct12 },
]

export const electronicsList: any = [
    { title: 'iPhone 12', image: GridProduct1, rate: 4.5, regularPrice: 1000, salePrice: 950, checked: false, productType: 'Smart Phone (iOS)', subTitle: 'OTC Medicine' },
    { title: 'Apple Air Pod Pro', image: GridProduct2, rate: 4.7, regularPrice: 300, salePrice: 289, checked: false, productType: 'Ear Pods', subTitle: 'OTC Medicine' },
    { title: 'Apple Air Pod Max', image: GridProduct3, rate: 4.2, regularPrice: 800, salePrice: 799, checked: false, productType: 'Headphone', subTitle: 'OTC Medicine' },
    { title: 'Sony Headphones', image: GridProduct4, rate: 3.5, regularPrice: 400, salePrice: 389, checked: false, productType: 'Headphone', subTitle: 'OTC Medicine' },
    { title: 'Bose Headphones', image: GridProduct5, rate: 4.6, regularPrice: 450, salePrice: 420, checked: false, productType: 'Headphone', subTitle: 'OTC Medicine' },
    { title: 'One Plus 8T', image: GridProduct6, rate: 4.1, regularPrice: 500, salePrice: 480, checked: false, productType: 'Smart Phone (Android)', subTitle: 'OTC Medicine' },
    { title: 'Macbook Pro M1', image: GridProduct7, rate: 2.5, regularPrice: 1200, salePrice: 1139, checked: false, productType: 'Laptop (Apple)', subTitle: 'OTC Medicine' },
    { title: 'FitBit Versa', image: GridProduct8, rate: 4.9, regularPrice: 199, salePrice: 165, checked: false, productType: 'Smart Watch', subTitle: 'OTC Medicine' },
    { title: 'Sony Bluetooth Earpiece', image: GridProduct9, rate: 4.5, regularPrice: 229, salePrice: 200, checked: false, productType: 'Bluetooth Earphones', subTitle: 'OTC Medicine' },
    { title: 'Samsung Flip', image: GridProduct10, rate: 4.5, regularPrice: 599, salePrice: 579, checked: false, productType: 'Smart Phone (Android)', subTitle: 'OTC Medicine' },
    { title: 'Lenovo 360', image: GridProduct11, rate: 4.5, regularPrice: 899, salePrice: 880, checked: false, productType: 'Laptop (Windows)', subTitle: 'OTC Medicine' },
    { title: 'Apple iPad Pro', image: GridProduct12, rate: 4.5, regularPrice: 899, salePrice: 850, checked: false, productType: 'Tab (iOS)', subTitle: 'OTC Medicine' },
]

export const filteringList: any = [
    { image: GridProduct1, title: 'Phone and Tabs', child: ['iPhone 12', 'iPhone 11', 'iPhone 11 Pro', 'iPhone 12 Pro', 'iPhone 12 Pro Mx T', 'Samsung Flip', 'Samsung S14', 'Samsung S123', 'One Plus 8', 'One Plus 8T'] },
    { image: GridProduct2, title: 'Laptops', child: ['MacBook Pro M1', 'MacBook Air M1', 'MacBook Pro Mx M1', 'Lenovo 360'] },
    { image: GridProduct5, title: 'Music', child: ['Apple Airpods Pro', 'Apple Airpods Pro Max', 'Apple Airpods Pro Max Super', 'Bose Headphones', 'Sony Headphones', 'Sone Bluetooth Earphones'] },
    { image: GridProduct8, title: 'Smart Watches', child: ['FitBit Versa', 'FitBit Versa 2', 'MI Band', 'MI Band Pro', 'MI Band Pro Max T'] },
    { image: GridProduct2, title: 'Computers', child: ['MacBook Pro M1', 'MacBook Air M1', 'MacBook Pro Mx M1', 'Lenovo 360'] },

]

export const electronicsList_2 = [{
    content:
        [{ title: 'iPhone 12', image: GridProduct1, rate: 4.5, regularPrice: 1000, salePrice: 950, checked: false, productType: 'Smart Phone (iOS)', subTitle: 'OTC Medicine' },
        { title: 'Apple Air Pod Pro', image: GridProduct2, rate: 4.7, regularPrice: 300, salePrice: 289, checked: false, productType: 'Ear Pods', subTitle: 'OTC Medicine' }]
},
{
    content:
        [{ title: 'Apple Air Pod Max', image: GridProduct3, rate: 4.2, regularPrice: 800, salePrice: 799, checked: false, productType: 'Headphone', subTitle: 'OTC Medicine' },
        { title: 'Sony Headphones', image: GridProduct4, rate: 3.5, regularPrice: 400, salePrice: 389, checked: false, productType: 'Headphone', subTitle: 'OTC Medicine' }]
},
{
    content:
        [{ title: 'Bose Headphones', image: GridProduct5, rate: 4.6, regularPrice: 450, salePrice: 420, checked: false, productType: 'Headphone', subTitle: 'OTC Medicine' },
        { title: 'One Plus 8T', image: GridProduct6, rate: 4.1, regularPrice: 500, salePrice: 480, checked: false, productType: 'Smart Phone (Android)', subTitle: 'OTC Medicine' }]
},
{
    content:
        [{ title: 'Macbook Pro M1', image: GridProduct7, rate: 2.5, regularPrice: 1200, salePrice: 1139, checked: false, productType: 'Laptop (Apple)', subTitle: 'OTC Medicine' },
        { title: 'FitBit Versa', image: GridProduct8, rate: 4.9, regularPrice: 199, salePrice: 165, checked: false, productType: 'Smart Watch', subTitle: 'OTC Medicine' }]
},
{
    content:
        [{ title: 'Sony Bluetooth Earpiece', image: GridProduct9, rate: 4.5, regularPrice: 229, salePrice: 200, checked: false, productType: 'Bluetooth Earphones', subTitle: 'OTC Medicine' },
        { title: 'Samsung Flip', image: GridProduct10, rate: 4.5, regularPrice: 599, salePrice: 579, checked: false, productType: 'Smart Phone (Android)', subTitle: 'OTC Medicine' }]
},
{
    content:
        [{ title: 'Lenovo 360', image: GridProduct11, rate: 4.5, regularPrice: 899, salePrice: 880, checked: false, productType: 'Laptop (Windows)', subTitle: 'OTC Medicine' },
        { title: 'Apple iPad Pro', image: GridProduct12, rate: 4.5, regularPrice: 899, salePrice: 850, checked: false, productType: 'Tab (iOS)', subTitle: 'OTC Medicine' }]
}
]

export const electronicsList_3 = [{
    content:
        [{ title: 'iPhone 12', image: GridProduct1, rate: 4.5, regularPrice: 1000, salePrice: 950, checked: false, productType: 'Smart Phone (iOS)', subTitle: 'OTC Medicine' },
        { title: 'Apple Air Pod Pro', image: GridProduct2, rate: 4.7, regularPrice: 300, salePrice: 289, checked: false, productType: 'Ear Pods', subTitle: 'OTC Medicine' },
        { title: 'FitBit Versa', image: GridProduct8, rate: 4.9, regularPrice: 199, salePrice: 165, checked: false, productType: 'Smart Watch', subTitle: 'OTC Medicine' }]
},
{
    content:
        [{ title: 'Apple Air Pod Max', image: GridProduct3, rate: 4.2, regularPrice: 800, salePrice: 799, checked: false, productType: 'Headphone', subTitle: 'OTC Medicine' },
        { title: 'Sony Headphones', image: GridProduct4, rate: 3.5, regularPrice: 400, salePrice: 389, checked: false, productType: 'Headphone', subTitle: 'OTC Medicine' },
        { title: 'Samsung Flip', image: GridProduct10, rate: 4.5, regularPrice: 599, salePrice: 579, checked: false, productType: 'Smart Phone (Android)', subTitle: 'OTC Medicine' }]
},
{
    content:
        [{ title: 'Bose Headphones', image: GridProduct5, rate: 4.6, regularPrice: 450, salePrice: 420, checked: false, productType: 'Headphone', subTitle: 'OTC Medicine' },
        { title: 'One Plus 8T', image: GridProduct6, rate: 4.1, regularPrice: 500, salePrice: 480, checked: false, productType: 'Smart Phone (Android)', subTitle: 'OTC Medicine' },
        { title: 'Apple iPad Pro', image: GridProduct12, rate: 4.5, regularPrice: 899, salePrice: 850, checked: false, productType: 'Tab (iOS)', subTitle: 'OTC Medicine' }]
},
{
    content:
        [{ title: 'Macbook Pro M1', image: GridProduct7, rate: 2.5, regularPrice: 1200, salePrice: 1139, checked: false, productType: 'Laptop (Apple)', subTitle: 'OTC Medicine' },
        { title: 'FitBit Versa', image: GridProduct8, rate: 4.9, regularPrice: 199, salePrice: 165, checked: false, productType: 'Smart Watch', subTitle: 'OTC Medicine' },
        { title: 'Apple Air Pod Pro', image: GridProduct2, rate: 4.7, regularPrice: 300, salePrice: 289, checked: false, productType: 'Ear Pods', subTitle: 'OTC Medicine' }]
},
{
    content:
        [{ title: 'Sony Bluetooth Earpiece', image: GridProduct9, rate: 4.5, regularPrice: 229, salePrice: 200, checked: false, productType: 'Bluetooth Earphones', subTitle: 'OTC Medicine' },
        { title: 'Samsung Flip', image: GridProduct10, rate: 4.5, regularPrice: 599, salePrice: 579, checked: false, productType: 'Smart Phone (Android)', subTitle: 'OTC Medicine' },
        { title: 'Sony Headphones', image: GridProduct4, rate: 3.5, regularPrice: 400, salePrice: 389, checked: false, productType: 'Headphone', subTitle: 'OTC Medicine' }]
},
{
    content:
        [{ title: 'Lenovo 360', image: GridProduct11, rate: 4.5, regularPrice: 899, salePrice: 880, checked: false, productType: 'Laptop (Windows)', subTitle: 'OTC Medicine' },
        { title: 'Apple iPad Pro', image: GridProduct12, rate: 4.5, regularPrice: 899, salePrice: 850, checked: false, productType: 'Tab (iOS)', subTitle: 'OTC Medicine' },
        { title: 'One Plus 8T', image: GridProduct6, rate: 4.1, regularPrice: 500, salePrice: 480, checked: false, productType: 'Smart Phone (Android)', subTitle: 'OTC Medicine' }]
}
]