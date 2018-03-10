/**
 * Created by chenqu on 2018/3/10.
 */
import Input from 'antd/lib/input';  // 加载 JS
import 'antd/lib/input/style/css';        // 加载 CSS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputComponent extends Component {

    static PropTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
    };

    static defaultProps = {
        onChange: (key) => {
        },
        value: '',
    };

    constructor(props) {
        super(props);
        this.onInputChange = ::this.onInputChange;
        this.state = {
            value: '',
        };
    }

    componentWillMount() {
        const { value } = this.props;
        this.setState({
            value,
        });
    }

    onInputChange = (e) => {
        this.setState({
            value: e.target.value,
        });
        const { onChange } = this.props;
        onChange(e.target.value);
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <Input value={value} onChange={this.onInputChange} />
            </div>
        );
    }

}