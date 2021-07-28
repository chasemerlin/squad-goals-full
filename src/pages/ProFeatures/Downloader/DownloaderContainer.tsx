/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import React, { Component } from 'react';
import { Downloader, DownloadEventData, ProgressEventData } from 'capacitor-downloader';
import DownloaderView from './DownloaderView';
const downloader = new Downloader();
class DownloaderContainer extends Component {
    state: any
    download: any;
    downloadId: any;
    constructor(props: any) {
        super(props);
        this.state = {
            downloadedPath: 'Click on button to know',
            status: 'unset' // unset, pending, paused, downloading, completed, canceled, error
        };
    }

    setDownload = async () => {
        this.setState({
            status: 'pending'
        })
        this.download = await downloader.createDownload({
            url:
                'https://www.dropbox.com/s/8is256ji21klvrb/t6.mp4?dl=1'
        });
    }

    startDownload = async () => {
        this.setState({
            status: 'downloading'
        })
        this.downloadId = this.download.value;
        downloader
            .start({ id: this.downloadId }, (progressData: ProgressEventData) => {
                console.log(`Progress : ${progressData.value}%`);
                console.log(`Current Size : ${progressData.currentSize}%`);
                console.log(`Total Size : ${progressData.totalSize}%`);
                console.log(`Download Speed in bytes : ${progressData.speed}%`);
            })
            .then((completed: DownloadEventData) => {
                console.log(`Image : ${completed.path}`);
                this.setState({
                    downloadedPath: completed.path,
                    status: 'completed'
                })
                alert('completed.path' + completed.path);
            })
            .catch((error: any) => {
                console.log(error.message);
            });
    }

    pauseDownload = async () => {
        this.setState({
            status: 'paused'
        })
        downloader.pause({ id: this.downloadId });
    }

    resumeDownload = async () => {
        this.setState({
            status: 'downloading'
        })
        downloader.resume({ id: this.downloadId });
    }

    cancelDownload = async () => {
        this.setState({
            status: 'canceled'
        })
        downloader.cancel({ id: this.downloadId });
    }

    // getDeviceInfo = async () => {
    //     // Device information plugin
    //     const info = await Device.getInfo();
    //     this.setState({
    //         deviceInfo: info
    //     })
    //     console.log(this.state.deviceInfo);
    // }
    render() {
        const { downloadedPath, status } = this.state
        return (
            <DownloaderView
                downloadedPath={downloadedPath}
                status={status}
                setDownload={this.setDownload}
                startDownload={this.startDownload}
                pauseDownload={this.pauseDownload}
                resumeDownload={this.resumeDownload}
                cancelDownload={this.cancelDownload}
            />
        );
    }
}

export default DownloaderContainer;