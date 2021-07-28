/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import GeoMapView from './GeoMapView';
import { Capacitor, Plugins, CallbackID } from "@capacitor/core";
import LocationService from './Location';

const { Geolocation, Toast } = Plugins;

class GeoMap extends Component {
    state: any;
    watchId: CallbackID = '';
    constructor(props: any) {
        super(props);
        this.state = {
            center: {
                lat: 12.934485599999999,
                lng: 77.6192336,
            },
            latitude: 18.934485599999999,
            longitude: 87.6192336,
            loading: false
        };
    }

    checkPermissions = async () => {
        console.log('check permissions');
        const hasPermission = await LocationService.checkGPSPermission();
        if (hasPermission) {
            console.log('11');
            if (Capacitor.isNative) {
                console.log('12');
                const canUseGPS = await LocationService.askToTurnOnGPS();
                this.postGPSPermission(canUseGPS);
            }
            else {
                console.log('13');
                this.postGPSPermission(true);
            }
        }
        else {
            console.log('14');
            const permission = await LocationService.requestGPSPermission();
            if (permission === 'CAN_REQUEST' || permission === 'GOT_PERMISSION') {
                console.log('15');
                if (Capacitor.isNative) {
                    console.log('16');
                    const canUseGPS = await LocationService.askToTurnOnGPS();
                    this.postGPSPermission(canUseGPS);
                }
                else {
                    console.log('16');
                    this.postGPSPermission(true);
                }
            }
            else {
                console.log('17');
                await Toast.show({
                    text: 'User denied location permission'
                })
            }
        }
    }

    postGPSPermission = async (canUseGPS: boolean) => {
        if (canUseGPS) {
            this.watchPosition();
        }
        else {
            await Toast.show({
                text: 'Please turn on GPS to get location'
            })
        }
    }

    watchPosition = async () => {
        try {
            this.setState({
                loading: true
            })
            console.log('2');
            this.watchId = Geolocation.watchPosition({}, (position, err) => {

                if (err) {
                    console.log('3');
                    console.log('err', err);
                    return;
                }
                console.log('position', position);
                this.setState({
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    loading: false
                }, () => {
                    this.clearWatch();
                })
            })
        }
        catch (err) {
            console.log('err', err)
        }
    }

    clearWatch() {
        console.log('4');
        if (this.watchId != null) {
            Geolocation.clearWatch({ id: this.watchId });
        }
        this.setState({
            loading: false
        })
    }
    render() {
        const { center, loading } = this.state
        console.log('geoloc lat lang', center);
        return (
            <GeoMapView
                center={center}
                latitude={center.lat}
                longitude={center.lng}
                getGeoLocation={this.checkPermissions}
                loading={loading}
            />
        );
    }
}

export default GeoMap;