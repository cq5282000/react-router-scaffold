/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import CheckboxHighlight from '../components/CheckboxHighlight';
import InputCompoennt from '../components/InputComponent';
import './DetailContainer.pcss';

export default class DetailContainer extends Component {

    constructor(props) {
        super(props);
        this.onCheckboxChange = ::this.onCheckboxChange;
        this.onInputChange = ::this.onInputChange;
        this.state = {
            inputValue: '',
            dataBus: [
                {
                    labelFront: 'chenqu_ceshi1',
                    labelHighlight: '',
                    labelEnd: '',
                    value: 'chenqu_ceshi1',
                },
                {
                    labelFront: 'lisa_ceshi1',
                    labelHighlight: '',
                    labelEnd: '',
                    value: 'lisa_ceshi1',
                },
                {
                    labelFront: 'chenqu_ceshi2',
                    labelHighlight: '',
                    labelEnd: '',
                    value: 'chenqu_ceshi2',
                },
                {
                    labelFront: 'lisa_ceshi2',
                    labelHighlight: '',
                    labelEnd: '',
                    value: 'lisa_ceshi2',
                },
                {
                    labelFront: 'chenqu_ceshi3',
                    labelHighlight: '',
                    labelEnd: '',
                    value: 'chenqu_ceshi3',
                },
                {
                    labelFront: 'lisa_ceshi3',
                    labelHighlight: '',
                    labelEnd: '',
                    value: 'lisa_ceshi3',
                },
            ],
            dataNew: [],
        };
    }

    componentWillMount() {
        const { dataBus } = this.state;
        this.setState({
            dataNew: dataBus,
        });
    }

    onCheckboxChange = (selected) => {
        console.log('checkoutbox:', selected);
    }

    onInputChange = (inputValue) => {
        this.setState({
            inputValue,
        });
        const { dataBus } = this.state;
        let dataNew = [];
        dataBus.map((item, index) => {
            if (item.value.indexOf(inputValue) !== -1) {
                const start = item.value.indexOf(inputValue);
                const itemNew = {
                    labelFront: item.value.substring(0, start),
                    labelHighlight: item.value.substring(start, start + inputValue.length),
                    labelEnd: item.value.substring(start + inputValue.length, item.value.length),
                };
                dataNew = [...dataNew, itemNew];
            }
            return null;
        });
        this.setState({
            dataNew,
        });
    }

    render() {
        const { dataNew } = this.state;
        return (
            <div className="content-padded">
                <div className="input-style">
                    <InputCompoennt onChange={this.onInputChange} />
                </div>
                <div className="checkbox-wrapper">
                    {
                        dataNew.map((item, index) => {
                            return (
                                <div key={`checkbox${index}`}>
                                    <CheckboxHighlight
                                        onChange={this.onCheckboxChange}
                                        labelFront={item.labelFront}
                                        labelHighlight={item.labelHighlight}
                                        labelEnd={item.labelEnd}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

}
