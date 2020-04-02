import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import Hello from './Hello';
import './themes/default/index.less';

ReactDOM.render(
    React.createElement(hot(Hello)),
    document.getElementById('app')
);
