/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/detailAction';

@connect((state) => ({
    show: state.detail.show,
}), {
    showOp: actions.showOp,
    hideOp: actions.hideOp,
})

export default class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.onClickShow = ::this.onClickShow;
        this.onClickHide = ::this.onClickHide;
    }

    onClickHide() {
        const { hideOp } = this.props;
        hideOp();
    }

    onClickShow() {
        const { showOp } = this.props;
        showOp();
    }

    render() {
        const { show } = this.props;
        return (
            <div>
                <button onClick={this.onClickShow}>+</button>
                <button onClick={this.onClickHide}>-</button>
                { show && <h1>FormContainer</h1> }
            </div>
        );
    }
}
