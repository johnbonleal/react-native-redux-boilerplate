import {all, fork, AllEffect, ForkEffect} from 'redux-saga/effects';
import {networkSaga} from 'react-native-offline';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<unknown>>,
  void,
  unknown
> {
  yield all([
    /**
     * Place your other sagas here.
     */
    fork(networkSaga, {pingInterval: 20000}),
  ]);
}
