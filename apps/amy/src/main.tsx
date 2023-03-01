import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import {
  CORE_FEATURE_KEY,
  coreReducer,
} from './app/core/store/core/core.slice';

import {
  AI_FEATURE_KEY,
  aiReducer,
} from './app/features/assortment-intelligence/store/ai/ai.slice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({
  reducer: { [AI_FEATURE_KEY]: aiReducer, [CORE_FEATURE_KEY]: coreReducer },
  // Additional middleware can be passed to this array
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
