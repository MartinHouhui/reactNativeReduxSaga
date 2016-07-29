import React from 'react';
import FirstPageComponent from './pages/FirstPageComponent';
import SecondPageComponent from './pages/SecondPageComponent';
import ThirdPageComponent from './pages/ThirdPageConpomet';
import listPage from './pages/listPage';

const routeStack = [
    {
        name: 'FirstPageComponent', component: FirstPageComponent
    },
    {
        name: 'SecondPageComponent', component: SecondPageComponent
    },
    {
        name: 'ThirdPageComponent', component: listPage
    }
];

export default routeStack;