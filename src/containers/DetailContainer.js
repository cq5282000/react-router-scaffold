/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
// import DetailComponent from '../components/DetailComponent';
import HOCFactory from '../HOC/index';

export default class DetailContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DetailComponent: null,
        };
    }

    componentWillMount() {
        this.setState({
            DetailComponent: HOCFactory({ value: 'test' })('DetailComponent/DetailComponent.js'),
        });
    }

    render() {
        const { DetailComponent } = this.state;
        return (
            <div>
                <DetailComponent />
            </div>
        );
    }

}
