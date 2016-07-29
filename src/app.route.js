import React from 'react';
import FirstPageComponent from './pages/FirstPageComponent';
import SecondPageComponent from './pages/SecondPageComponent';
import ThirdPageComponent from './pages/ThirdPageConpomet';
import listPage from './pages/listPage';

const routeStack = [
    {
        name: 'ThirdPageComponent', component: listPage
    },
    {
        name: 'FirstPageComponent', component: FirstPageComponent
    },
    {
        name: 'SecondPageComponent', component: SecondPageComponent
    }
    
];

export default routeStack;