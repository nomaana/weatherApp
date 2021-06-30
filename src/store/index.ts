import {
  createStore,
  combineReducers,
  applyMiddleware,
  DeepPartial,
} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer, PersistConfig} from 'redux-persist';
import sample, {SampleState} from './reducers/sample/sampleReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  /**
   * add keys here to forget state
   *  */
  blacklist: ['sample'],
};

export interface RootState {
  sample: SampleState;
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers<RootState>({
    sample,
  }),
);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;
