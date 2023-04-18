import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import counterSlice from "../reducers/counterReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
// For ios - need to do pod-install after the installation of AsyncStorage library

/*
Persist Config -
  interface PersistConfig<S, RS = any, HSS = any, ESS = any> {
    version?: number;
    storage: Storage;
    key: string;
    blacklist?: Array<string>;
    whitelist?: Array<string>;
    transforms?: Array<Transform<HSS, ESS, S, RS>>;
    throttle?: number;
    migrate?: PersistMigrate;
    stateReconciler?: false | StateReconciler<S>;
    getStoredState?: (config: PersistConfig<S, RS, HSS, ESS>) => Promise<PersistedState>;
    debug?: boolean;
    serialize?: boolean;
    timeout?: number;
    writeFailHandler?: (err: Error) => void;
  }
*/
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers({
    counter: counterSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);