/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { Plugins } from "@capacitor/core";
import CopyClipboardView from './CopyView';
const { Clipboard, Toast } = Plugins;
class CopyclipboardContainer extends Component {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            pastedText: ''
        };
    }
    clipData = [
        { clipText: 'Apply 10% flat off', buttonCode: 'ENAPPD10', color: 'success' },
        { clipText: 'Apply 20% flat off', buttonCode: 'ENAPPD20', color: 'secondary' },
        { clipText: 'Apply 35% flat off', buttonCode: 'ENAPPD35', color: 'tertiary' },
        { clipText: 'Apply 40% flat off', buttonCode: 'ENAPPD40', color: 'warning' },
        { clipText: 'Apply 15% flat off', buttonCode: 'ENAPPD15', color: 'danger' },
    ];
    copyToClipboard = async (data: any) => {
        console.log(data)
        // Copy Clipboard
        Clipboard.write({
            string: data
        });
        let str = await Clipboard.read();
        console.log('text receive from clipboard', str.value);
        await Toast.show({
            text: `Coupon ${data} copied to clipboard`,
            duration: 'long'
        });
    }
    pasteFromClipboard = async () => {
        let str = await Clipboard.read();
        this.setState({
            pastedText: str.value
        })
    }
    render() {
        const { pastedText } = this.state
        return (
            <CopyClipboardView
                clipData={this.clipData}
                copyToClipboard={(data: any) => this.copyToClipboard(data)}
                pasteFromClipboard={() => this.pasteFromClipboard()}
                pastedText={pastedText}
            />
        );
    }
}

export default CopyclipboardContainer;