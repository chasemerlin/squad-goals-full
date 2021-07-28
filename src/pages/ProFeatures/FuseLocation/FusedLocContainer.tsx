/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import FusedView from './FuledLocView';
// import { FusedLocation } from '@jonoj/capacitor-fused-location';
import { Capacitor, Plugins } from "@capacitor/core";
const { FusedLocation } = Plugins;

class FusedLocContainer extends Component {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            location: false,
            lat: null,
            lng: null
        };
    }

    getFusedLocation = async () => {
        try {
            if (!(Capacitor.platform === 'hybrid') && !(Capacitor.platform === 'android')) {
                console.log('only android support!');
                return;
            }
            console.log(FusedLocation)

            const coordinates = await FusedLocation.getCurrentPosition();
            this.setState({
                lat: coordinates.coords.latitude,
                lng: coordinates.coords.longitude,
            })
            alert(coordinates)
            console.log('Current', coordinates);
        }
        catch (err) {
            console.log('err', err)
        }

    }

    watchPosition() {
        if (!(Capacitor.platform === 'hybrid') && !(Capacitor.platform === 'android')) {
            console.log('only android support!');
            return;
        }
        FusedLocation.watchPosition({}, (position: any, err: any) => {
            try {
                if (err) {
                    console.log('err', err)
                    return;
                }
                console.log('position', position);
            }
            catch (err) {
                console.log('err', err)
            }
        })
    }

    render() {
        const { location, lat, lng } = this.state
        return (
            <FusedView
                location={location}
                lat={lat}
                lng={lng}
                getCurrentLocation={this.getFusedLocation}
            />
        );
    }
}

export default FusedLocContainer;