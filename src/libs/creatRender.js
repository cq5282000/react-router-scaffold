/**
 * Created by chenqu on 2017/10/10.
 */
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';

export default (Entry) => {
    return render(
        <AppContainer>
            <Entry />
        </AppContainer>,
        document.getElementById('app'),
    );
};
