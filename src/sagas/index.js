import { fork } from 'redux-saga/effects';

import todo from './todo';

export default function* root() {
    yield fork(todo);
}