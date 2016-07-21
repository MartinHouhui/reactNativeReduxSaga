import React from 'react';
import FirstPageComponent from './pages/FirstPageComponent';
import SecondPageComponent from './pages/SecondPageComponent';

const routeStack = [
    {
        name: 'FirstPageComponent', component: FirstPageComponent
    },
    {
        name: 'SecondPageComponent', component: SecondPageComponent
    }
];

export default routeStack;