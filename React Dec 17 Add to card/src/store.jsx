import { configureStore } from "@reduxjs/toolkit";
import proReducer from "./productSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root",
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, proReducer);
const store= configureStore({
    reducer:{
        myproduct:persistedReducer
    }
})
export const persistor = persistStore(store);
export default store;