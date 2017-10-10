/**
 * Created by chenqu on 2017/10/10.
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

export default (Entry) => {
    return render(
        <AppContainer>
            <Entry />
        </AppContainer>,
        document.getElementById('app'),
    );
}