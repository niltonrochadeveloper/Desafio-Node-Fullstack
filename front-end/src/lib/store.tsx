import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { api } from "@/services";
import auth from "./features/auth";

const reducers = combineReducers({
  auth,
  [api.reducerPath]: api.reducer,
});

// import { errorHandler } from '../helpers/middlewares';
// import { signedInStatusListener, signedOutListener } from '../helpers/listeners';

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({ serializableCheck: false })
      .prepend
      // signedInStatusListener.middleware,
      // signedOutListener.middleware
      ()
      .concat(
        api.middleware
        // errorHandler
      );

    // config flipper

    // if (__DEV__ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require('redux-flipper').default;
    //   middlewares.push(createDebugger());
    // }

    return middlewares;
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
