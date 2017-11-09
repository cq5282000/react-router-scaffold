/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/detailAction';

// @connect((state) => ({
//     show: state.detail.show,
// }), {
//     showOp: actions.showOp,
//     hideOp: actions.hideOp,
// })

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.onClickShow = ::this.onClickShow;
        this.onClickHide = ::this.onClickHide;
        this.onClickRefresh = ::this.onClickRefresh;
    }

    componentWillMount() {
        // Android.showToast('hello jsbridge');
    }

    onClickHide() {
        const { hideOp } = this.props;
        hideOp();
        Android.showToast('hello jsbridge');
    }

    onClickShow() {
        const { showOp } = this.props;
        showOp();
    }

    onClickRefresh() {
        location.reload();
    }

    render() {
        const { show } = this.props;
        return (
            <div>
                <button onClick={this.onClickShow}>显示</button>
                <button onClick={this.onClickHide}>隐藏</button>
                <button onClick={this.onClickRefresh}>刷新</button>
                { show && <h1>FormContainer</h1> }
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
