import {compose, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import createSagaMiddleware from 'redux-saga';
import {createNetworkMiddleware} from 'react-native-offline';
import AsyncStorage from '@react-native-community/async-storage';
import RootReducer from './root-reducer';
import RootSaga from './root-saga';

export type AppState = ReturnType<typeof RootReducer>;

export default () => {
  const middlewares = [];
  const enhancers = [];

  const networkMiddleware = createNetworkMiddleware({
    queueReleaseThrottle: 200,
  });
  middlewares.push(networkMiddleware);

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middlewares));

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: null,
    stateReconciler: autoMergeLevel1,
  };
  const persistedReducer = persistReducer(persistConfig, RootReducer);
  const store = compose(...enhancers)(createStore)(persistedReducer);
  const persistor = persistStore(store);

  sagaMiddleware.run(RootSaga);

  return {store, persistor};
};
