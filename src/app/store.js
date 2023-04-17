import { configureStore } from "@reduxjs/toolkit";
import { setup } from '@reduxjs/toolkit/query';
import { cryptoApi } from "../services/cryptoApi";

const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),

})

setup({
    reducerPath: cryptoApi.reducerPath,
    baseQuery: cryptoApi.baseQuery,
  });


  export default store;