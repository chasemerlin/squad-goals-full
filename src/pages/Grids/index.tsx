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
import SquareGrid from './SquareGrid'
import CardGrid from './CardGrid'
import FullGrid from './FullGrid'
import MasonryGrid from './MasonryGrid'
import ProductGrid from './ProductGrid'
import ShopGrid from './ShopGrid'

class GridIndexView extends Component {

    render() {
        return ([

            <Switch>
                <Route exact path='/grids/shop-grid' component={ShopGrid} />
                <Route exact path='/grids/square-grid' component={SquareGrid} />
                <Route exact path='/grids/full-grid' component={FullGrid} />
                <Route exact path='/grids/masonry-grid' component={MasonryGrid} />
                <Route exact path='/grids/card-grid' component={CardGrid} />
                <Route exact path='/grids/product-grid' component={ProductGrid} />
            </Switch>]
        );
    }
}

export default GridIndexView;
