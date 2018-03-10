/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import Input from 'antd/lib/input';  // 加载 JS
import 'antd/lib/input/style/css';        // 加载 CSS
import CheckboxHighlight from '../components/CheckboxHighlight';
import './DetailContainer.pcss';

export default class DetailContainer extends Component {

    constructor(props) {
        super(props);
        console.log('');
        this.onCheckboxChange = ::this.onCheckboxChange;
        this.onInputChange = ::this.onInputChange;
        this.state = {
            inputValue: '',
        };
    }

    componentWillMount() {
        // this.setState({
        //     DetailComponent: HOCFactory({ value: 'test' })('DetailComponent/DetailComponent.js'),
        // });
    }

    onCheckboxChange = (e) => {
        console.log('checkoutbox:', e);
    }

    onInputChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    }

    render() {
        const { inputValue } = this.state;
        return (
            <div className="content-padded">
                <div className="input-style">
                    <Input onChange={this.onInputChange} />
                </div>
                <div className="checkbox-wrapper">
                    <CheckboxHighlight onChange={this.onCheckboxChange} labelFront="lanbleFront" labelHighlight="labelHighlight" labelEnd="labelEnd" />
                </div>

            </div>
        );
    }

}
