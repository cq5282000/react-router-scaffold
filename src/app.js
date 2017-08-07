/**
 * Created by chenqu on 2017/7/25.
 */
import './style.css';
import Test from './index.js';
Test.log();
if (module.hot) {
    module.hot.accept('./index.js', function () {
        console.log('accept the update libr');
        Test.log();
    });
}

