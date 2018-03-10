/**
 * Created by chenqu on 2018/3/10.
 */
import Checkbox from 'antd/lib/checkbox';  // 加载 JS
import 'antd/lib/checkbox/style/css';        // 加载 CSS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CheckboxHighlight.pcss';

export default class CheckboxHighlight extends Component {

    static PropTypes = {
        onChange: PropTypes.func.isRequired,
        labelFront: PropTypes.string.isRequired,
        labelHighlight: PropTypes.string.isRequired,
        labelEnd: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        onChange: (key) => {
        },
        labelFront: '',
        labelHighlight: '',
        labelEnd: '',
        checked: false,
    };

    // static Checkbox = TabPane;

    constructor(props) {
        super(props);
        this.onChange = ::this.onChange;
    }

    componentWillMount() {
        const { checked } = this.props;
        this.setState({
            checked,
        });
    }

    onChange = (e) => {
        const { onChange } = this.props;
        onChange(e.target.checked);
        this.setState({
            checked: e.target.checked,
        });
    }

    render() {
        const { labelFront, labelHighlight, labelEnd } = this.props;
        const { checked } = this.state;
        return (
            <Checkbox onChange={this.onChange} checked={checked} >
                <div className="label">{labelFront}</div>
                <div className="label highlight">{labelHighlight}</div>
                <div className="label">{labelEnd}</div>
            </Checkbox>
        );
    }
}