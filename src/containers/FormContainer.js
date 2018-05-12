/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/detailAction';
import './FormContainer.pcss';

// @connect((state) => ({
//     show: state.detail.show,
// }), {
//     showOp: actions.showOp,
//     hideOp: actions.hideOp,
// })

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.onClickShow = this.onClickShow.bind(this);
        this.onClickHide = this.onClickHide.bind(this);
        this.onClickRefresh = this.onClickRefresh.bind(this);
        this.onWordClick = this.onWordClick.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentWillMount() {
        // Android.showToast('hello jsbridge');
    }

    componentDidMount() {
        // document.getElementById('word').addEventListener('drag', (e) => {
        //     // e.dataTransfer.setData('Text', e.target);
        //     // console.log(e.clientX);
        //     // console.log(e.clientY);
        //     // console.log(e.offsetX);
        //     // console.log(e.offsetY);
        //     // console.log(e.target || e.srcElement);
        // }, false);
        // document.getElementById('word').addEventListener('dragend', (e) => {
        //     console.log(e.clientX);
        //     console.log(e.clientY);
        // }, false);
    }

    onDragEnd(e) {
        console.log(e.clientX);
        console.log(e.clientY);
    }

    onClickHide() {
        const { hideOp } = this.props;
        hideOp();
        // Android.showToast('hello jsbridge');
    }

    onClickShow() {
        const { showOp } = this.props;
        showOp();
    }

    onClickRefresh() {
        location.reload();
    }

    onWordClick(e) {
        console.log('click');
    }

    render() {
        const { show } = this.props;
        return (
            <div id="dropdown">
                <button onClick={this.onClickShow}>显示</button>
                <button onClick={this.onClickHide}>隐藏</button>
                <button onClick={this.onClickRefresh}>刷新</button>
                { show && <div onDragEnd={this.onDragEnd} draggable="true" id="word" onClick={this.onWordClick}><h1>FormContainer</h1></div> }
                <div className="img-wrapper" />
            </div>
        );
    }
}

export default connect((state) => ({
    show: state.detail.show,
}), {
    showOp: actions.showOp,
    hideOp: actions.hideOp,
})(FormContainer);
