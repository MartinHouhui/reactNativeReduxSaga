import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux'

import * as reducers from './reducers';

import RouteStack from './app.route';

import createSagaMiddleware from 'redux-saga';

import SagaManager from './sagas/SagaManager';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const enhancer = compose(
  applyMiddleware(sagaMiddleware)
);
const reducer = combineReducers(reducers);
const store = createStore(reducer, initialState, enhancer);
SagaManager.startSagas(sagaMiddleware);


export default class SampleComponent extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator
                    initialRouteStack={RouteStack}
                    initialRoute={RouteStack[0]}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.VerticalDownSwipeJump;
                    } }
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    } }
                    />
            </Provider>
        );
    }
}

