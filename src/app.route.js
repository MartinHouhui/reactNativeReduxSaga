import React from 'react';
import FirstPageComponent from './pages/FirstPageComponent';
import SecondPageComponent from './pages/SecondPageComponent';
import ThirdPageComponent from './pages/ThirdPageConpomet';

const routeStack = [
    {
        name: 'FirstPageComponent', component: FirstPageComponent
    },
    {
        name: 'SecondPageComponent', component: SecondPageComponent
    },
    {
        name: 'ThirdPageComponent', component: ThirdPageComponent
    }
];

export default routeStack;