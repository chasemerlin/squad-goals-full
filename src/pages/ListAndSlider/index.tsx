/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/



import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardSlider from './CardSlider';
import ProductsCards from './ProductsCards';
import LargeCards from './LargeCards';
import ExpandableList from './ExpandableList';
import Eventcards from './Eventcards';
import MovieTicket from './MovieTicket';
import Sliders from './Sliders';
import FilteringList from './FilteringList';
// import CameraContainer from './CameraContainer';

class GridIndexView extends Component {

    render() {
        return ([
            <Switch>
                <Route exact path='/list-sliders/card-slider' component={CardSlider} />
                <Route exact path='/list-sliders/products-cards' component={ProductsCards} />
                <Route exact path='/list-sliders/large-cards' component={LargeCards} />
                <Route exact path='/list-sliders/expandable-list' component={ExpandableList} />
                <Route exact path='/list-sliders/event-cards' component={Eventcards} />
                <Route exact path='/list-sliders/movie-ticket' component={MovieTicket} />
                <Route exact path='/list-sliders/sliders' component={Sliders} />
                <Route exact path='/list-sliders/filtering-list' component={FilteringList} />
                {/* <Route exact path='/list-sliders/camera-container' component={CameraContainer} /> */}
            </Switch>]
        );
    }
}

export default GridIndexView;
