import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const CORE_FEATURE_KEY = 'core';

/*
 * Update these interfaces according to your requirements.
 */
export interface CoreEntity {
  id: number;
}

export interface CoreState extends EntityState<CoreEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const coreAdapter = createEntityAdapter<CoreEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchCore())
 * }, [dispatch]);
 * ```
 */
export const fetchCore = createAsyncThunk(
  'core/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getCores()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialCoreState: CoreState = coreAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
});

export const coreSlice = createSlice({
  name: CORE_FEATURE_KEY,
  initialState: initialCoreState,
  reducers: {
    add: coreAdapter.addOne,
    remove: coreAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCore.pending, (state: CoreState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchCore.fulfilled,
        (state: CoreState, action: PayloadAction<CoreEntity[]>) => {
          coreAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchCore.rejected, (state: CoreState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const coreReducer = coreSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(coreActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const coreActions = coreSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllCore);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = coreAdapter.getSelectors();

export const getCoreState = (rootState: unknown): CoreState =>
  rootState[CORE_FEATURE_KEY];

export const selectAllCore = createSelector(getCoreState, selectAll);

export const selectCoreEntities = createSelector(getCoreState, selectEntities);
