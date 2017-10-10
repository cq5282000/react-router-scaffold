/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/detailAction';

class DetailContainer extends Component {

    constructor(props) {
        super(props);
        this.onClickShow = ::this.onClickShow;
        this.onClickHide = ::this.onClickHide;
    }

    onClickShow() {
        const { showOp } = this.props;
        showOp();
    }

    onClickHide() {
        const { hideOp } = this.props;
        hideOp();
    }

    render() {
        const { show } = this.props;
        return (
            <h1>
                <button onClick={this.onClickShow}> + </button>
                <button onClick={this.onClickHide}> - </button>
                { show && <div>显示或者</div> }
            </h1>
        );
    }
}

export default connect((state) => ({
    show: state.detail.show,
}), {
    showOp: actions.showOp,
    hideOp: actions.hideOp,
})(DetailContainer);
