/**
 * Created by chenqu on 2017/10/17.
 */
import React, { Component } from 'react';

const LoadingComponent = () => {
    return <div>加载中...</div>;
};

// const route = () => {
//     import("./module").then(module => {
//         return module.default;
//     }).catch(err => {
//         console.log("Chunk loading failed");
//     });
// };

const HOCFactory = (...params) => {
    /**
     * @ WrappedComponent 组件路径
     * @ param 根据需要添加，在此处做相关处理
     */
    return (WrappedComponent) => {
        return class extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    TodoComponent: null,
                };
            }
            componentDidMount() {
                require.ensure([], (require) => {
                    // const TodoComponent = require(WrappedComponent).default;
                    // const TodoComponent = require(WrappedComponent).default;
                    import(`../components/${WrappedComponent}`).then((module) => {
                        this.setState({
                            TodoComponent: module.default,
                        });
                    });
                }, WrappedComponent);
            }
            render() {
                const { TodoComponent } = this.state;
                return (
                    TodoComponent ? <TodoComponent {...this.props} /> : <LoadingComponent />
                );
            }
        };
    };
};

export default HOCFactory;
