import { StyleProvider } from '@ant-design/cssinjs';
import { Input } from 'antd';
import React from 'react';

function Components({ container }) {
    return (
        <StyleProvider container={container}>
            <Input placeholder="Enter text here" />
        </StyleProvider>
    );
}

export default Components;