/**
 * Created by chenqu on 2017/9/29.
 */
import React, {
    Component,
} from 'react';
import Recorder from 'recorder-js';

export default class TestContainer extends Component {
    constructor(props) {
        super(props);
        this.onRecordingStart = this.onRecordingStart.bind(this);
        this.onRecordingEnd = this.onRecordingEnd.bind(this);
        // this.onRecordingExport = this.onRecordingExport.bind(this);
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.recorder = null;
    }

    componentWillMount() {
        this.recorder = new Recorder(this.audioContext, {
            // An array of 255 Numbers
            // You can use this to visualize the audio stream
            // If you use react, check out react-wave-stream
            onAnalysed: (data) => { console.log(data); },
        });
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => this.recorder.init(stream))
            .catch((err) => console.log('Uh oh... unable to get stream...', err));
        this.blob = null;
    }

    componentDidMount() {}

    onRecordingStart() {
        console.log('onRecordingStart');
        this.startRecording();
    }

    onRecordingEnd() {
        console.log('onRecordingEnd');
        this.stopRecording();
    }
    download() {
        Recorder.download(this.blob, 'my-audio-file'); // downloads a .wav file
    }
    async startRecording() {
        await this.recorder.start();
            // .then(() => {
            //     console.log('recording');
            // });
    }

    stopRecording() {
        this.recorder.stop()
            .then(({
                blob,
                buffer,
            }) => {
                this.blob = blob;
            });
    }

    render() {
        return (
            <div>
                <button onClick={this.onRecordingStart}>开始录音</button>
                <button onClick={this.onRecordingEnd}>结束录音</button>
            </div>
        );
    }
}