import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';

const rootReducer = combineReducers({
  // ... Add your other reducers here ...
  network,
});

export default rootReducer;
