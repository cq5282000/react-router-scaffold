/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';

export default class DetailContainer extends Component {

    constructor(props) {
        super(props);
        this.onChange = ::this.onChange;
    }

    onChange(e) {
        console.log(e.target);
    }

    render() {
        return (
            <div>
                <input onChange={this.onChange} />
            </div>
        );
    }

}
